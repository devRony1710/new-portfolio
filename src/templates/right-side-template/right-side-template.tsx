import { AboutMe } from '@/data/about-me';

export const RightSideTemplate = () => {
  return (
    <section className="flex-1 h-full bg-transparent z-[2] p-[96px] font-inter">
      <div className="w-full h-auto max-w-[700px] mx-auto flex flex-col gap-[1rem]">
        {AboutMe.map((item, index) => (
          <p key={index} className="text-[18px] text-zinc-400 font-medium">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
};
