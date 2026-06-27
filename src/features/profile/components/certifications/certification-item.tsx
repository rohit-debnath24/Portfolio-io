import dayjs from "dayjs";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { getIcon, Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import type { Certification } from "../../types/certifications";

export function CertificationItem({
  className,
  certification,
}: {
  className?: string;
  certification: Certification;
  theme?: boolean;
}) {
  return (
    <a
      className={cn(
        "group/cert flex items-center gap-4 rounded-lg border-b border-edge py-4 pr-2 transition-colors last:border-0 hover:bg-muted/30",
        className
      )}
      href={certification.credentialURL}
      target="_blank"
      rel="noopener"
    >
      {certification.issuerLogoURL ? (
        <div className="relative ml-2 h-20 w-28 shrink-0 overflow-hidden rounded-md border border-edge bg-muted/20">
          <Image
            src={certification.issuerLogoURL}
            alt={certification.title}
            width={112}
            height={80}
            quality={100}
            className={`h-full w-full object-cover select-none ${certification.theme && "not-dark:invert"}`}
            unoptimized
            aria-hidden
          />
        </div>
      ) : (
        <div
          className={cn(
            "ml-2 flex size-12 shrink-0 items-center justify-center rounded-md select-none",
            "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
            "bg-muted text-muted-foreground [&_svg]:size-6"
          )}
          aria-hidden
        >
          {getIcon(certification.issuerIconName) ?? <Icons.certificate />}
        </div>
      )}

      <div className="flex flex-1 items-center justify-between pr-2">
        <div className="flex-1 space-y-1">
          <h3 className="leading-snug font-medium text-balance underline-offset-4 group-hover/cert:underline">
            {certification.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <dl>
              <dt className="sr-only">Issued by</dt>
              <dd>
                <span aria-hidden>@</span>
                <span className="ml-0.5">{certification.issuer}</span>
              </dd>
            </dl>

            <Separator
              className="data-[orientation=vertical]:h-4"
              orientation="vertical"
            />

            <dl>
              <dt className="sr-only">Issued on</dt>
              <dd>
                <time dateTime={dayjs(certification.issueDate).toISOString()}>
                  {dayjs(certification.issueDate).format("DD.MM.YYYY")}
                </time>
              </dd>
            </dl>
          </div>
        </div>

        {certification.credentialURL && (
          <ArrowUpRightIcon
            className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5"
            aria-hidden
          />
        )}
      </div>
    </a>
  );
}
