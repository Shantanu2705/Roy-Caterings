import TermsClient from './TermsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Roy Services',
  description: 'Terms of Service for Roy Services catering.',
};

export default function Page() {
  return <TermsClient />;
}
