import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Roy Services',
  description: 'Learn about Roy Services, our mission, vision, and the professional team behind Bagdogra, Siliguri\'s premium catering.',
};

export default function Page() {
  return <AboutClient />;
}
