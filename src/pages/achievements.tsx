import { AchievementCard } from "@/components/ui/achievement-card";
import { BadgeCheckIcon, BookOpenIcon } from "lucide-react";

export const AchievementsPage = () => {
  return (
    <section className="h-screen w-full bg-[#050505] px-[40px] py-[100px] flex flex-col items-center overflow-y-auto">
      <div className="flex flex-col w-full gap-4">
        <div className="p-4 bg-[#0f0f0f] rounded-2xl">
          <div className="flex items-center justify-start gap-4 text-white text-[24px] font-semibold">
            <BadgeCheckIcon size={24} />
            <h2>Licenses & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AchievementCard
              image="../src/assets/certificates/react certificate.png"
              imageLink="https://www.hackerrank.com/certificates/cd01038aca6e"
              title="Frontend Developer ( React )"
              subtitle="HackerRank"
              date="Issued Aug. 2025"
              icon="/hacker rank icon.png"
            />
            <AchievementCard
              image="../src/assets/certificates/javascript certificate.png"
              imageLink="https://www.hackerrank.com/certificates/d58f14cb8d21"
              title="JavaScript ( Basic )"
              subtitle="HackerRank"
              date="Issued Aug. 2025"
              icon="/hacker rank icon.png"
            />
            <AchievementCard
              image="../src/assets/certificates/css certificate.png"
              imageLink="https://www.hackerrank.com/certificates/2f69425822b8"
              title="CSS ( Basic )"
              subtitle="HackerRank"
              date="Issued Aug. 2025"
              icon="/hacker rank icon.png"
            />
            <AchievementCard
              image="../src/assets/certificates/data-structure.png"
              imageLink=""
              title="Data Structure"
              subtitle="Augusto Galego ( Hubla )"
              date="Issued July 2025"
              icon="/hubla icon.jpeg"
            />
          </div>
        </div>
        <div className="p-4 bg-[#0f0f0f] rounded-2xl">
          <div className="flex items-center justify-start gap-4 text-white text-[24px] font-semibold">
            <BookOpenIcon size={24} />
            <h2>Education</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AchievementCard
              image="/iesb-icon.png"
              imageLink=""
              title="Computer Science"
              subtitle="IESB (Undergraduate)"
              date="Jan. 2023 - Dec. 2026"
              icon="/iesb-icon.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
