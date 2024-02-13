export type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: any;
  user_metadata: {
    organization: {
      id: number;
      name: string;
      logo_url: string | undefined;
    };
    first_name: string;
    last_name: string;
    photo_url: string;
  };
  identities: any[];
  created_at?: Date | undefined;
  updated_at?: string;
};

export type Applicant = {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  resume_url: string;
  photo_url?: string;
  cover_letter?: string;
  results?: any;
  status?: string;
  percentage_obtained?: number;
  campaign_id: number;
  created_at?: Date | undefined;
  updated_at?: Date;
};

export type Campaign = {
  id?: number;
  name: string;
  starting_date: Date;
  end_date: Date;
  job_description: string;
  show_job_description: boolean;
  applicants_limit: number;
  acceptance_percentage: number;
  status: string;
  slug: string;
  results?: any;
  applicants?: Applicant[];
  organization_id: number;
  organization?: {
    id: number;
    name: string;
    name_slug: string;
    logo_url?: string;
  };
  created_at?: Date;
  updated_at?: Date;
};
