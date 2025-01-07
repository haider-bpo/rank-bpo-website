import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import VideoPlayer from "@/components/shared/VideoPlayer";

export function EventsViewer() {
  const data = [
    {
      title: "Naran Kaghan Tour",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 text-justify">
            Our entire team embarked on an unforgettable adventure to the
            stunning landscapes of Naran Kaghan. From team-building activities
            by the serene lakes to exploring the lush valleys and majestic
            mountains, it was a trip filled with camaraderie and breathtaking
            moments. Relive the highlights of our journey and see why Naran
            Kaghan is a must-visit destination for nature lovers and adventure
            seekers alike!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <VideoPlayer
              url="/videos/office/tour.mp4"
              alt="14 august"
              width={500}
              // height={240}
            />
            <Image
              src="/images/office/tour-2024/1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/office/tour-2024/2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/office/tour-2024/3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Award Night",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 text-justify">
            Our Award Night is a truly memorable event, where we gather to
            recognize and celebrate the hard work, dedication, and outstanding
            achievements of our team. The evening is filled with excitement as
            we honor individuals who go above and beyond in their roles. Thus
            making significant contributions to our success. From heartfelt
            speeches to the presentation of awards, every team member is
            acknowledged for their unique contributions. It’s a night of
            gratitude, pride, and celebration, where everyone feels valued and
            appreciated. The Award Night not only highlights the excellence
            within our
          </p>
          <div className="grid grid-cols-2 gap-4">
            <VideoPlayer
              url="/videos/office/gala-night.mp4"
              alt="14 august"
              width={500}
              // height={240}
            />
            <Image
              src="/images/office/annual-gathering/1.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/office/annual-gathering/2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/office/annual-gathering/3.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "The Cricket Carnival",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 text-justify">
            Our company is proud to host exciting cricket matches that bring
            together colleagues for a day of friendly competition and team
            building. The match was not only about cricket, but also about
            fostering connections, promoting teamwork, and having fun outside
            the office. Everyone enjoyed the friendly rivalry, and it was a
            perfect opportunity to build stronger relationships in a relaxed,
            energetic atmosphere.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <VideoPlayer
              url="/videos/office/cricket/1.mov"
              alt="14 august"
              width={500}
              // height={240}
            />
            <Image
              src="/images/office/cricket/2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/office/cricket/cricket-guest.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <VideoPlayer
              url="/videos/office/cricket/2.mov"
              alt="14 august"
              width={500}
              // height={240}
            />
          </div>
        </div>
      ),
    },

    {
      title: "Quran Recitation",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 text-justify">
            We’ve had the privilege of hosting several Quran Recitations here at
            RankBPO. Bringing together our team in a spirit of reflection and
            unity. Providing a peaceful and meaningful opportunity to appreciate
            the beauty of the Quran’s verses while promoting spiritual growth
            and connection. Each recitation session was filled with deep
            reverence and respect, allowing participants to reflect on the
            wisdom and teachings of the Quran. These recitations were a
            wonderful reminder of the importance of faith and community, and we
            look forward to continuing this holy tradition in the future.
          </p>
          <div className="grid gap-4">
            <VideoPlayer
              url="/videos/office/quran-khawani.mp4"
              alt="14 august"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Women’s Day",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 text-justify">
            On Women’s Day, we came together to honor and celebrate the
            incredible women who contribute to our company and community.
            Filling everyone with appreciation, empowering discussions, and
            inspiring stories, highlighting the achievements and leadership of
            women in every aspect of our lives. Acknowledging the challenges
            women face, while also recognizing their immense contributions,
            resilience, and strength. Our Women’s Day celebration not only
            showcased the importance of gender equality but also reinforced our
            commitment to creating an inclusive and supportive environment for
            all.
          </p>
          <div className="grid gap-4">
            <VideoPlayer url="/videos/office/womens-day.mp4" alt="14 august" />
          </div>
        </div>
      ),
    },

    {
      title: "14 August Celebration",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 text-justify">
            This 14th August, our office celebrated Pakistan&apos;s Independence
            Day with great enthusiasm and pride. The day was marked by a series
            of events, including a flag-hoisting ceremony, a touching tribute to
            our national heroes, and a variety of cultural performances
            showcasing the rich heritage of Pakistan. The celebration was a
            heartwarming display of unity and patriotism, bringing together our
            team to honor the spirit of independence and our shared commitment
            to progress and prosperity.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-4 my-auto">
              <Image
                src="/images/office/14-august/2.jpg"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/office/14-august/4.jpg"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <Image
              src="/images/office/14-august/3.jpeg"
              alt="bento template"
              width={500}
              height={500}
              objectFit="contain"
              className="rounded-lg w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Award Night",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 text-justify">
            Our Award Night is a truly memorable event, where we gather to
            recognize and celebrate the hard work, dedication, and outstanding
            achievements of our team. The evening is filled with excitement as
            we honor individuals who go above and beyond in their roles. Thus
            making significant contributions to our success. From heartfelt
            speeches to the presentation of awards, every team member is
            acknowledged for their unique contributions. It’s a night of
            gratitude, pride, and celebration, where everyone feels valued and
            appreciated. The Award Night not only highlights the excellence
            within our
          </p>
          <div className="grid grid-cols-2 gap-4">
            <VideoPlayer
              url="/videos/office/gala-night.mp4"
              alt="14 august"
              width={500}
              // height={240}
            />
            <Image
              src="/images/office/annual-gathering/1.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/office/annual-gathering/2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/office/annual-gathering/3.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  const title = "Events from our journey";
  const subTitle =
    "We've been working on these services for the past few years. Here's a timeline of our journey.";

  return (
    <div className="w-full">
      <Timeline data={data} title={title} subTitle={subTitle} />
    </div>
  );
}
