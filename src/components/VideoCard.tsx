import React from "react";

interface CardData {
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
    <div>
      <img src={thumbnailUrl} className="rounded-xl h-70 w-100 ml-5" alt="" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 pl-2">
          <img
            className="rounded-full h-12 w-12 pl-2"
            src={channelImgUrl}
            alt=""
          />
        </div>
        <div className="col-span-11">
          <div>{title}</div>
          <div className="col-span-11  text-gray-400 text-base">
            {channelName}
          </div>
          <div className="col-span-11  text-gray-400 text-base">
            {views} views . {timeAgo(postedOn)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
