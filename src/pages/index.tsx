import AppBar from "@/components/AppBar";
import VideoCard from "@/components/VideoCard";
import VideoGrid from "@/components/VideoGrid";
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

  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${clientKey}&part=snippet,statistics&fields=items(id,snippet,statistics)`
  //   )
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setApiData(data.items[0]);
  //     })
  //     .catch(console.error);
  // }, []);

  // if (!apiData) return null;

  return (
    <>
      <AppBar />
      <VideoGrid />
    </>
  );
}
