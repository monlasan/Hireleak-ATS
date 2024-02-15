import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
type Props = {
  hideLabel?: boolean;
  url?: string;
  color?: 'B' | 'W' | 'CC' | 'CB' | 'WB' | 'BW';
};
const AppLogoHeader = ({ hideLabel, url = '/', color = 'CB' }: Props) => {
  let img = '';
  switch (color) {
    case 'B':
      img = 'Hireleak-B.png';
      break;
    case 'W':
      img = 'Hireleak-W.png';
      break;
    case 'CC':
      img = 'Hireleak-CC.png';
      break;
    case 'CB':
      img = 'Hireleak-CB.png';
      break;
    case 'WB':
      img = 'Hireleak-WB.png';
      break;
    case 'BW':
      img = 'Hireleak-BW.png';
      break;
    default:
      img = 'Hireleak-CB.png';
      break;
  }
  return (
    <Link href={url} className='flex w-[120px] items-center gap-2'>
      <Image src={'/' + img} alt={APP_NAME + ' logo'} width={120} height={32} />
      {/* {hideLabel ? (
      ): (
        <Image src={'/' + img} alt={APP_NAME + ' logo'} width={120} height={32} />

      )} */}
      {/* <span className='text-xs font-medium text-white hidden md:inline'> */}
      {/* embauch */}
      {/* </span> */}
    </Link>
  );
};

export default AppLogoHeader;
