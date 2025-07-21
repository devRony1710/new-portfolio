import { FC } from 'react';
import { JobsCardProps } from './jobs.card.types';

export const JobsCard: FC<JobsCardProps> = ({ from, to, title, company, description, projects, technologies }) => {
  return (
    <div className="w-full h-auto flex gap-[1rem] hover:bg-zinc-100/10 p-[1rem] rounded-[1rem]">
      <span className="text-[1rem] text-white font-bold inline-flex w-[200px]">
        {from} - {to}
      </span>

      <div className="w-full h-auto flex flex-col gap-[1rem]">
        <span className="text-[1rem] text-white font-bold">{title}</span>
        <span className="text-[1rem] text-white font-bold">{company}</span>
        <p className="text-[1rem] text-zinc-400 font-medium">{description}</p>

        <div className="flex w-full gap-[1rem]">
          {projects.map((project, index) => (
            <span key={index} className="text-[1rem] text-zinc-300 font-medium">
              {project}
            </span>
          ))}
        </div>

        <div className="flex w-full gap-[1rem] items-center">
          {technologies.map((technology, index) => (
            <span key={index} className="text-[1rem] text-textGreen bg-bgPrimary font-bold px-[1rem] py-[0.5rem] rounded-[1rem]">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
