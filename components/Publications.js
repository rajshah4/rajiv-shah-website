import userData from "@constants/data";
import React from "react";

export default function Publications() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Publications
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
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
<h2>Surveillance - Empirical studies on surveillance cameras.</h2>
<p>Shah, R. C., & McQuade, Brendan (2016). Surveillance, Security, and Intelligence-Led Policing in Chicago.  In (Bennett, Larry; Garner, Roberta and Hague, Euan,eds), Neoliberal Chicago: University of Illinois Press.</p>
<p>Shah, R. C., & Braithwaite, J. (2012). Spread Too Thin: Analyzing the Effectiveness of the Chicago Camera Network on Crime. Police Practice and Research: An International Journal</p>
<p>Shah, R.C. (2010).  Effectiveness of Red Light Cameras in Chicago: An Exploratory Analysis</p>

<h2>Open Standards</h2>
<p>Open standards are publicly available specifications that offer a wealth of economic and technological benefits. Governments around the world are considering mandating open standards, especially in the area of document formats.</p>
<p>Shah, R.C., Kesan, J. P., & Kennis A. Lessons for Government Adoption of Open Standards: A Case Study of the Massachusetts Policy (2008). Journal of Information Technology & Politics 5(4), 387-398. A publicly available draft is at SSRN.</p>
<p>Shah, R. C., & Kesan, J. P. (2009). Running Code as Part of an Open Standards Policy.  First Monday 6(1).</p>
<p>Shah, R.C., & Kesan, J.P. (2012). Lost in Translation: Interoperability Issues for Open Standards.  I/S: A Journal of Law and Policy for the Information Society 8(1), 113-141.</p>
<p>Shah, R. C., & Kesan, J. P. (draft). An Empirical Study of Open Standards. (A revised version won Best Paper Award for E-Government Track at HICSS 41)</p>

<h2>Role of Defaults</h2>
<p>Defaults are pre-selected options chosen by the manufacturer or the software developer. Users tend to defer to these pre-selected options. Policymakers can take advantage of this deference in setting defaults.</p>
<p>Shah, R. C., & Kesan, J. P. (2008). Setting Online Policy With Software Defaults. Information, Communication, and Society 11(7), 989-1007.</p>
<p>Shah, R.C., & Sandvig, C. (2008). Defaults as De Facto Regulation: The Case of Wireless Access Points. Information, Communication and Society, 11(1), 25-46.</p>
<p>Kesan, J. P., & Shah, R.C. (2006). Setting Software Defaults: Perspectives from Law, Computer Science and Behavioral Economics. Notre Dame Law Review, 82(2), 583-634.</p>

<h2>How Software (and Architecture) Affects Users</h2>
<p>This work has largely focused on identifying features or characteristics of code that have significance in regulating behavior. These characteristics are manipulable and are considered governance characteristics, because of their ability to differentially influence behavior. This work has led us to focus on open standards and defaults.</p>
<p>Shah, R. C., & Kesan, J. P. (2007). How Architecture Regulates. Journal of Architectural and Planning Research, 24(4), 350-359.</p>
<p>Shah, R. C., & Kesan, J. P. (2003). Manipulating the Governance Characteristics of Code. Info, 5(4), 3-9.</p>

<h2>Development of Software</h2>
<p>This work focuses on the development of software with an emphasis on the role of several institutions including universities, firms, consortia, and the open source movement is examined. For each institution, the analysis examines their internal processes and norms that affect the development process. The analysis also examines how each institution emphasizes different social and technical attributes that are embedded in code.</p>
<p>Shah, R. C., & Kesan, J. P. (2009). Recipes for Cookies: How Institutions Shape Communication Technologies. New Media & Society, 11(3), 315-336.</p>
<p>Shah, R. C., & Kesan, J. P. (2005). Nurturing Software: How Societal Institutions Shape the Development of Software. Communications of the ACM, 40(9), 80-85.</p>
<p>Kesan, J. P., & Shah, R. C. (2004). Deconstructing Code. Yale Journal of Law & Technology, 6, 277-389.</p>
<p>Shah, R. C., & Kesan, J. P. (2003). Incorporating Societal Concerns into Communication Technologies. IEEE Technology and Society Magazine, 22(2), 28-33.</p>

<h2>How Government Can Shape Software</h2>
<p>Government can influence the development of code in many ways. This section focuses on the government’s regulatory power, fiscal power, and the ability to influence intellectual property rights.</p>
<p>Kesan, J. P., & Shah, R. C. (2005). Shaping Code. Harvard Journal of Law & Technology, 18(2), 319-399.</p>

<h2>History of the Internet</h2>
<p>The Internet's origins date back to the 1960s with government funded research into computer networks. This work traces the history and implications of shifting control over the Internet to the private sector, a process called privatization.</p>
<p>Shah, R. C., & Kesan, J. P. (2007). The Privatization of the Internet's Backbone Network. Journal of Broadcasting and Electronic Media, 51(1), 93-109.</p>
<p>Kesan, J. P., & Shah, R. C. (2001). Fool Us Once Shame on You - Fool Us Twice Shame on Us: What We Can Learn from the Privatizations of the Internet Backbone Network and the Domain Name System. Washington University Law Quarterly, 79(1), 89-220.</p>
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
