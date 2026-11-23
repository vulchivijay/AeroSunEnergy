"use client";

import { useState } from "react";
import type { Translations } from "@/lib/LocaleContext";

type ProjectsPageContent = Translations["projectsPage"];
type ProjectStatus = keyof ProjectsPageContent["statusMeta"];
type ProjectCard = {
  status: ProjectStatus;
  title: string;
  location: string;
  type: string;
  summary: string;
};

export default function ProjectStatusFilter({
  content,
}: {
  content: ProjectsPageContent;
}) {
  const [activeTab, setActiveTab] = useState<ProjectStatus>("In Queue");
  const statusMeta = content.statusMeta;
  const projectCards: ProjectCard[] = content.projectCards;
  const statusTabs = content.statusTabs.filter(
    (tab): tab is ProjectStatus => tab in statusMeta,
  );
  const filteredProjects = projectCards.filter(
    (project) => project.status === activeTab,
  );

  return (
    <section
      id="project-pipeline"
      className="scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] shadow-sm"
    >
      <div className="flex items-start gap-4 p-5 sm:p-6">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-base font-bold text-emerald-800 tracking-normal tabular-nums">
          02
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
            {content.labels.statusOverview}
          </h2>
          <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {content.labels.statusDescription}
          </p>
          <div className="mt-5 rounded-xl border border-slate-200 bg-white p-3">
            <div
              role="group"
              aria-label={content.labels.statusFilterLabel}
              className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
            >
              {statusTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    aria-pressed={isActive}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-base font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${isActive ? "bg-slate-900 text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200"} tracking-normal`}
                  >
                    <span
                      className={`inline-flex h-2.5 w-2.5 rounded-full ${isActive ? "bg-emerald-400" : "bg-slate-400"}`}
                      aria-hidden="true"
                    />
                    {statusMeta[tab].label}
                  </button>
                );
              })}
            </div>
            <div className="pt-5">
              {filteredProjects.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center">
                  <h3 className=" text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
                    {content.labels.emptyProjectsTitle.replace(
                      "{status}",
                      statusMeta[activeTab].label,
                    )}
                  </h3>
                  <p className="mx-auto mt-2 max-w-lg text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {content.labels.emptyProjectsDescription}
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {filteredProjects.map((project) => (
                    <article
                      key={`${project.title}-${project.location}`}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 uppercase ${statusMeta[project.status].tone} text-xs font-semibold tracking-wide leading-5`}
                      >
                        {statusMeta[project.status].label}
                      </span>
                      <div
                        className={`mt-4 h-1.5 rounded-full bg-linear-to-r ${statusMeta[project.status].accent}`}
                        aria-hidden="true"
                      />
                      <h3 className="mt-4 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-slate-500      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                        {project.location}
                      </p>
                      <p className="mt-3 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                        {project.type}
                      </p>
                      <p className="mt-3 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                        {project.summary}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
    </section>
  );
}
