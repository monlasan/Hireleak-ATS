import RegisterForm from '@/components/RegisterForm';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';

const SignUp = async () => {
  return (
    <MaxWidthWrapper>
      <div className='py-8 pb-16 flex justify-center gap-4'>
        <RegisterForm />
      </div>
    </MaxWidthWrapper>
  );
};

export default SignUp;
