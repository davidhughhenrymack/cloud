

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
  return {
    title: meta?.title
  }
}


export default function Page({ params }: Props) {

  const slug = params.slug;
  const meta = tracks.find(i => i.slug === slug);

  if (!meta) return <p>Track not found :(</p>;

  return <html >
    <body className={inter.className} style={{ background: meta.bg, color: meta.fg }}>


      <main className="flex min-h-screen flex-col items-center gap-10 p-4 py-10">

        <MediaSession track={meta} />


        <img src={getDataUrl(slug, 'cover.png')} alt="" className='max-w-[60vw]' />



        <h1>{meta.title}</h1>

        <audio controls autoPlay>
          <source src={getDataUrl(slug, 'track.mp3')} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>


      </main>
    </body>
  </html>

}