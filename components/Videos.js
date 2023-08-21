import userData from "@constants/data";
import React from "react";

export default function Videos() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Videos
        </h1>
        Find current videos at TikTok, Instagram, or YouTube
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Video card */}
          {userData.video.map((video, idx) => (
            <>
              <VideoCard
                key={idx}
                title={video.title}
                date={video.date}
                url={video.url}
              />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const VideoCard = ({title, date, url}) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
    </div>
  );
};
