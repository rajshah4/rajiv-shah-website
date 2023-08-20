import userData from "@constants/data";
import React from "react";

export default function Talks() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          ML/AI Talks
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-1600">
        <b>Older Talks</b>
          <p></p>
          <p>
          May 22, 2018, Presentation, Connected Claims - <a href='http://events.insurancenexus.com/connectedclaimsusa/conference-agenda.php'>http://events.insurancenexus.com/connectedclaimsusa/conference-agenda.php</a> 
          </p><p>
          May 16, 2018, "Sharpen Cyber Defenses with AI and Machine Learning", SIGNAL Innovation Showcase, AFCEA, 
          <a href='http://events.afcea.org/AFCEACyberOps18/public/enter.aspx'>http://events.afcea.org/AFCEACyberOps18/public/enter.aspx</a>
          </p><p>
          May 8, 2018, Automated AI, St. Louis, Prepare.ai - <a href='http://www.prepare.ai/conference/'>http://www.prepare.ai/conference/</a> 
          </p><p>
          April 18, 2018, Automated AI: The Next Frontier in Analytics, Twin Cities Spark and Hadoop User Group - <a href='https://www.meetup.com/Twin-Cities-Hadoop-User-Group/events/249498506/'>https://www.meetup.com/Twin-Cities-Hadoop-User-Group/events/249498506/</a>
          </p><p>
          Feb. 15, 2018, Deep Learning (with Keras), Chicago R User Group, <a href='https://www.meetup.com/ChicagoRUG/events/247282214/'>https://www.meetup.com/ChicagoRUG/events/247282214/</a>
          </p><p>
          Jan. 9, 2018, Automated AI: The Next Frontier in Analytics, San Antonio Data Science Meetup - <a href='https://www.meetup.com/San-Antonio-Data-Science-Meetup/events/245251461/'>https://www.meetup.com/San-Antonio-Data-Science-Meetup/events/245251461/</a>
          </p><p>
          Dec. 7, 2017, Automated AI: The Next Frontier in Analytics, Houston Data Science - <a href='https://www.meetup.com/Houston-Data-Science/events/245143044/'>https://www.meetup.com/Houston-Data-Science/events/245143044/</a>
          </p> <p>
          Nov. 29, 2017, Automated AI: The Next Frontier in Analytics, San Antonio Data Science Meetup - <a href='https://www.meetup.com/DFW-Data-Science/events/245004965/'>https://www.meetup.com/DFW-Data-Science/events/245004965/</a>
          </p><p>
          Nov. 10, 2017, Automated AI: The Next Frontier in Analytics, Stampede, St. Louis - <a href='https://stampedecon.com/blog/2017/11/10/automated-ai-the-next-frontier-in-analytics-slides-from-the-stampedecon-ai-summit-2017/'>https://stampedecon.com/blog/2017/11/10/automated-ai-the-next-frontier-in-analytics-slides-from-the-stampedecon-ai-summit-2017/</a>
          </p><p>
          Nov. 6, 2017, Deep Learning use Keras, Open Data Science Conference - <a href='https://odsc.com/training/portfolio/deep-learning-r-using-keras'>https://odsc.com/training/portfolio/deep-learning-r-using-keras</a>
          </p><p>
          July 6, 2017, Keras interface for R, Toronto Deep Learning Meetup -  <a href='https://www.meetup.com/Deep-Learning-Toronto-Meetup/events/241299319/'>https://www.meetup.com/Deep-Learning-Toronto-Meetup/events/241299319/</a>
          </p><p>
          June 22, 2017, Keras & R, Chicago Tensorflow Meetup, <a href='https://www.meetup.com/TensorFlow-Chicago/events/240267321/'>https://www.meetup.com/TensorFlow-Chicago/events/240267321/</a>
          </p><p>
          Feb 3, 2017, Image Classification using Keras and Tensorflow, Champaign Data Science Group,  <a href='https://www.meetup.com/CU-DSUG/events/236236341/'>https://www.meetup.com/CU-DSUG/events/236236341/</a>
          </p> 
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};
