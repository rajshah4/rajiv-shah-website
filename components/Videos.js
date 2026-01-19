import userData from "@constants/data";
import generatedVideos from "@constants/videos_generated.json";
import { useMemo, useState } from "react";
import React from "react";

export default function Videos() {
  const spotlight = generatedVideos.spotlight || [];
  const groups = generatedVideos.groups || [];
  const [query, setQuery] = useState("");
  const [topicFilter, setTopicFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [sortMode, setSortMode] = useState("views");
  const topics = useMemo(() => {
    const set = new Set();
    groups.forEach((group) => {
      (group.topics || []).forEach((topic) => set.add(topic));
    });
    return Array.from(set).sort();
  }, [groups]);
  const normalizedQuery = query.trim().toLowerCase();
  const filteredGroups = useMemo(() => {
    const filtered = groups.filter((group) => {
      if (topicFilter !== "all" && !(group.topics || []).includes(topicFilter)) {
        return false;
      }
      if (platformFilter !== "all" && !group.platforms?.[platformFilter]) {
        return false;
      }
      if (!normalizedQuery) {
        return true;
      }
      const haystack = (group.search_text || group.description || "").toLowerCase();
      return haystack.includes(normalizedQuery);
    });
    return filtered.sort((a, b) => {
      if (sortMode === "newest") {
        return parseDate(b.upload_date) - parseDate(a.upload_date);
      }
      return (b.total_views || 0) - (a.total_views || 0);
    });
  }, [groups, normalizedQuery, platformFilter, sortMode, topicFilter]);

  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/10"></div>
        <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-500/10"></div>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Video Library
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mt-3">
            Videos
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Highlights, deep dives, and short-form explainers across AI, data science, and policy.
          </p>
        </div>
      </div>
      <div className="px-6 pb-16">
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-16 gap-x-12">
          <div className="inline-flex flex-col gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              Find current videos at TikTok, Instagram, or YouTube. I also keep a{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/11D0Wla7odvvOgcvoETvJ7pHwKObeXEU7nB8envGnvBI/edit?usp=sharing"
                className="underline-link text-blue-600"
              >
                public Google Sheet
              </a>{" "}
              with links and descriptions.
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Video Links
              </h2>
              <div className="mt-4 space-y-3">
                <SocialLink href={userData.socialLinks.tiktok} label="TikTok" />
                <SocialLink href={userData.socialLinks.instagram} label="Instagram" />
                <SocialLink href={userData.socialLinks.youtube} label="YouTube" />
                <SocialLink href={userData.socialLinks.linkedin} label="LinkedIn" />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Deep Dive Videos
              </h2>
              <div className="mt-4 space-y-2">
                {userData.video.map((video, idx) => (
                  <VideoCard
                    key={idx}
                    title={video.title}
                    date={video.date}
                    source={video.source}
                    link={video.link}
                    blogLink={video.blogLink}
                  />
                ))}
              </div>
            </section>

            <section>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Short Form Videos
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Search by topic, keyword, or platform.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  <select
                    value={platformFilter}
                    onChange={(event) => setPlatformFilter(event.target.value)}
                    className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white dark:bg-slate-900 dark:border-slate-700"
                  >
                    <option value="all">All platforms</option>
                    <option value="tiktok">TikTok</option>
                    <option value="instagram">Instagram</option>
                    <option value="youtube">YouTube</option>
                  </select>
                  <select
                    value={sortMode}
                    onChange={(event) => setSortMode(event.target.value)}
                    className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white dark:bg-slate-900 dark:border-slate-700"
                  >
                    <option value="views">Sort: Views</option>
                    <option value="newest">Sort: Newest</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Search topics or keywords"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="md:col-span-2 border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white dark:bg-slate-900 dark:border-slate-700"
                />
                <select
                  value={topicFilter}
                  onChange={(event) => setTopicFilter(event.target.value)}
                  className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white dark:bg-slate-900 dark:border-slate-700"
                >
                  <option value="all">All topics</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-6 space-y-5">
                {filteredGroups.map((group, idx) => (
                  <GroupVideoCard key={`${group.group_id || "solo"}-${idx}`} group={group} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

const VideoCard = ({ title, date, source, link, blogLink }) => {
  return (
    <p className="text-slate-700 dark:text-slate-300">
      {title},{" "}
      <a href={link} className="underline-link text-blue-500">
        {source}
      </a>{" "}
      ({date})
      {blogLink && (
        <>
          {" "}
          ·{" "}
          <a href={blogLink} className="underline-link text-blue-500">
            Blog post
          </a>
        </>
      )}
    </p>
  );
};

const GroupVideoCard = ({ group, variant = "default" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const description = group.description || "";
  const truncatedDescription =
    description.length > 140 ? description.substring(0, 140) + "..." : description;
  const platforms = group.platforms || {};
  const tiktok = platforms.tiktok;
  const instagram = platforms.instagram;
  const youtube = platforms.youtube;
  const topics = group.topics || [];
  const thumbnail = pickThumbnail(platforms);
  const showThumbnail = thumbnail && !imageFailed;
  const isHighlight = variant === "highlight";
  const titleLimit = isHighlight ? 72 : 56;
  const titleText = truncateText(group.title || "", titleLimit);
  const thumbWidthClass = isHighlight ? "w-36 md:w-52" : "w-full md:w-44";
  const thumbHeightClass = isHighlight ? "h-24 md:h-32" : "h-28 md:h-32";

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 ${
        isHighlight ? "md:p-6" : ""
      }`}
    >
      <div className={`flex ${isHighlight ? "flex-row" : `flex-col ${thumbnail ? "md:flex-row" : ""}`} gap-5`}>
        {showThumbnail && (
          <div className={`${thumbWidthClass} shrink-0`}>
            <img
              src={thumbnail}
              alt=""
              referrerPolicy="no-referrer"
              onError={() => setImageFailed(true)}
              className={`${thumbHeightClass} w-full object-cover rounded-xl border border-slate-100 dark:border-slate-800`}
            />
          </div>
        )}
        {!showThumbnail && (
          <div className={`${thumbWidthClass} shrink-0`}>
            <div
              className={`${thumbHeightClass} w-full rounded-xl border border-slate-100 dark:border-slate-800 bg-gradient-to-br from-slate-200 via-slate-100 to-amber-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center text-xs uppercase tracking-[0.3em] text-slate-500`}
            >
              Video
            </div>
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3
              className="text-lg font-semibold text-slate-900 dark:text-slate-100"
              title={group.title || ""}
            >
              {titleText}
            </h3>
            {group.total_views ? (
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {formatViews(group.total_views)} views
              </span>
            ) : null}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {group.upload_date || "Date unknown"}
          </p>
          <p className="text-slate-700 dark:text-slate-300 mt-3">
            {isExpanded ? description : truncatedDescription}
            {description.length > 140 && (
              <button
                className="ml-2 text-blue-600 underline"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tiktok?.url && (
              <a href={tiktok.url} className="text-xs text-blue-600 underline" target="_blank" rel="noreferrer">
                TikTok
              </a>
            )}
            {instagram?.url && (
              <a
                href={instagram.url}
                className="text-xs text-blue-600 underline"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            )}
            {youtube?.url && (
              <a
                href={youtube.url}
                className="text-xs text-blue-600 underline"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            )}
          </div>
          {topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  #{topic}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, label }) => {
  return (
    <a href={href} className="flex items-center justify-between text-slate-600 dark:text-slate-300">
      <span className="text-sm uppercase tracking-widest">{label}</span>
      <span className="text-lg">&rarr;</span>
    </a>
  );
};

const formatViews = (value) => {
  if (!value) {
    return "0";
  }
  return value.toLocaleString();
};

const parseDate = (value) => {
  if (!value) {
    return 0;
  }
  const parsed = Date.parse(value);
  if (!Number.isNaN(parsed)) {
    return parsed;
  }
  return 0;
};

const pickThumbnail = (platforms) => {
  const candidates = [
    platforms.youtube?.thumbnail_url,
    platforms.instagram?.thumbnail_url,
    platforms.tiktok?.thumbnail_url,
  ];
  return (
    candidates.find((url) => typeof url === "string" && (url.startsWith("http") || url.startsWith("/"))) ||
    ""
  );
};

const truncateText = (value, limit) => {
  if (!value) {
    return "";
  }
  if (value.length <= limit) {
    return value;
  }
  return `${value.slice(0, limit - 3)}...`;
};
