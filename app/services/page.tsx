import ServicesClient from './ServicesClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Roy Services',
  description: 'Explore our luxury catering services for weddings, corporate events, private parties, and more in Bagdogra, Siliguri.',
};

export default function Page() {
  return <ServicesClient />;
}
