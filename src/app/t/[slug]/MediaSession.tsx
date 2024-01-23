"use client"

import { Track, getDataUrl } from "@/tracks";
import { useEffect } from "react";


export function MediaSession({ track }: { track: Track }) {

    useEffect(() => {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title,
            artist: 'DMACK',
            album: '',
            artwork: [{ src: getDataUrl(track.slug, 'cover.png') }]
        });

    }, [track.slug]);

    return <></>;

}