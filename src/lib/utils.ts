import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { createClient } from './supabase/client';
import { isAfter, isBefore, isToday } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomStringWithDate(separator = '###') {
  // Generate a random string
  const randomString =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  // Get the current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
  const day = String(currentDate.getDate()).padStart(2, '0');

  // Concatenate the random string and current date with the separator
  const result =
    randomString + separator + year + separator + month + separator + day;

  return result;
}

export async function uploadThing(formData: FormData) {
  const bucket = formData.get('bucket');
  const file = formData.get('file') as File;
  if (!bucket || !file) return;
  const supabase = createClient();

  const filename =
    'public/' + generateRandomStringWithDate() + '---' + file.name;

  if (bucket === 'images') {
    const result = await supabase.storage
      .from('images')
      .upload(filename.trim(), file);
    return JSON.stringify(result);
  }
  if (bucket === 'resumes') {
    const result = await supabase.storage
      .from('resumes')
      .upload(filename.trim(), file);
    return JSON.stringify(result);
  }
}

export function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function slugify(text: string) {
  return text
    .toString() // Cast to string (optional)
    .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\_/g, '-') // Replace _ with -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/\-$/g, ''); // Remove trailing -
}

export function getCampaignStatus(
  start_date: Date,
  end_date: Date,
  cancelled: boolean
) {
  const today = new Date();

  if (cancelled) {
    return {
      status: 'CANCELLED',
      class: 'bg-red-500 hover:bg-red-500 text-white',
    };
  }

  if (isBefore(today, start_date)) {
    return {
      status: 'PENDING',
      class: 'bg-orange-500 hover:bg-orange-500 text-white',
    };
  }

  if (isAfter(today, end_date)) {
    return {
      status: 'COMPLETED',
      class: 'bg-green-500 hover:bg-green-500 text-white',
    };
  }

  if (isToday(start_date) || isToday(end_date)) {
    return {
      status: 'RUNNING',
      class: 'bg-primary hover:bg-primary text-white',
    };
  }

  return {
    status: 'RUNNING',
    class: 'bg-primary hover:bg-primary text-white',
  }; // Default to RUNNING if today is between start_date and end_date
}

export function sanitizeText(text: string) {
  // Remove newline characters and excess whitespace
  text = text.replace(/\n+/g, ' ');

  // Remove special characters and formatting
  text = text.replace(/[^\w\s.,;&@:/()-]/g, '');

  // Replace multiple spaces with a single space
  text = text.replace(/\s+/g, ' ');

  return text.trim();
}
export function removeHtmlTags(text: string) {
  return text.replace(/<[^>]*>?/gm, '');
}
