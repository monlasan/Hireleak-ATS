import LoginForm from '@/components/LoginForm';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';

const SignIn = async () => {
  return (
    <MaxWidthWrapper>
      <div className='py-24 flex justify-center gap-4'>
        <LoginForm />
      </div>
    </MaxWidthWrapper>
  );
};

export default SignIn;
