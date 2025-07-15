import { AboutMe } from '@/data/about-me';
import { JobsSection } from '../jobs-section/jobs-sections';
import './right-side-template.module.css';

const ParagraphAboutMe = () => {
  return (
    <section className="w-full h-auto max-w-[700px] mx-auto flex flex-col gap-[1rem]">
      {AboutMe.map((item, index) => (
        <p key={index} className="text-[18px] text-zinc-400 font-medium">
          {item}
        </p>
      ))}
    </section>
  );
};

export const RightSideTemplate = () => {
  return (
    <section className="flex-1 h-full flex flex-col gap-[2rem] bg-transparent z-[2] p-[96px] font-inter overflow-y-auto">
      <ParagraphAboutMe />
      <JobsSection />
    </section>
  );
};
