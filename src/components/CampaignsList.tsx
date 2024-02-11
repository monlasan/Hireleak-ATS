import { fetchCampaigns } from '@/lib/actions/campaign.actions';
import CampaignsListItem from './CampaignsListItem';
import { type Campaign } from '@/lib/types';

const CampaignsList = async () => {
  const result = await fetchCampaigns();
  const { data: campaigns, error } = JSON.parse(result);
  if (error?.message) {
    return <div>Something went wrong while fetching the campaigns.</div>;
  }

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
      {campaigns.map((campaign: Campaign) => (
        <CampaignsListItem campaign={campaign} key={campaign.id} />
      ))}
    </div>
  );
};

export default CampaignsList;
