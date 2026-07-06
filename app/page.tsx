import HomeClient from './HomeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roy Services | Premium Catering in Siliguri',
  description: 'Creating unforgettable dining experiences across Siliguri with exceptional food, flawless service, and elegant presentation.',
};

export default function Page() {
  return <HomeClient />;
}
