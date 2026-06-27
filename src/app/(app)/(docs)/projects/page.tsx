import type { Metadata } from "next";

import { ProjectsGallery } from "@/features/profile/components/projects-gallery";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my latest work and projects.",
};

export default function Page() {
  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Projects</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="relative">
        <ProjectsGallery />
      </div>

      <div className="h-4" />
    </>
  );
}
