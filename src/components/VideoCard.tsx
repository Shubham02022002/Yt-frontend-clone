import React from "react";

export interface CardData {
  title: string;
  channelName: string;
  views: string;
  thumbnailUrl: string;
  channelImgUrl: string;
  postedOn: string;
}
type TimeUnit = "year" | "month" | "day" | "hour" | "minute";

export function timeAgo(isoDate: string): string {
  const now: Date = new Date();
  const past: Date = new Date(isoDate);
  const seconds: number = Math.floor((now.getTime() - past.getTime()) / 1000);
  if (isNaN(seconds)) return "invalid date";
  const intervals: Record<TimeUnit, number> = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
  };
  for (const unit in intervals) {
    const value = Math.floor(seconds / intervals[unit as TimeUnit]);
    if (value >= 1) {
      return `${value} ${unit}${value > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}

const VideoCard = ({
  title,
  channelName,
  views,
  postedOn,
  thumbnailUrl,
  channelImgUrl,
}: CardData) => {
  return (
    <div className="p-3 m-1 cursor-pointer">
      <img src={thumbnailUrl} className="rounded-xl h-70 w-100 ml-2" alt="" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-2 pl-2">
          <img
            className="rounded-full h-12 w-12  bg-red-600 ml-2"
            src={channelImgUrl}
            alt=""
          />
        </div>
        <div className="col-span-10 ml-7">
          <div>{title}</div>
          <div className="col-span-11  text-gray-400 text-base">
            {channelName}
          </div>
          <div className="col-span-11  text-gray-400 text-base">
            {views} views . {postedOn}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
