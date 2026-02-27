export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  createdAt: string;
}

export interface ApplicationData {
  jobId: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote: string;
}
