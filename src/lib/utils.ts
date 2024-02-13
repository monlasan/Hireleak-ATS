import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { createClient } from './supabase/client';

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

export async function uploadImg(formData: FormData) {
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
