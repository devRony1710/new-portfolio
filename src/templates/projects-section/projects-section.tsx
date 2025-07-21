import { Projects } from '@/data/projects';

export const ProjectsSection = () => {
  return (
    <section className="w-full h-auto max-w-[850px] mx-auto gap-[1rem]">
      <section className="w-full grid grid-cols-2 gap-[1rem]">
        {Projects.map((project, index) => (
          <div key={index} className="w-full max-w-[380px] h-auto max-h-[398px] p-[1rem] hover:bg-zinc-100/10 rounded-[1rem]">
            <div className="w-full h-[200px] bg-radial-[at_50%_75%] from-sky-200 via-bgPrimary to-bgPrimary to-90% rounded-lg relative">
              <img
                src={project.projectImage}
                alt={project.projectName}
                className="w-[95%] hover:scale-[1.4] transition-all duration-300 z-[10] ease-in-out rotate-[3deg] translate-y-[5%] translate-x-[5%] scale-[1.1] absolute mx-auto rounded-lg h-[180px] object-fill"
              />
            </div>

            <div className="font-inter mt-6 text-white w-full flex flex-col h-auto gap-[12px]">
              <span className="text-[22px] font-bold">{project.projectName}</span>
              <span className="text-[18px] text-zinc-400">{project.projectDescription}</span>
            </div>

            <a target="_blank" href={project.projectLink} rel="noreferrer">
              Link
            </a>
          </div>
        ))}
      </section>
    </section>
  );
};
