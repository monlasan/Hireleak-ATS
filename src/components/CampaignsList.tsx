import { fetchCampaigns } from '@/lib/actions/campaign.actions';
import CampaignsListItem from './CampaignsListItem';
import { type Campaign } from '@/lib/types';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import NewCampaignForm from './NewCampaignForm';

const CampaignsList = async () => {
  const result = await fetchCampaigns();
  const { data: campaigns, error } = JSON.parse(result);
  if (error?.message) {
    return <div>Something went wrong while fetching the campaigns.</div>;
  }

  return (
    <>
      {campaigns.length === 0 ? (
        <div className='border bg-white rounded p-8 flex flex-col justify-center items-center gap-6 text-center'>
          <p>No campaigns found 😮</p>
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <Plus className='mr-2' />
                Create one
              </Button>
            </SheetTrigger>
            <SheetContent className='w-full sm:max-w-max'>
              <SheetHeader className='pb-4'>
                <SheetTitle>New campaign</SheetTitle>
                {/* <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription> */}
              </SheetHeader>
              <NewCampaignForm />
            </SheetContent>
          </Sheet>
        </div>
      ) : (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          {campaigns.map((campaign: Campaign) => (
            <CampaignsListItem campaign={campaign} key={campaign.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default CampaignsList;
