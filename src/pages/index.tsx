import VideoCard from "@/components/VideoCard";
import { useEffect, useState } from "react";

interface VideoData {
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
  };
}

export default function Home() {
  const [apiData, setApiData] = useState<VideoData | null>(null);
    
    const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY;

    useEffect(() => {
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${clientKey}&part=snippet,statistics&fields=items(id,snippet,statistics)`
      )
      .then((resp) => resp.json())
      .then((data) => {
        setApiData(data.items[0]);
      })
      .catch(console.error);
  }, []);

  if (!apiData) return null;

  return (
    <VideoCard
      title={apiData.snippet.title}
      channelName={apiData.snippet.channelTitle}
      views={apiData.statistics.viewCount}
      postedOn={apiData.snippet.publishedAt}
      thumbnailUrl={apiData.snippet.thumbnails.high.url}
      channelImgUrl="./image.jpg"
    />
  );
}
