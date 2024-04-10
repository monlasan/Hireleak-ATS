'use server';

import { createClient } from '@/lib/supabase/server';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { type Campaign } from '../types';
import { redirect } from 'next/navigation';
import { sanitizeText } from '../utils';
// ---
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';

export async function processCampaignResumes(
  resume_url: string,
  job_description: string,
  acceptance_percentage: string
) {
  // console.log(FormDataEncoder);
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);
  const response = await fetch(resume_url);
  const blob = await response.blob();
  const loader = new PDFLoader(blob);
  const pageLevelDocs = await loader.load();

  const sanitized_resume = sanitizeText(pageLevelDocs[0].pageContent);
  const template = `
As a seasoned Applicant Tracking System (ATS) analyst with expertise in technology, software engineering, data science, and big data engineering, your primary responsibility is to meticulously evaluate resumes against provided job descriptions. In a highly competitive job market, you're tasked with ensuring top-notch assistance for resume improvement.

The company you're serving has set an acceptance criterion of ${acceptance_percentage}%, indicating the desired match between candidate skills and job description requirements.

Your goal is to conduct a comprehensive analysis of each resume, accurately assessing its alignment with the given job description. You'll assign a percentage match based on key criteria and identify any missing keywords with precision, following the formula:

Matching Percentage =
(
Number of Matching Keywords
Total Keywords in Job Description
)
×
100
Matching Percentage=( 
Total Keywords in Job Description
Number of Matching Keywords
​
 )×100

Your evaluation process is rigorous and methodical.

Here is the resume and the job description:

Resume:
{resume}

Job description:
{job_description}

The response format remains the same:

{{"job_description_match": "%","missing_keywords":"","candidate_summary":"", "candidate_pass": ""}}

Here's a breakdown of the attributes:

job_description_match: The calculated percentage indicating the match between the resume and the job description.
missing_keywords: Any essential keywords absent in the resume but present in the job description.
candidate_summary: A concise overview highlighting the candidate's qualifications and expertise.
candidate_pass: A boolean value ("true" or "false") indicating whether the candidate meets the company's acceptance criterion for hiring.
Please provide the response in a single string adhering to this structure.
`;

  const promptTemplate = new PromptTemplate({
    template,
    inputVariables: ['resume', 'job_description'],
  });

  const geminiModel = new ChatGoogleGenerativeAI({
    apiKey: 'AIzaSyAH7jL7l2_mfsC1VA0rjKC62N4v5pzhdQw',
    modelName: 'gemini-pro',
  });

  const llmChain = new LLMChain({
    llm: geminiModel,
    prompt: promptTemplate,
  });

  const result = await llmChain.call({
    resume: sanitized_resume,
    job_description,
  });
  console.log('🔴LLCHAIN RESULT PAYLOAD', result);

  return JSON.stringify(result.text);
}
