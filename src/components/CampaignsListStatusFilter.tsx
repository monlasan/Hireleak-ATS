import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CampaignsListStatusFilter = () => {
  return (
    <Select>
      <SelectTrigger className='max-w-[180px] bg-white'>
        <SelectValue placeholder='Sort by status' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='pending'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-orange-400 rounded-full'></div>
            <span>Pending</span>
          </div>
        </SelectItem>
        <SelectItem value='running'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-primary rounded-full'></div>
            <span>Running</span>
          </div>
        </SelectItem>
        <SelectItem value='canceled'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <span>Cancelled</span>
          </div>
        </SelectItem>
        <SelectItem value='completed'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            <span>Completed</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CampaignsListStatusFilter;
