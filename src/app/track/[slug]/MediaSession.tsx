"use client"

import { Track } from "@/constants";
import { useEffect } from "react";


export function MediaSession({ track }: { track: Track }) {

    useEffect(() => {

        const coverSrc = `/track-files/${track.slug}/cover.png`;

        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title,
            artist: 'DMACK',
            album: '',
            artwork: [{ src: coverSrc }]
        });

    }, [track.slug]);

    return <></>;

}