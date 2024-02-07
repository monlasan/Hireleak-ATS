import Link from 'next/link';
type Props = {
  hideLabel?: boolean;
  url: string;
};
const AppLogoHeader = ({ hideLabel, url }: Props) => {
  return (
    <Link href={url} className='flex items-center gap-2'>
      <div className='h-8 w-8 bg-primary justify-center rounded items-center flex text-white font-black'>
        <span className='-rotate-12 text-xl'>em</span>
      </div>
      {!hideLabel && (
        <span className='text-xs font-medium text-white hidden md:inline'>
          embauch
        </span>
      )}
    </Link>
  );
};

export default AppLogoHeader;
