import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { Panel, PanelHeader, PanelTitle } from "./panel";

const PROJECT_ITEMS = [
  {
    title: "DevOps Ghostwriter",
    src: "/images/projects/Devops-ghostwriter.png",
    link: "https://devops-ghostwriter.vercel.app/",
  },
  {
    title: "Sujata Threads",
    src: "/images/projects/Sujata-Threads.png",
    link: "https://sujata-threads.vercel.app/",
  },
  {
    title: "Nano Bonds",
    src: "/images/projects/NanoBonds.png",
    link: "https://nano-bonds.vercel.app/",
  },
  {
    title: "AlgoSlice",
    src: "/images/projects/AlgoSlice.png",
    link: "https://github.com/rohit-debnath24/AlgoSlice",
  },
  {
    title: "Web3 Deploy",
    src: "/images/projects/Algoflow.png",
    link: "https://www.web3deploy.me/",
  },
];

export function ProjectsGallery() {
  return (
    <Panel id="projects-gallery">
      <PanelHeader>
        <PanelTitle>Projects</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECT_ITEMS.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group/post flex flex-col gap-2 p-2",
                "max-sm:screen-line-before max-sm:screen-line-after",
                "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
              )}
            >
              <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
                <Image
                  src={project.src}
                  alt={project.title}
                  width={1200}
                  height={630}
                  quality={100}
                  unoptimized
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
              </div>

              <div className="flex flex-col gap-1 p-2">
                <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
                  {project.title}
                </h3>
                <dl>
                  <dt className="sr-only">Project Link</dt>
                  <dd className="truncate text-sm text-muted-foreground">
                    {new URL(project.link).hostname}
                  </dd>
                </dl>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Panel>
  );
}
