"use client";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import NextJsImage from "../components/NextJsImage";

import image1 from "../../public/photos/1.jpeg";
import image2 from "../../public/photos/2.jpeg";
import image3 from "../../public/photos/3.jpeg";
import image4 from "../../public/photos/4.jpeg";
import image5 from "../../public/photos/5.jpeg";
import image6 from "../../public/photos/6.jpeg";
import image7 from "../../public/photos/7.jpeg";
import image8 from "../../public/photos/8.jpeg";
import image9 from "../../public/photos/9.jpeg";
import image10 from "../../public/photos/10.jpeg";
import image11 from "../../public/photos/11.jpeg";
import image12 from "../../public/photos/12.jpeg";
import image13 from "../../public/photos/13.jpeg";

function shuffle<T>(array: T[]): T[] {
  const result = array.slice();
  result.sort(() => Math.random() - 0.5);
  return result;
}

const slides = shuffle([
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
]);

import PhotoAlbum from "react-photo-album";
import { useState } from "react";

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  return (
    <div>
      <PhotoAlbum
        layout="rows"
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        render={{ slide: NextJsImage, thumbnail: NextJsImage }}
        plugins={[Thumbnails]}
      />
    </div>
  );
}
