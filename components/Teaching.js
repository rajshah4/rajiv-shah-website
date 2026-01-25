import React from "react";
import userData from "@constants/data";

export default function Teaching() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold py-20 text-center md:text-left">
          Teaching.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-16 pb-16 px-4">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold"
            style={{ lineHeight: "3rem" }}
          >
            I like to spend time educating people on AI and machine learning.
            Here is some of the recent work:
          </p>
          <div className="mt-10 space-y-10 text-lg md:text-xl">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Courses</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    className="underline"
                    href="https://maven.com/rajistics/ai-problem-framing"
                  >
                    AI Problem Framing for AI Practitioners
                  </a>{" "}
                  (2026)
                </li>
                <li>
                  <a
                    className="underline"
                    href="https://genai.works/executive-program"
                  >
                    AI Executive Program
                  </a>{" "}
                  (2025)
                </li>
                <li>Machine Learning using Transformers (2023)</li>
                <li>
                  <a className="underline" href="/problem-framing/case-studies">
                    Case Study Library (students)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Workshops</h2>
              <ul className="space-y-2">
                <li>Evaluation for Generative AI, MLOps Conference (2025)</li>
                <li>Evaluation for Generative AI, MLOps Conference (2023)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Guest Lectures</h2>
              <ul className="space-y-2">
                <li>
                  Spark of the AI Revolution: How Transfer Learning Unlocked
                  AI's Potential, University of Cincinnati (Sep 2024)
                </li>
                <li>Transfer Learning, University of Illinois (Sep 2024)</li>
                <li>
                  Introduction to Transformers, University of Illinois (Sept
                  2022)
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-base text-gray-600 dark:text-gray-300">
            Currently teaching{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.courseUrl}
            >
              {userData.about.courseTitle}
            </a>{" "}
            (first cohort starts {userData.about.courseDate}).
          </p>
        </div>
      </div>
    </section>
  );
}
