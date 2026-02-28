/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, FormEvent } from 'react';
import { Epilogue } from 'next/font/google';
import { submitApplication } from '../lib/api';

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

interface ApplyFormProps {
  jobId: string;
  onSuccess?: () => void;
}

export default function ApplyForm({ jobId, onSuccess }: ApplyFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resumeLink: '',
    coverNote: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic frontend validation
    if (!formData.name || !formData.email || !formData.resumeLink || !formData.coverNote) {
      setError('All fields are required');
      setLoading(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }
    try {
      new URL(formData.resumeLink);
    } catch {
      setError('Resume link must be a valid URL');
      setLoading(false);
      return;
    }

    try {
      await submitApplication({ jobId, ...formData });
      alert('Application submitted successfully!');
      setFormData({ name: '', email: '', resumeLink: '', coverNote: '' });
      onSuccess?.();
    } catch (err: any) {
      setError(err.message || 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${epilogue.className}`}>
      {error && <p className="text-red-600 text-sm bg-red-50 p-2 rounded">{error}</p>}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE] focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE] focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700 mb-1">
          Resume Link (URL)
        </label>
        <input
          type="url"
          id="resumeLink"
          name="resumeLink"
          required
          placeholder="https://example.com/resume.pdf"
          value={formData.resumeLink}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE] focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="coverNote" className="block text-sm font-medium text-gray-700 mb-1">
          Cover Note
        </label>
        <textarea
          id="coverNote"
          name="coverNote"
          rows={4}
          required
          value={formData.coverNote}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE] focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#4640DE] text-white py-3 rounded-lg hover:bg-[#3530b3] transition disabled:opacity-50 font-semibold"
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}