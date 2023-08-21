import React from "react";
import userData from "@constants/data";

export default function Publications() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Publications
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Recent Writing
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                My latest writing on AI/ML is at my {" "}
                <a
                  href={userData.BlogUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                personal blog
                </a> and {" "}
                <a
                  href={userData.MediumUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                Medium
                </a>
                .
              </p>
            </div>
            <br></br>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Academia
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I spent many years in Academia, here is my {" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                CV
                </a>{" "}
                Also find my publications on {" "}
                <a
                  href={userData.SSRNUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                SSRN
                </a> and {" "}
                <a
                  href={userData.GoogleSUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                Google Scholar
                </a>
                .
              </p>
            </div>
            <br></br>
            <br></br>
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Coding Projects
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                My older coding projects are found on my {" "}
                <a
                  href="http://projects.rajivshah.com"
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                personal project server
                </a> and {" "}
                <a
                  href={userData.socialLinks.github}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                Github
                </a>
                .
              </p>
            </div>


            </div>
          {/* AI Text area */}
          <div className="col-span-1 md:col-span-2">
          <b>AI/ML Publications</b>
          <p>Y Zhao, R Yang, G Chevalier, RC Shah, R Romijnders, Applying deep bidirectional LSTM and mixture density network for basketball trajectory prediction. Optik 158, 266-272 </p>
          <p>R Shah, R Romijnders, Applying deep learning to basketball trajectories, <a href="https://arxiv.org/abs/1608.03793" className="underline-link text-blue-500">arXiv preprint arXiv:1608.03793</a> </p>
          <p>A Chou, A Torres-Espin, N Kyritsis, JR Huie, S Khatry, R Shah, et al. Expert-augmented automated machine learning optimizes hemodynamic predictors of spinal cord injury outcome. <a href="https://pubmed.ncbi.nlm.nih.gov/35390006/" className="underline-link text-blue-500">Plos one 17 (4), e0265254 </a></p>
          <p>B Hodel [R Shah recognized as contributing], Learning to Operate an Excavator via Policy Optimization. <a href="https://www.sciencedirect.com/science/article/pii/S1877050918319744" className="underline-link text-blue-500"> Procedia Computer Science Volume </a>140, 2018, Pages 376-382 </p>
          <br></br>
          <b>AI/ML Blog Posts</b>
                  {userData.blogpost.map((proj, idx) => (
                    <PaperCard
                      title={proj.title}
                      date={proj.date}
                      link={proj.link}
                      number={`${idx + 1}`}
                    />
                  ))}
              <br></br>
              <br></br>
              <b>Older Academic Publications</b>
              <br></br>
              <br></br>
              <b>Surveillance - Empirical studies on surveillance cameras.</b>
              <p>Shah, R. C., & McQuade, Brendan (2016). Surveillance, Security, and Intelligence-Led Policing in Chicago.  In (Bennett, Larry; Garner, Roberta and Hague, Euan,eds), Neoliberal Chicago: University of Illinois Press.</p>
              <p>Shah, R. C., & Braithwaite, J. (2012). Spread Too Thin: Analyzing the Effectiveness of the Chicago Camera Network on Crime. Police Practice and Research: An International Journal</p>
              <p>Shah, R.C. (2010).  Effectiveness of Red Light Cameras in Chicago: An Exploratory Analysis</p>
              <br></br>
              <b>Open Standards</b>
              <p>Open standards are publicly available specifications that offer a wealth of economic and technological benefits. Governments around the world are considering mandating open standards, especially in the area of document formats.</p>
              <p>Shah, R.C., Kesan, J. P., & Kennis A. Lessons for Government Adoption of Open Standards: A Case Study of the Massachusetts Policy (2008). Journal of Information Technology & Politics 5(4), 387-398. A publicly available draft is at SSRN.</p>
              <p>Shah, R. C., & Kesan, J. P. (2009). Running Code as Part of an Open Standards Policy.  First Monday 6(1).</p>
              <p>Shah, R.C., & Kesan, J.P. (2012). Lost in Translation: Interoperability Issues for Open Standards.  I/S: A Journal of Law and Policy for the Information Society 8(1), 113-141.</p>
              <p>Shah, R. C., & Kesan, J. P. (draft). An Empirical Study of Open Standards. (A revised version won Best Paper Award for E-Government Track at HICSS 41)</p>
              <br></br>
              <b>Role of Defaults</b>
              <p>Defaults are pre-selected options chosen by the manufacturer or the software developer. Users tend to defer to these pre-selected options. Policymakers can take advantage of this deference in setting defaults.</p>
              <p>Shah, R. C., & Kesan, J. P. (2008). Setting Online Policy With Software Defaults. Information, Communication, and Society 11(7), 989-1007.</p>
              <p>Shah, R.C., & Sandvig, C. (2008). Defaults as De Facto Regulation: The Case of Wireless Access Points. Information, Communication and Society, 11(1), 25-46.</p>
              <p>Kesan, J. P., & Shah, R.C. (2006). Setting Software Defaults: Perspectives from Law, Computer Science and Behavioral Economics. Notre Dame Law Review, 82(2), 583-634.</p>
              <br></br>
              <b>How Software (and Architecture) Affects Users</b>
              <p>This work has largely focused on identifying features or characteristics of code that have significance in regulating behavior. These characteristics are manipulable and are considered governance characteristics, because of their ability to differentially influence behavior. This work has led us to focus on open standards and defaults.</p>
              <p>Shah, R. C., & Kesan, J. P. (2007). How Architecture Regulates. Journal of Architectural and Planning Research, 24(4), 350-359.</p>
              <p>Shah, R. C., & Kesan, J. P. (2003). Manipulating the Governance Characteristics of Code. Info, 5(4), 3-9.</p>
              <br></br>
              <b>Development of Software</b>
              <p>This work focuses on the development of software with an emphasis on the role of several institutions including universities, firms, consortia, and the open source movement is examined. For each institution, the analysis examines their internal processes and norms that affect the development process. The analysis also examines how each institution emphasizes different social and technical attributes that are embedded in code.</p>
              <p>Shah, R. C., & Kesan, J. P. (2009). Recipes for Cookies: How Institutions Shape Communication Technologies. New Media & Society, 11(3), 315-336.</p>
              <p>Shah, R. C., & Kesan, J. P. (2005). Nurturing Software: How Societal Institutions Shape the Development of Software. Communications of the ACM, 40(9), 80-85.</p>
              <p>Kesan, J. P., & Shah, R. C. (2004). Deconstructing Code. Yale Journal of Law & Technology, 6, 277-389.</p>
              <p>Shah, R. C., & Kesan, J. P. (2003). Incorporating Societal Concerns into Communication Technologies. IEEE Technology and Society Magazine, 22(2), 28-33.</p>
              <br></br>
              <b>How Government Can Shape Software</b>
              <p>Government can influence the development of code in many ways. This section focuses on the government’s regulatory power, fiscal power, and the ability to influence intellectual property rights.</p>
              <p>Kesan, J. P., & Shah, R. C. (2005). Shaping Code. Harvard Journal of Law & Technology, 18(2), 319-399.</p>
              <br></br>
              <b>History of the Internet</b>
              <p>The Internet's origins date back to the 1960s with government funded research into computer networks. This work traces the history and implications of shifting control over the Internet to the private sector, a process called privatization.</p>
              <p>Shah, R. C., & Kesan, J. P. (2007). The Privatization of the Internet's Backbone Network. Journal of Broadcasting and Electronic Media, 51(1), 93-109.</p>
              <p>Kesan, J. P., & Shah, R. C. (2001). Fool Us Once Shame on You - Fool Us Twice Shame on Us: What We Can Learn from the Privatizations of the Internet Backbone Network and the Domain Name System. Washington University Law Quarterly, 79(1), 89-220.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const PaperCard = ({ title, date, link, number }) => {
  return (
    <div className="">
    <p>
        {title},
        <a href={link} className="underline-link text-blue-500"> Link </a> {" "}({date})
    </p>
    </div>
  );
};