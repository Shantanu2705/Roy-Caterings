import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Roy Services',
  description: 'Get in touch with Roy Services to book premium catering for your next event in Bagdogra, Siliguri.',
};

export default function Page() {
  return <ContactClient />;
}
