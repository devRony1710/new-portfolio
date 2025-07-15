import { Jobs } from '@/data/jobs';

export const JobsSection = () => {
  return (
    <section className="w-full h-auto max-w-[700px] mx-auto flex flex-col gap-[1rem]">
      {Jobs.map((job, index) => (
        <a href={job.link} target="_blank" key={index} className="w-full h-auto flex gap-[1rem] hover:bg-zinc-100/10 p-[1rem] cursor-pointer rounded-[1rem]" rel="noreferrer">
          <span className="text-[1rem] text-white font-bold inline-flex w-[200px]">
            {job.from} - {job.to}
          </span>

          <div className="w-full h-auto flex flex-col gap-[1rem]">
            <span className="text-[1rem] text-white font-bold">{job.title}</span>
            <span className="text-[1rem] text-white font-bold">{job.company}</span>
            <p className="text-[1rem] text-zinc-400 font-medium">{job.description}</p>

            <div className="flex w-full gap-[1rem]">
              {job.projects.map((project, index) => (
                <span key={index} className="text-[1rem] text-zinc-300 font-medium">
                  {project}
                </span>
              ))}
            </div>

            <div className="flex w-full gap-[1rem] items-center">
              {job.technologies.map((technology, index) => (
                <span key={index} className="text-[1rem] text-[#3ED597] bg-[#145C4C] font-bold px-[1rem] py-[0.5rem] rounded-[1rem]">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};
