import React, { useMemo, useState } from "react";
import fs from "fs";
import path from "path";
import ContainerBlock from "../components/ContainerBlock";

function matchesQuery(caseStudy, query) {
  if (!query) return true;
  const fields = [
    caseStudy.title,
    caseStudy.category,
    caseStudy.initial_problem,
    caseStudy.why_it_fails,
    caseStudy.first_principle_insight,
    caseStudy.reframe,
    caseStudy.key_lesson,
    caseStudy.how_to_reframe,
    caseStudy.architectural_changes,
    caseStudy.companies_involved,
    caseStudy.tags,
  ];

  const haystack = fields
    .flatMap((field) => (Array.isArray(field) ? field : [field]))
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function formatList(value) {
  if (!value) return "";
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
}

export default function CaseStudies({ data }) {
  if (!data) return null;

  const { metadata, case_studies } = data;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const fromMetadata = Array.isArray(metadata?.categories)
      ? metadata.categories
      : [];
    if (fromMetadata.length) return ["All", ...fromMetadata];
    const unique = Array.from(
      new Set((case_studies || []).map((item) => item.category).filter(Boolean))
    ).sort();
    return ["All", ...unique];
  }, [metadata, case_studies]);

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return (case_studies || []).filter((item) => {
      if (category !== "All" && item.category !== category) return false;
      return matchesQuery(item, normalizedQuery);
    });
  }, [case_studies, category, normalizedQuery]);

  return (
    <ContainerBlock title="Case Studies - Rajiv Shah">
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className="text-5xl md:text-6xl font-bold py-20 text-center md:text-left">
            Case Studies
          </h1>
        </div>
        <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto pt-12 pb-16 px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-200">
                  First principles reframing cases for enrolled students.
                </p>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">
                  Updated {metadata?.last_updated || ""} · {filtered.length} of {case_studies?.length || 0} cases
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by title, company, insight..."
                  className="w-full md:w-80 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100"
                />
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full md:w-56 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {item.category} · {formatList(item.companies_involved)}
                      </p>
                    </div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {formatList(item.tags)}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 text-sm text-gray-700 dark:text-gray-200">
                    {item.initial_problem ? (
                      <div>
                        <span className="font-semibold">Initial problem:</span> {item.initial_problem}
                      </div>
                    ) : null}
                    {item.first_principle_insight ? (
                      <div>
                        <span className="font-semibold">First principle insight:</span> {item.first_principle_insight}
                      </div>
                    ) : null}
                    {item.reframe ? (
                      <div>
                        <span className="font-semibold">Reframe:</span> {item.reframe}
                      </div>
                    ) : null}
                    {item.key_lesson ? (
                      <div>
                        <span className="font-semibold">Key lesson:</span> {item.key_lesson}
                      </div>
                    ) : null}
                  </div>

                  <details className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    <summary className="cursor-pointer font-semibold text-gray-700 dark:text-gray-200">
                      More detail
                    </summary>
                    <div className="mt-3 grid gap-3">
                      {item.initial_assumptions ? (
                        <div>
                          <span className="font-semibold">Initial assumptions:</span> {item.initial_assumptions}
                        </div>
                      ) : null}
                      {item.why_it_fails ? (
                        <div>
                          <span className="font-semibold">Why it fails:</span> {item.why_it_fails}
                        </div>
                      ) : null}
                      {item.how_to_reframe ? (
                        <div>
                          <span className="font-semibold">How to reframe:</span> {item.how_to_reframe}
                        </div>
                      ) : null}
                      {item.architectural_changes ? (
                        <div>
                          <span className="font-semibold">Architectural changes:</span> {item.architectural_changes}
                        </div>
                      ) : null}
                      {item.sources ? (
                        <div>
                          <span className="font-semibold">Sources:</span> {formatList(item.sources)}
                        </div>
                      ) : null}
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}

export async function getServerSideProps({ req, res }) {
  const expectedUser = process.env.CASE_STUDIES_USER;
  const expectedPass = process.env.CASE_STUDIES_PASSWORD;

  if (!expectedUser || !expectedPass) {
    res.statusCode = 500;
    res.end("Case study access is not configured.");
    return { props: {} };
  }

  const authHeader = req.headers.authorization || "";
  const [scheme, encoded] = authHeader.split(" ");

  if (scheme !== "Basic" || !encoded) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Case Studies"');
    res.statusCode = 401;
    res.end("Authentication required.");
    return { props: {} };
  }

  const decoded = Buffer.from(encoded, "base64").toString("utf-8");
  const separatorIndex = decoded.indexOf(":");
  const user = separatorIndex >= 0 ? decoded.slice(0, separatorIndex) : decoded;
  const pass = separatorIndex >= 0 ? decoded.slice(separatorIndex + 1) : "";

  if (user !== expectedUser || pass !== expectedPass) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Case Studies"');
    res.statusCode = 401;
    res.end("Authentication required.");
    return { props: {} };
  }

  const filePath = path.join(
    process.cwd(),
    "data",
    "first_principles_case_studies_complete.json"
  );
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  return { props: { data } };
}
