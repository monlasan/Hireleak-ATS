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
import { Loader } from 'lucide-react';
import { signInWithEmailAndPassword } from '@/lib/actions/auth-server.actions';
import { useUser } from '@/store/user.store';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

const LoginForm = () => {
  const { setUser } = useUser();
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const { email, password } = values;
      const result = await signInWithEmailAndPassword({ email, password });
      const { data, error } = JSON.parse(result);
      setUser(data.user);
      if (error?.message) {
        toast.error(error?.message);
        console.error(error);
      }
    });
  }

  return (
    <div>
      <div className='mb-2 flex flex-col'>
        <h1 className='text-zinc-800 font-medium text-3xl '>Welcome back</h1>
        <p className='text-zinc-400 w-[286px] text-sm'>
          Please enter your credentials.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-3 w-full max-w-xs'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-zinc-600'>Email</FormLabel>
                <FormControl>
                  <Input
                    className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500 '
                    disabled={isPending}
                    placeholder='Enter your email address'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
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
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='pt-4'>
            <Button disabled={isPending} className=' w-full' type='submit'>
              {isPending && <Loader className='mr-2 animate-spin' />}
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
