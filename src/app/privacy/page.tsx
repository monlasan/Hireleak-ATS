import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy',
  robots: {
    index: false,
    follow: true,
  },
};
const PrivacyPage = () => {
  return <div>PrivacyPage</div>;
};

export default PrivacyPage;
