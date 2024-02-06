import { Input } from './ui/input';
import { Loader, Search } from 'lucide-react';

const CampaignsListSearch = () => {
  return (
    <div className='flex flex-1 min-w-72 relative items-center'>
      <Search size={18} className='absolute opacity-40 left-3' />
      {/* <Loader size={18} className='absolute animate-spin opacity-40 left-3' /> */}
      <Input className='w-full pl-10 bg-white' placeholder='Search campaigns' />
    </div>
  );
};

export default CampaignsListSearch;
