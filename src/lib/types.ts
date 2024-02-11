export type Applicants = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: number;
  resume_url: string;
  photo_url?: string;
  cover_letter?: string;
  results?: any;
  status?: string;
  percentage_obtained?: number;
  campaign_id: number;
};
