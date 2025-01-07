import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import VideoPlayer from "./VideoPlayer";

const reels = Array.from(
  { length: 13 },
  (_, i) => `/videos/memes/${i + 1}.mp4`
);

const firstRow = reels.slice(0, reels.length / 2);
const secondRow = reels.slice(reels.length / 2);

const ReelCard = ({ url }) => {
  return (
    <figure
      className={cn(
        "relative w-[14rem] md:w-[22rem] md:h-[60vh] cursor-pointer overflow-hidden rounded-xl border p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <VideoPlayer url={url} alt={url} height="57vh" />
    </figure>
  );
};

export function ReelsSection() {
  return (
    <div className="relative flex h-[170vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex flex-col justify-center items-center text-black pt-2">
        <span className="inline-block mt-2 text-2xl uppercase border-b-4 text-blue-600">
          Content Created By Team
        </span>

        <h1
          data-aos="fade-down"
          className="mt-4 text-white text-lg md:text-3xl font-semibold"
        >
          Watch our Latest Content
        </h1>
      </div>
      <Marquee pauseOnHover className="[--duration:20s] mt-8">
        {firstRow.map((url) => (
          <ReelCard key={url} url={url} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
        {secondRow.map((url) => (
          <ReelCard key={url} url={url} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
