import { JobsCard } from '@/components/jobs-card/jobs-card';
import { Jobs } from '@/data/jobs';

export const JobsSection = () => {
  return (
    <section className="w-full h-auto max-w-[700px] mx-auto flex flex-col gap-[1rem]">
      {Jobs.map((job, index) => (
        <JobsCard company={job.company} description={job.description} from={job.from} to={job.to} title={job.title} projects={job.projects} technologies={job.technologies} key={index} />
      ))}
    </section>
  );
};
