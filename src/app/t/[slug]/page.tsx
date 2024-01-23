

import { getDataUrl, tracks } from '@/tracks';
import { Metadata } from 'next';
import { MediaSession } from './MediaSession';

import { Inter } from "next/font/google";

import "../../globals.css"

type Props = {
  params: {
    slug: string;
  }
}

const inter = Inter({ subsets: ["latin"] });


export function generateMetadata({ params }: Props): Metadata {
  const meta = tracks.find(i => i.slug === params.slug);
  const d: Metadata = {
    title: meta?.title,
    openGraph: {
      title: meta?.title,
      images: meta ? [
        getDataUrl(meta?.slug, 'cover.png')
      ] : undefined
    }
  }
  return d;
}


export default function Page({ params }: Props) {

  const slug = params.slug;
  const meta = tracks.find(i => i.slug === slug);

  if (!meta) return <p>Track not found :(</p>;

  return <html >
    <body className={inter.className} style={{ background: meta.bg, color: meta.fg }}>

      <MediaSession track={meta} />

      <main className="flex h-[100vh] flex-col items-center justify-center gap-10 p-4 py-10">

        <div className='flex-initial h-[400px]'>
          <img src={getDataUrl(slug, 'cover.png')} alt="" className='h-full w-auto object-contain aspect-square' />
        </div>

        <h1 className='text-center'>{meta.title}</h1>

        <audio controls autoPlay>
          <source src={getDataUrl(slug, 'track.mp3')} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>


      </main>
    </body>
  </html>

}