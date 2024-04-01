import userData from "@constants/data";
import videodata from "@constants/videos";


import React from "react";

export default function Videos() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-25 text-center md:text-left">
          Videos 
          </h1>
      </div>
      {/* Side Bar */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
            Find current videos at TikTok, Instagram, or YouTube. <br></br> I have an <a href="https://docs.google.com/spreadsheets/d/11D0Wla7odvvOgcvoETvJ7pHwKObeXEU7nB8envGnvBI/edit?usp=sharing" className="underline-link text-blue-500">Google Sheet</a> that provides links and descriptions to many of my shorter videos.
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Video Links
            </h1>

            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.tiktok}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    TikTok
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.youtube}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    YouTube
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
        <div className="col-span-1 md:col-span-2">
        <b>Deep Dive Videos</b>
          {/* Video card */}
          {userData.video.map((video, idx) => (
            <>
              <VideoCard
                key={idx}
                title={video.title}
                date={video.date}
                source={video.source}
                link={video.link}
              />
            </> 
          ))}
          <br></br>
        <b>Short Form Videos</b>
          {/* Video card2 */}
          {videodata.videos.map((videos, idx) => (
            <>
              <SVideoCard
                key={idx}
                title={videos.Title}
                date={videos.create_date}
                TikTok_link={videos.TikTok_link}
                Instagram_link={videos.Instagram_link}
                YouTube_link={videos.YouTube_link}
                linkedin_link={videos.linkedin_link}
              />
            </> 
          ))}
      </div>
      </div>
      </div>
    </section>
  );
}

const VideoCard = ({title, date, source, link}) => {
  return (
    <div className="col-span-1 md:col-span-2">
       <p>
        {title},
         <a href={link} className="underline-link text-blue-300"> {source} </a> {" "}({date})
       </p>
    </div>
  );
};

const SVideoCard = ({ title, date, TikTok_link, Instagram_link, YouTube_link, linkedin_link }) => {
  return (
    <div className="col-span-1 md:col-span-2">
      <p>
        {title}, 
        {TikTok_link && <a href={TikTok_link} className="underline_link text-blue-300"> TikTok,</a>} 
        {Instagram_link && <a href={Instagram_link} className="underline_link text-blue-300"> Instagram,</a>} 
        {YouTube_link && <a href={YouTube_link} className="underline_link text-blue-300"> YouTube,</a>} 
        {linkedin_link && <a href={linkedin_link} className="underline_link text-blue-300"> LinkedIn,</a>}
        <>{' '}</>    {date}
      </p>
    </div>
  );
};
