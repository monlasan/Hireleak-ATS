'use client';

import React from 'react';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { BookOpen, Download, Eye, FileText, Loader } from 'lucide-react';
import Image from 'next/image';
import { cn, removeHtmlTags, uploadThing } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import TiptapEditor from '../TipTapEditor';
import { APP_NAME } from '@/lib/constants';
import {
  enlistApplicant,
  updateApplicantResults,
} from '@/lib/actions/applicant.actions';
import { type Campaign } from '@/lib/types';
import { processCampaignResumes } from '@/lib/actions/resume-processing.actions';

const formSchema = z.object({
  first_name: z.string().min(1, 'Enter your first name.').max(20),
  last_name: z.string().min(1, 'Enter your last name.').max(20),
  email: z.string().email('Enter a valid email'),
  phone_number: z.string().min(1, 'Enter your phone number.').max(20),
});

type FileInfos = {
  filename: string;
  filesize: number;
};

const CampaignApplicationForm = ({ campaign }: { campaign: Campaign }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [noCoverLetter, setNoJobDescription] = React.useState(false);
  const [file, setFile] = React.useState<File | null>({} as File);
  const [fileInfos, setFileInfos] = React.useState<FileInfos | null>(null);
  const [noResume, setNoResume] = React.useState(false);
  const [editorText, setEditorText] = React.useState('');
  const [loading, setIsLoading] = React.useState(false);
  const [isOver, setIsOver] = React.useState(false);
  const [orgLogo, setOrgLogo] = React.useState<string | ArrayBuffer | null>(
    null
  );
  const fileInputRef = React.useRef<any>();

  // Define the event handlers

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    fileInputRef.current.click();
  };
  const handlePickedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const selectedFile = event.target.files && event.target.files[0];
    if (!selectedFile) return;
    if (
      selectedFile.type === 'application/pdf' || // PDF file
      selectedFile.type === 'application/msword' || // DOC file
      selectedFile.type ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // DOCX file
    ) {
      setFile(selectedFile);

      // Extract file information
      const fileName = selectedFile.name; // File name
      // const fileExtension = fileName.split('.').pop(); // File extension
      const fileSize = selectedFile.size; // File size in bytes
      setFileInfos({
        filename: fileName,
        filesize: fileSize,
      });

      // Use FileReader to read file content
      const reader = new FileReader();

      reader.onloadend = () => {
        setOrgLogo(reader.result as string);
      };

      reader.onerror = () => {
        toast.error('There was an issue reading the file.');
      };

      reader.readAsDataURL(selectedFile);
      return reader;
    } else {
      // Handle non-PDF and non-document files here
      toast.error(
        'Please drop only PDFs and documents readable by Microsoft Word.'
      );
      return null;
    }
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);

    // Fetch the files
    const droppedFile = Array.from(event.dataTransfer.files)[0];
    // Check if the dropped file is an image (excluding GIFs)
    if (
      droppedFile.type === 'application/pdf' || // PDF file
      droppedFile.type === 'application/msword' || // DOC file
      droppedFile.type ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // DOCX file
    ) {
      setFile(droppedFile);

      // Extract file information
      const fileName = droppedFile.name; // File name
      // const fileExtension = fileName.split('.').pop(); // File extension
      const fileSize = droppedFile.size; // File size in bytes
      setFileInfos({
        filename: fileName,
        filesize: fileSize,
      });

      // Use FileReader to read file content
      const reader = new FileReader();

      reader.onloadend = () => {
        setOrgLogo(reader.result as string);
      };

      reader.onerror = () => {
        toast.error('There was an issue reading the file.');
      };

      reader.readAsDataURL(droppedFile);
      return reader;
    } else {
      // Handle non-PDF and non-document files here
      toast.error(
        'Please drop only PDFs and documents readable by Microsoft Word.'
      );
      return null;
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!fileInfos) {
      setNoResume((v) => (v = true));
      return;
    }
    setNoResume((v) => (v = false));
    setIsLoading(true);
    const formData = new FormData();
    if (!file) {
      toast.error('Please upload your resume');
      return;
    }
    formData.set('bucket', 'resumes');
    formData.set('file', file);
    const result_upload = await uploadThing(formData);
    if (!result_upload) {
      toast.error('Failed to submit application. Please try again.');
      setIsLoading(false);
      return;
    }
    const { data: uploadedFile, error: errorUpload } =
      JSON.parse(result_upload);
    if (errorUpload?.message) {
      toast.error(errorUpload?.message);
      setIsLoading(false);
    } else {
      const result = await enlistApplicant({
        campaign_id: campaign.id!,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        phone_number: values.phone_number,
        cover_letter: editorText,
        resume_url:
          process.env.NEXT_PUBLIC_SUPABASE_URL +
          '/storage/v1/object/public/' +
          uploadedFile.fullPath,
      });
      const { data: enlistedApplicantData, error } = JSON.parse(result);
      console.log('🟣Enlisted applicant', enlistedApplicantData);
      if (error?.message) {
        toast.error(error?.message);
        console.error(error);
        setIsLoading(false);
      } else {
        const processedResult = await processCampaignResumes(
          process.env.NEXT_PUBLIC_SUPABASE_URL +
            '/storage/v1/object/public/' +
            uploadedFile.fullPath,
          removeHtmlTags(campaign.job_description),
          String(campaign.acceptance_percentage)
        );
        const resultOfProcessing = await updateApplicantResults(
          enlistedApplicantData[0].id,
          processedResult
        );
        const {
          data: applicantResultProcessed,
          error: applicantResultProcessedError,
        } = JSON.parse(resultOfProcessing);

        if (applicantResultProcessedError?.message) {
          toast.error(error?.message);
          console.error(error);
          setIsLoading(false);
        } else {
          console.log('processedResult🟡', applicantResultProcessed);
          console.log('applicantResultProcessed🟢', applicantResultProcessed);

          toast.success(
            'You have successfully submitted your application. We will get back to you shortly.'
          );
          router.push('/thank-you');
        }
        // console.log('✅ SUBMITTED APPLICATION', data);
        // setFileInfos(null);
        // setFile(null);
        // setEditorText((v) => (v = ''));
        // form.reset();
        // setIsLoading(false);
      }
    }
    // let cover_letter = '';
    // if (
    //   !editorText ||
    //   editorText === '<p></p>' ||
    //   editorText === '<p><br></p>'
    // ) {
    // cover_letter = '_';
    // } else {
    //   cover_letter = editorText;
    // }

    // } catch (err: String | any) {
    //   toast.error(err);
    // }
  }

  return (
    <div className='w-full max-w-xl'>
      {/* <div className='mb-2 flex items-center justify-center gap-2'>
        <hr className='border hidden sm:inline border-zinc-200 flex-1' />
        <h1 className='text-zinc-800 font-medium text-xl text-center'>
          Create an account
        </h1>
        <hr className='border hidden sm:inline border-zinc-200 flex-1' />
      </div> */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6 w-full'
        >
          <div className='flex flex-col items-center gap-4 w-full justify-center'>
            <div className='flex items-center text-center justify-center gap-1 flex-col'>
              {campaign?.organization?.logo_url &&
              campaign.organization.logo_url.length > 0 ? (
                'az'
              ) : (
                // TODO: ADD IMAGE HERE
                <Image
                  src='/round-image-placeholder.png'
                  alt='Organization logo placeholder image'
                  width={110}
                  height={110}
                  className='object-contain'
                />
                // <div className='w-[110px] font-black text-5xl uppercase text-white h-[110px] flex justify-center items-center overflow-hidden rounded-full bg-gradient-to-tr from-primary to-secondary'>
                //   {'azaz'[0]}
                // </div>
              )}
              <p className='flex items-center justify-center flex-col  text-center text-3xl font-semibold'>
                <span className='text-primary text-xl font-bold my-3 inline-block'>
                  {campaign?.organization?.name}
                </span>{' '}
                {campaign.show_job_description && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size='sm'
                        className='text-center mb-3'
                        variant='outline'
                      >
                        <BookOpen className='mr-3 opacity-80' size={18} /> Read
                        job description
                      </Button>
                    </DialogTrigger>
                    <DialogContent className='w-full max-w-4xl'>
                      <DialogHeader>
                        <DialogTitle>Job description</DialogTitle>
                        <DialogDescription>{campaign.name}</DialogDescription>
                      </DialogHeader>
                      <Card className='text-sm font-normal flex flex-col gap-3'>
                        <ScrollArea className='h-[300px] p-4'>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: campaign.job_description,
                            }}
                            className='w-full h-full prose prose-h1:my-1 prose-h2:my-1 prose-h3:my-1 prose-h4::my-1 prose-h5:my-1 prose-h6:my-1 prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-blockquote:my-1'
                          />
                        </ScrollArea>
                      </Card>
                    </DialogContent>
                  </Dialog>
                )}
                <span className='mt-1 inline-block'>{campaign.name}</span>
              </p>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-center gap-4 gap-y-6'>
            <FormField
              control={form.control}
              name='first_name'
              render={({ field }) => (
                <FormItem className='relative flex-1 w-full'>
                  <FormLabel className='text-zinc-600'>First name</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500 '
                      disabled={loading}
                      placeholder='Enter your first name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='absolute top-0 translate-y-[66px] left-0' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='last_name'
              render={({ field }) => (
                <FormItem className='flex-1 relative w-full'>
                  <FormLabel className='text-zinc-600'>Last name</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500 '
                      disabled={loading}
                      placeholder='Enter your last name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='absolute top-0 translate-y-[66px] left-0' />
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-col sm:flex-row items-center gap-4 gap-y-6'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='relative flex-1 w-full'>
                  <FormLabel className='text-zinc-600'>Email</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500 '
                      disabled={loading}
                      placeholder='Enter your email address'
                      type='email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='absolute top-0 translate-y-[66px] left-0' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone_number'
              render={({ field }) => (
                <FormItem className='relative flex-1 w-full'>
                  <FormLabel className='text-zinc-600'>Phone number</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500 '
                      disabled={loading}
                      placeholder='Enter your phone number'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='absolute top-0 translate-y-[66px] left-0' />
                </FormItem>
              )}
            />
          </div>

          <div className='flex items-center justify-center gap-1 pt-3 flex-col'>
            <span className='text-xs text-left w-full text-zinc-600 font-medium inline-block mb-1'>
              Resume
            </span>
            <Input
              type='file'
              onChange={handlePickedFile}
              className='sr-only'
              ref={fileInputRef}
            />
            <div
              className={cn(
                'h-[110px] w-full gap-3 flex-col px-8 bg-zinc-100 flex justify-center rounded-md cursor-pointer hover:border-primary/60 transition-colors items-center border border-zinc-300 border-dashed overflow-hidden',
                isOver && 'border-primary/60',
                loading && 'select-none opacity-70 pointer-events-none'
              )}
              onClick={handleClick}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {fileInfos ? (
                <>
                  <FileText
                    className={cn(
                      'text-primary transition-colors',
                      isOver && 'text-zinc-500'
                    )}
                  />
                  <div className='text-zinc-500 text-center max-w-xl text-xs'>
                    {fileInfos.filename}
                  </div>
                </>
              ) : (
                <>
                  <Download
                    className={cn(
                      'text-zinc-500 transition-transform',
                      isOver && 'text-primary translate-y-1'
                    )}
                  />
                  <div className='text-zinc-500 text-center text-xs'>
                    Drag and drop your resume here. Or{' '}
                    <span className='text-primary'>click to upload</span> <br />
                    (PDF, DOC, DOCX)
                  </div>
                </>
              )}
            </div>
            {noResume && (
              <span className='text-xs font-medium inline-block w-full text-left text-destructive'>
                Please upload your resume
              </span>
            )}
          </div>

          <div className=''>
            <span className='text-xs text-zinc-600 font-medium inline-block mb-2'>
              Cover letter (optional)
            </span>
            <TiptapEditor
              isSubmitting={loading}
              editorText={editorText}
              setEditorText={setEditorText}
            />
          </div>

          <div>
            <Button disabled={loading} className=' w-full' type='submit'>
              {loading && <Loader className='mr-2 animate-spin' />}
              Apply
            </Button>
            <span className='opacity-70 text-xs inline-block w-full mt-4 text-center'>
              Powered by{' '}
              <Link
                href='https://app.name'
                target='_blank'
                className='text-primary underline'
              >
                {APP_NAME}
              </Link>
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CampaignApplicationForm;
