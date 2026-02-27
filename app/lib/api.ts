import { ApplicationData, Job } from "../types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchJobs(filters?: { search?: string; category?: string; location?: string }) {
  const params = new URLSearchParams();
  if (filters?.search) params.append('search', filters.search);
  if (filters?.category) params.append('category', filters.category);
  if (filters?.location) params.append('location', filters.location);
  const res = await fetch(`${API_BASE}/job/get-jobs?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch jobs');
  const json = await res.json();
  return json.data?.data || [];
}

export async function fetchJob(id: string) {
  const res = await fetch(`${API_BASE}/job/get-job/${id}`);
  if (!res.ok) throw new Error('Failed to fetch job');
  const json = await res.json();
  return json.data;
}

export async function createJob(jobData: Omit<Job, '_id' | 'createdAt'>) {
  const res = await fetch(`${API_BASE}/job/create-job`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jobData),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to create job');
  }
  const json = await res.json();
  return json.data;
}

export async function deleteJob(id: string) {
  const res = await fetch(`${API_BASE}/job/delete-job/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete job');
  const json = await res.json();
  return json.data;
}

export async function submitApplication(data: ApplicationData) {
  const res = await fetch(`${API_BASE}/application/create-application`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to submit application');
  }
  const json = await res.json();
  return json.data;
}