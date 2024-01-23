import { tracks } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMACK"
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h1>DMACK</h1>

      {tracks.map((track) => <div key={track.slug}>
        <Link href={`/track/${track.slug}`}>
          <Image src={`/track-files/${track.slug}/cover.png`} alt={track.title} width={300} height={300} />
        </Link>
      </div>)}
    </main>
  );
}
