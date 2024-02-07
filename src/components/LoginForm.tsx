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

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

const LoginForm = () => {
  const [loading, isLoading] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // dispatch(signInStart());
    // try {
    //   const res: {
    //     user: any;
    //     accessToken: string;
    //     refreshToken: string;
    //   } = await authService.login({
    //     emailOrPhone: values.email,
    //     password: values.password,
    //   });
    //   dispatch(signInSuccess(res));
    //   LocalStorage.set('token', res.accessToken);
    //   navigate('/');
    // } catch (err: String | any) {
    //   toast.error(err);
    //   dispatch(signInFailure(err));
    // }
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
                    disabled={loading}
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
                    disabled={loading}
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
            <Button disabled={loading} className=' w-full' type='submit'>
              {loading && <Loader className='mr-2 animate-spin' />}
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
