import FaqClient from './FaqClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Roy Services',
  description: 'Frequently Asked Questions about our premium catering services in Siliguri.',
};

export default function Page() {
  return <FaqClient />;
}
