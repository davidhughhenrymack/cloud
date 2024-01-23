import { getDataUrl, tracks } from "@/tracks";
import Link from "next/link";

import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <html>
      <body className={inter.className} style={{ background: "#112", color: "white" }}>

        <main className="flex min-h-screen flex-col items-center gap-6 p-6">
          <h1>DMACK</h1>

          <div className="flex flex-wrap gap-16 items-center justify-center">
            {tracks.map((track) => <div key={track.slug}>
              <Link href={`/t/${track.slug}`} >
                <img src={getDataUrl(track.slug, 'cover.png')} alt={track.title} width={300} height={300} />
              </Link>
            </div>)}
          </div>

        </main>
      </body></html>
  );

}
