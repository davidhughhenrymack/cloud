import { getDataUrl, tracks } from "@/tracks";
import Link from "next/link";

import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <html >
      <body className={inter.className}>

        <main className="flex min-h-screen flex-col items-center gap-10 p-24">
          <h1>DMACK</h1>

          {tracks.map((track) => <div key={track.slug}>
            <Link href={`/track/${track.slug}`}>
              <img src={getDataUrl(track.slug, 'cover.png')} alt={track.title} width={300} height={300} />
            </Link>
          </div>)}
        </main>
      </body></html>
  );

}
