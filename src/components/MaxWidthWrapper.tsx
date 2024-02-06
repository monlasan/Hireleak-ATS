const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className='mx-auto px-4 lg:px-12 max-w-7xl'>{children}</div>;
};

export default MaxWidthWrapper;
