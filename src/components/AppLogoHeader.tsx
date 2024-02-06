import Link from 'next/link';

const AppLogoHeader = () => {
  return (
    <Link href='/dashboard' className='flex items-center gap-2'>
      <div className='h-8 w-8 bg-primary justify-center rounded items-center flex text-white font-black'>
        <span className='-rotate-12 text-xl'>em</span>
      </div>
      <span className='text-xs font-medium text-white'>embauch</span>
    </Link>
  );
};

export default AppLogoHeader;
