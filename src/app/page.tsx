import "./globals.css";
import { Anonymous_Pro, Anton } from "next/font/google";

import Image from "next/image";

const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-anonymous-pro",
});
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

type Track = {
  image: StaticImageData;
  title: string;
  url: string;
};

function t(image: StaticImageData, title: string, url: string): Track {
  return { image, title, url };
}

import outOfMyHead from "../../public/tracks/out-of-my-head.png";
import stripWub from "../../public/tracks/strip-wub.png";
import discoHorse from "../../public/tracks/disco-horse.png";
import hb from "../../public/tracks/hb.png";
import tailgate from "../../public/tracks/tailgate.png";
import tropicalSun from "../../public/tracks/tropical-sun.png";

const tracks: Track[] = [
  t(
    outOfMyHead,
    "Can't get you out of my head",
    "https://soundcloud.com/deeeemack/cant-get-you-out-of-my-head"
  ),
  t(stripWub, "Strip-Wub", "https://soundcloud.com/deeeemack/strip-wub"),
  t(discoHorse, "Disco Horse", "https://soundcloud.com/deeeemack/disco-horse"),
  t(
    hb,
    "Haber Bosch",
    "https://soundcloud.com/deeeemack/haber-bosch-process-dec-16-2023"
  ),
  t(tailgate, "Tailgate", "https://soundcloud.com/deeeemack/tailgate"),
  t(
    tropicalSun,
    "Tropical Sun",
    "https://soundcloud.com/deeeemack/tropical-sun"
  ),
];

import { StaticImageData } from "next/image";
import Gallery from "./gallery";
import { Metadata } from "next";
import Emailer from "@/components/Emailer";

export const metadata: Metadata = {
  title: "DMACK",
  description:
    "David Mack is a multi-disciplinary creative who loves bringing people together for fun and meaningful experiences",
};

export default function Home() {
  return (
    <html className={`${anton.variable} ${anonymousPro.variable}`}>
      <body>
        <main className="flex min-h-screen flex-col items-center gap-6 p-6">
          <section>
            <img src="/img/header_tile.svg" />
          </section>

          <section>
            <p>
              Based in Truckee California, David Mack is a multi-disciplinary
              creative who loves bringing people together for fun and meaningful
              experiences
            </p>
          </section>

          <section>
            <h1>Music</h1>

            <div className="flex flex-wrap gap-4 mb-3">
              {tracks.map((track) => (
                <div key={track.url}>
                  <a href={track.url} target="_blank">
                    <Image
                      className="md:hidden"
                      src={track.image}
                      alt={track.title}
                      width={130}
                      height={130}
                    />
                    <Image
                      className="hidden md:block"
                      src={track.image}
                      alt={track.title}
                      width={150}
                      height={150}
                    />
                  </a>
                </div>
              ))}
            </div>

            <p>
              <a href="https://soundcloud.com/deeeemack">
                See more on SoundCloud
              </a>
            </p>

            <br />

            <p>
              My first love is house music, and frequently when I&apos;m
              exploring other decades, or other genres, I use that as the force
              to bring things together into a unified whole. In my journey as a
              musician, I&apos;m always focussed on discovering everything that
              I do not know, and exploring those sonic frontiers.
            </p>
          </section>

          <section>
            <h1>Events & Lighting</h1>

            <Gallery />

            <br />
            <br />

            <p>
              I care most about meaningfully bringing together community to
              experience the beautiful, mysterious and sublime.
            </p>

            <p>
              I&apos;ve been developing a lighting control system,{" "}
              <a href="https://github.com/davidhughhenrymack/party-parrot">
                Party Parrot
              </a>
              , which listens to the music and improvises a lighting design,
              across an unlimited array of fixtures, including LED floods,
              moving heads, motion bars, and lasers.
            </p>
          </section>

          <section>
            <h1>Bookings</h1>
            <p>
              I am actively looking for interesting creative projects to take
              on. Feel free to get in touch, it&apos;s always exciting to talk
              to new people.
            </p>
            <p>
              I can provide lighting, dj and sound systems for events, as well
              as graphic design.
            </p>
            <p>
              <a
                href="https://www.instagram.com/davidhughhenrymack"
                className="flex gap-2"
              >
                <img src="/img/insta.svg" width="20" height="20" />
                @davidhughhenrymack
              </a>
            </p>
            <Emailer />
          </section>
        </main>
      </body>
    </html>
  );
}
