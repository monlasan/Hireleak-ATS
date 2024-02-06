import CampaignsListItem from './CampaignsListItem';

const CampaignsList = () => {
  const campaigns = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {campaigns.map((campaign) => (
        <CampaignsListItem key={campaign.id} />
      ))}
    </div>
  );
};

export default CampaignsList;
