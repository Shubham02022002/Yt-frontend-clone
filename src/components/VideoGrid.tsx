import React from "react";
import VideoCard, { CardData } from "./VideoCard";

let VIDEOS: Array<CardData> = [
  {
    title: "How to learn Coding",
    channelName: "ezeeDev",
    views: "100k",
    thumbnailUrl: "image.jpg",
    channelImgUrl: "image.jpg",
    postedOn: "20 days ago",
  },
  {
    title: "How to learn Coding",
    channelName: "ezeeDev",
    views: "100k",
    thumbnailUrl: "image.jpg",
    channelImgUrl: "image.jpg",
    postedOn: "20 days ago",
  },
  {
    title: "How to learn Coding",
    channelName: "ezeeDev",
    views: "100k",
    thumbnailUrl: "image.jpg",
    channelImgUrl: "image.jpg",
    postedOn: "20 days ago",
  },
  {
    title: "How to learn Coding",
    channelName: "ezeeDev",
    views: "100k",
    thumbnailUrl: "image.jpg",
    channelImgUrl: "image.jpg",
    postedOn: "20 days ago",
  },
  {
    title: "How to learn Coding",
    channelName: "ezeeDev",
    views: "100k",
    thumbnailUrl: "image.jpg",
    channelImgUrl: "image.jpg",
    postedOn: "20 days ago",
  },
  {
    title: "How to learn Coding",
    channelName: "ezeeDev",
    views: "100k",
    thumbnailUrl: "image.jpg",
    channelImgUrl: "image.jpg",
    postedOn: "20 days ago",
  },
  {
    title: "How to learn Coding",
    channelName: "ezeeDev",
    views: "100k",
    thumbnailUrl: "image.jpg",
    channelImgUrl: "image.jpg",
    postedOn: "20 days ago",
  },
  {
    title: "How to learn Coding",
    channelName: "ezeeDev",
    views: "100k",
    thumbnailUrl: "image.jpg",
    channelImgUrl: "image.jpg",
    postedOn: "20 days ago",
  },
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((card, index) => (
        <VideoCard
          key={index}
          title={card.title}
          channelName={card.channelName}
          views={card.views}
          postedOn={card.postedOn}
          thumbnailUrl={card.thumbnailUrl}
          channelImgUrl="./image.jpg"
        />
      ))}
    </div>
  );
};

export default VideoGrid;
