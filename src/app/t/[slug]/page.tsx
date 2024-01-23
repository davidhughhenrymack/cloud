

import { getDataUrl, tracks } from '@/tracks';
import { Metadata } from 'next';
import { MediaSession } from './MediaSession';

import { Inter } from "next/font/google";

import { ArrowLeftIcon } from '@heroicons/react/24/solid'

import "../../globals.css"
import Link from 'next/link';

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
  const cover = getDataUrl(slug, 'cover.png')

  if (!meta) return <p>Track not found :(</p>;

  return <html >
    <body className={inter.className} style={{ background: meta.bg, color: meta.fg }}>

      <MediaSession track={meta} />

      <main>

        <div className='fixed top-0 bottom-0 left-0 right-0 z-0' style={{ backgroundImage: `url("${cover}")`, filter: 'blur(30px)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4 }}>
        </div>


        <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-8 p-4 z-10">


          <Link href="/" className='flex gap-2 opacity-20 hover:opacity-100'><ArrowLeftIcon className='h-6 w-6' /> Back</Link>


          <img src={cover} alt="" className='w-[300px] md:w-[400px] rounded-lg' />


          <div className='flex flex-col gap-1 items-center'>
            <h1 className='text-center'>{meta.title}</h1>
            <div className='flex gap-2 text-xs lowercase opacity-60'>
              {meta.tags?.map(tag => <span key={tag}>#{tag}</span>)}
            </div>
          </div>

          <audio controls autoPlay>
            <source src={getDataUrl(slug, 'track.mp3')} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>



        </div>

      </main>

    </body>
  </html>

}