import { ProjectsCard } from '@/components/projects-card/projects-card';
import { AppContext } from '@/context/app-context';
import { useContext } from 'react';

export const ProjectsSection = () => {
  const { reposInfo } = useContext(AppContext);
  console.log(reposInfo);

  return (
    <section className="w-full h-auto max-w-[850px] mx-auto gap-[1rem]">
      <section className="w-full grid grid-cols-2 gap-[1rem]">
        <ProjectsCard repoInfo={reposInfo ?? []} />
      </section>
    </section>
  );
};
