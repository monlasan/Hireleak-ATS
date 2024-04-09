import { cn } from '@/lib/utils';

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('mx-auto px-4 lg:px-12 max-w-7xl', className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
