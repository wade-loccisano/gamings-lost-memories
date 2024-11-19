import RSSFeed from "@/public/rss.json";

interface EPISODE {
    id: string
    title: string,
    date: string,
    description: string,
}

export default function getEpisodeData(): EPISODE[] {
    const episodes = RSSFeed.rss.channel.item;
    const result: EPISODE[] = [];
    episodes.forEach((episode) => {
        const newItem: EPISODE = {
            id: episode?.episode[0].__text,
            title: episode.title[0].toString(),
            date: episode.pubDate,
            description: episode.description.replace(/<\/?p>/g, ""),
        }
        result.push(newItem);
    })
    return result;
}