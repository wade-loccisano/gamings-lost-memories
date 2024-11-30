import RSSFeed from "@/public/rss.json";

function formatTitle(input: string): string {
    // Remove "Episode X: " using regex
    const withoutEpisode = input.replace(/^Episode \d+:\s*/, '');
    // Remove all commas
    const withoutCommas = withoutEpisode.replace(/,/g, '');
    // Remove all apostrophes
    const withoutApostrophes = withoutCommas.replace(/'/g, '');
    // Remove all apostrophes
    const withoutPipes = withoutApostrophes.replace(/[|]/g, '');
    // Remove all question marks
    const withoutQuestionMarks = withoutPipes.replace(/[?]/g, '');
    // Replace spaces with dashes
    const formattedTitle = withoutQuestionMarks.replace(/\s+/g, '-');
    return formattedTitle;
}

export function formatSeconds(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        remainingSeconds.toString().padStart(2, '0')
    ].join(':');
}

export interface EPISODE {
    id: string
    title: string,
    slug: string,
    date: string,
    description: string,
    src: string,
    length: number,
}

export default function getEpisodeData(slug = ""): EPISODE[] {
    const episodes = RSSFeed.rss.channel.item;
    const episodeMap = new Map<string, EPISODE>();
    episodes.forEach((episode) => {
        const newEpisode: EPISODE = {
            id: episode?.episode[0].__text,
            title: episode.title[0].toString(),
            slug: formatTitle(episode.title[0].toString()),
            date: episode.pubDate,
            description: episode.description.replace(/<\/?p>/g, ""),
            src: episode.enclosure._url,
            length: parseInt(episode.duration.__text),
        }
        
        episodeMap.set(newEpisode.slug, newEpisode);
    })
    if (slug.trim()) {
        return [episodeMap.get(slug.trim())!];
    }

    const result: EPISODE[] = [...episodeMap.values()];
    return result;
}
