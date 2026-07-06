import GalleryClient from './GalleryClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Roy Services',
  description: 'View our gallery of premium catering events, food presentations, and luxury setups in Siliguri.',
};

export default function Page() {
  return <GalleryClient />;
}
