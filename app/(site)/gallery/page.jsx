import SiteFooter from '../../../components/SiteFooter';
import { withBase } from '../../../lib/basePath';
import GalleryTabs from './GalleryTabs';
import { VIDEOS, IMAGES, REELS } from './gallery-data';

export const metadata = {
  title: 'SliceX Films | Gallery — Films, Photographs & Reels',
  description:
    'Browse the SliceX Films gallery: cinematic wedding films, fine-art photographs and vertical reels from real celebrations across India.',
};

export default function GalleryPage() {
  return (
    <>
    <div className="flex flex-col w-full">
      <section className="relative w-full px-margin-mobile lg:px-margin-desktop pt-space-2xl pb-space-xl overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary-container/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-primary">05 / THE GALLERY</span>
          </div>
          <h1 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase tracking-tight text-on-surface max-w-5xl mb-space-lg leading-[1.08]">
            EVERY FRAME, <span className="text-primary italic font-headline-lg">ARCHIVED.</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg w-full items-end">
            <p className="lg:col-span-7 font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
              Films, photographs and reels from real celebrations — browse by format, filter by story, and watch everything
              right here in the screening room.
            </p>
            <div className="lg:col-span-5 flex flex-wrap gap-space-xs lg:justify-end items-center">
              <span className="px-space-sm py-space-2xs bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest rounded">{VIDEOS.length} Films</span>
              <span className="px-space-sm py-space-2xs bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest rounded">{IMAGES.length} Stills</span>
              <span className="px-space-sm py-space-2xs bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest rounded">{REELS.length} Reels</span>
            </div>
          </div>
        </div>
      </section>

      <GalleryTabs videos={VIDEOS} images={IMAGES} reels={REELS} />
    </div>

    <SiteFooter />
    </>
  );
}
