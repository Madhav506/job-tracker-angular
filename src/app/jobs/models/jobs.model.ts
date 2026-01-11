export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  dateApplied: string; // ISO string
  status: 'applied' | 'interviewing' | 'offer' | 'rejected';
}
