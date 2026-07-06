import PrivacyClient from './PrivacyClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Roy Services',
  description: 'Privacy Policy for Roy Services catering.',
};

export default function Page() {
  return <PrivacyClient />;
}
