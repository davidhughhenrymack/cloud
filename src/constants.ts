
export interface Track {
    slug: string;
    title: string;
    tags?: string[];
    description?: string;
    fg: string;
    bg: string;
}

export const tracks: Array<Track> = [
    {
        slug: 'strip-wub',
        title: "STRIP-WUB",
        tags: ['dubstep', 'house', 'trap', 'hiphop'],
        fg: 'white',
        bg: '#1C1C1C',
    },
    {
        slug: 'have-you-ever',
        title: "HAVE YOU EVER",
        tags: ['afro-beats', 'house', 'tropical'],
        fg: 'white',
        bg: '#D7158E',
    },
    {
        slug: 'disco-horse',
        title: 'DISCO HORSE @ Dark Horse Coffee',
        tags: ['disco', 'house'],
        fg: 'white',
        bg: '#0E375E'
    },
    {
        slug: 'haber-bosch',
        title: 'THE HABER BOSCH PROCESS',
        tags: ['house', 'rage'],
        fg: 'white',
        bg: "#0A0228"
    },
    {
        slug: 'nye-2024',
        title: 'NYE RAGER',
        tags: ['house', 'rage', 'dubstep'],
        fg: 'white',
        bg: '#29027D'
    }
]