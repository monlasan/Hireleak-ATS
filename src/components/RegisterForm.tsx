'use client';

import React from 'react';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import { cn, slugify } from '@/lib/utils';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import { signUpWithEmailAndPassword } from '@/lib/actions/auth-server.actions';
import { createOrganization } from '@/lib/actions/organization.actions';
import { useUser } from '@/store/user.store';

const formSchema = z
  .object({
    org_name: z.string().min(1, 'Enter a name for the organization.'),
    first_name: z.string().min(1, 'Enter a your first name.').max(20),
    last_name: z.string().min(1, 'Enter a your last name.').max(20),
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, { message: 'Must be at least 6 characters.' }),
    confirm_password: z
      .string()
      .min(6, { message: 'Must be at least 6 characters.' }),
    privacy: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password'],
  });

const RegisterForm = () => {
  const { setUser } = useUser();
  const [isPending, startTransition] = React.useTransition();
  const [isOver, setIsOver] = React.useState(false);
  const [file, setFile] = React.useState<File>({} as File);
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
    if (selectedFile) {
      if (
        selectedFile.type.startsWith('image/') &&
        selectedFile.type !== 'image/gif'
      ) {
        setFile(selectedFile);
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
        toast.error('Please drop only image files (GIFs are not supported).');
        return null;
      }
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
      droppedFile.type.startsWith('image/') &&
      droppedFile.type !== 'image/gif'
    ) {
      setFile(droppedFile);

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
      // Handle non-image files here
      toast.error('Please drop only image files (GIFs are not supported).');
      return null;
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      org_name: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      privacy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      // todo: Add logic to upload image to ImbBB
      const res_organization = await createOrganization(
        values.org_name,
        '',
        slugify(values.org_name)
      );
      const { data: data_org, error: error_org } = JSON.parse(res_organization);
      if (error_org?.message) {
        toast.error(
          'Something went wrong while registering. Please try again.'
        );
      }
      const result = await signUpWithEmailAndPassword({
        email: values.email,
        password: values.password,
        confirm: values.confirm_password,
        metadata: {
          organization: data_org[0],
          first_name: values.first_name,
          last_name: values.last_name,
        },
      });
      const { data, error } = JSON.parse(result);
      setUser(data.user);
      if (error?.message) {
        toast.error(error?.message);
        console.error(error);
      } else {
        toast.success('You are successfully registered.');
      }
    });
    // router.push('/sign-in');
    // toast.success(
    //   'A confirmation email has been sent to specified email address. Please verify your email.'
    // );
    // } catch (err: String | any) {
    //   toast.error(err);
    //   dispatch(signInFailure(err));
    // }
  }

  return (
    <div className='w-full max-w-xl'>
      <div className='mb-6 flex items-center justify-center gap-2'>
        <hr className='border hidden sm:inline border-zinc-200 flex-1' />
        <h1 className='text-zinc-800 font-medium text-xl text-center'>
          Create an account
        </h1>
        <hr className='border hidden sm:inline border-zinc-200 flex-1' />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6 sm:space-y-6 w-full'
        >
          <div className='flex flex-col items-center gap-4 w-full justify-center'>
            <div className='flex items-center justify-center gap-3 flex-col'>
              <Input
                type='file'
                onChange={handlePickedFile}
                className='sr-only'
                ref={fileInputRef}
              />
              <div
                className={cn(
                  'w-[110px] h-[110px] bg-white/50 flex justify-center cursor-pointer hover:scale-105 transition-transform items-center border border-dashed overflow-hidden rounded-full',
                  isOver && 'opacity-70 scale-105',
                  isPending && 'select-none opacity-70 pointer-events-none'
                )}
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Image
                  src={(orgLogo as string) || '/round-image-placeholder.png'}
                  alt='Organization logo placeholder image'
                  width={110}
                  height={110}
                  className={cn(
                    'object-contain opacity-70',
                    Object.keys(file).length > 0 && 'opacity-100'
                  )}
                />
              </div>
              <div
                onClick={() => fileInputRef.current.click()}
                className='text-center cursor-pointer text-xs opacity-70'
              >
                Drop your organization logo here, <br /> you can also click to
                select.
              </div>
            </div>

            <FormField
              control={form.control}
              name='org_name'
              render={({ field }) => (
                <FormItem className='relative w-full'>
                  <FormLabel className='text-zinc-600'>Organization</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500 '
                      disabled={isPending}
                      placeholder='Enter your organization name'
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
              name='first_name'
              render={({ field }) => (
                <FormItem className='relative flex-1 w-full'>
                  <FormLabel className='text-zinc-600'>First name</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500 '
                      disabled={isPending}
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
                      disabled={isPending}
                      placeholder='Enter your last name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='absolute top-0 translate-y-[66px] left-0' />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='relative '>
                <FormLabel className='text-zinc-600'>Email</FormLabel>
                <FormControl>
                  <Input
                    className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500 '
                    disabled={isPending}
                    placeholder='Enter your email address'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='absolute top-0 translate-y-[66px] left-0' />
              </FormItem>
            )}
          />
          <div className='flex flex-col sm:flex-row items-center gap-4 gap-y-6'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='relative flex-1 w-full'>
                  <FormLabel className='text-zinc-600'>Password</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500'
                      disabled={isPending}
                      placeholder='Enter your password'
                      type='password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='absolute top-0 translate-y-[66px] left-0' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirm_password'
              render={({ field }) => (
                <FormItem className='relative flex-1 w-full'>
                  <FormLabel className='text-zinc-600'>
                    Confirm password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500'
                      disabled={isPending}
                      placeholder='Confirm password'
                      type='password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='absolute top-0 translate-y-[66px] left-0' />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='privacy'
            render={({ field }) => (
              <FormItem className='relative flex pt-2 gap-2'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className='space-x-0 text-zinc-600 relative bottom-1'>
                  I accept {APP_NAME}{' '}
                  <Link className='text-primary underline' href='/terms'>
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link className='text-primary underline' href='/privacy'>
                    Privacy Policy
                  </Link>
                  .
                </FormLabel>
                <FormMessage className='absolute top-0 translate-y-[66px] left-0' />
              </FormItem>
            )}
          />
          <div className='pt-4'>
            <Button
              disabled={isPending || !form.getValues('privacy')}
              className=' w-full'
              type='submit'
            >
              {isPending && <Loader className='mr-2 animate-spin' />}
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
