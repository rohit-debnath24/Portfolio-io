import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { InfiniteRibbon } from "./InfiniteRibbon";
import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex flex-col border-x border-edge">
      <div className="flex">
        <div className="shrink-0 border-r border-edge">
          <div className="mx-[0.5px] my-[3px]">
            <img
              className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
              alt={`${USER.displayName}'s avatar`}
              src={USER.avatar}
              fetchPriority="high"
            />
          </div>

          <SimpleTooltip content="I'm from India">
            {/* Flag of India */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 -left-px h-8 sm:h-9"
              viewBox="0 0 900 600"
            >
              <rect width="900" height="200" fill="#f93" />
              <rect y="200" width="900" height="200" fill="#fff" />
              <rect y="400" width="900" height="200" fill="#128807" />
              <g transform="translate(450,300)">
                <circle r="80" fill="none" stroke="#000088" strokeWidth="10" />
                <circle r="15" fill="#000088" />
                <g stroke="#000088" strokeWidth="4">
                  <line y1="-80" y2="80" />
                  <line x1="-80" x2="80" />
                  <line x1="-56.57" y1="-56.57" x2="56.57" y2="56.57" />
                  <line x1="-56.57" y1="56.57" x2="56.57" y2="-56.57" />
                  <line x1="-30.6" y1="-73.9" x2="30.6" y2="73.9" />
                  <line x1="-73.9" y1="-30.6" x2="73.9" y2="30.6" />
                  <line x1="-73.9" y1="30.6" x2="73.9" y2="-30.6" />
                  <line x1="-30.6" y1="73.9" x2="30.6" y2="-73.9" />
                  <line x1="-20.7" y1="-77.2" x2="20.7" y2="77.2" />
                  <line x1="-77.2" y1="-20.7" x2="77.2" y2="20.7" />
                  <line x1="-77.2" y1="20.7" x2="77.2" y2="-20.7" />
                  <line x1="-20.7" y1="77.2" x2="20.7" y2="-77.2" />
                </g>
              </g>
              <rect
                fill="none"
                stroke="#CCC"
                strokeWidth="1"
                x="0"
                y="0"
                width="900"
                height="600"
              />
            </svg>
          </SimpleTooltip>
        </div>

        <div className="flex flex-1 flex-col">
          <div
            className={cn(
              "relative flex grow items-center justify-center overflow-hidden",
              "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
            )}
          >
            <InfiniteRibbon
              rotation={-4}
              duration={40}
              className="absolute w-[120%] py-1.5 font-mono text-sm font-semibold tracking-wide shadow-md max-sm:hidden"
            >
              CAUTION: CODE IN PRODUCTION // EXPECT HIGH EFFICIENCY
            </InfiniteRibbon>
            <InfiniteRibbon
              rotation={4}
              reverse={true}
              duration={40}
              className="absolute w-[120%] py-1.5 font-mono text-sm font-semibold tracking-wide shadow-md max-sm:hidden"
            >
              BUILDING IN THE SHADOWS // DEPLOYING TO THE LIGHT
            </InfiniteRibbon>
          </div>

          <div className="flex flex-col border-t border-edge">
            <h1 className="flex items-center py-2 pl-4 text-3xl font-semibold">
              {USER.displayName}
              &nbsp;
              <SimpleTooltip content="Verified">
                <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
              </SimpleTooltip>
              {USER.namePronunciationUrl && (
                <>
                  &nbsp;
                  <PronounceMyName
                    className="translate-y-px"
                    namePronunciationUrl={USER.namePronunciationUrl}
                  />
                </>
              )}
            </h1>

            <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
              <FlipSentences sentences={USER.flipSentences} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile full-width ribbons */}
      <div className="relative flex h-24 w-full items-center justify-center overflow-hidden border-t border-edge bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56 sm:hidden">
        <InfiniteRibbon
          rotation={-6}
          duration={40}
          className="absolute w-[200%] py-1.5 font-mono text-xs font-semibold tracking-wide shadow-md"
        >
          DANGER: COMPILING COMPLEX ARCHITECTURES IN REAL TIME
        </InfiniteRibbon>
        <InfiniteRibbon
          rotation={6}
          reverse={true}
          duration={40}
          className="absolute w-[200%] py-1.5 font-mono text-xs font-semibold tracking-wide shadow-md"
        >
          SYSTEM OVERLOAD // ARCHITECTING FULL-STACK SOLUTIONS
        </InfiniteRibbon>
      </div>
    </div>
  );
}
