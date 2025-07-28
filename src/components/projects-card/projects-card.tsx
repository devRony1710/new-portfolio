import { getReposImages } from '@/lib/get-repos-images';
import { ProjectsCardProps } from './projects-card.types';
import { getIconsRepo } from '@/lib/get-icons-repo';

export const ProjectsCard = ({ repoInfo }: ProjectsCardProps) => {
  return (
    <>
      {repoInfo?.map((repo, index) => (
        <div key={index} className="w-full relative max-w-[380px] h-auto min-h-[558px] p-[1rem] hover:bg-zinc-100/10 rounded-[1rem]">
          <div className="flex flex-col gap-[1rem] w-full">
            <div className="w-full h-[200px] bg-radial-[at_50%_75%] from-sky-200 via-bgPrimary to-bgPrimary to-90% rounded-lg relative">
              <img
                src={getReposImages(repo?.name)}
                alt={`${repo?.name}-thumbnail`}
                className="w-[95%] hover:scale-[1.4] transition-all duration-300 z-[10] ease-in-out rotate-[3deg] translate-y-[5%] translate-x-[5%] scale-[1.1] absolute mx-auto rounded-lg h-[180px] object-fill"
              />
            </div>

            <div className="font-inter text-white w-full flex flex-col h-auto gap-[12px]">
              <span className="text-[22px] font-bold">{repo?.name}</span>
              <span className="text-[18px] text-zinc-400">{repo?.description}</span>
            </div>

            <div className="flex items-center gap-[1rem]">
              {getIconsRepo(repo?.name).map((icon, index) => (
                <img key={index} src={icon} alt={`${repo?.name}-icon`} className="w-[20px] h-[20px]" />
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 right-8 flex gap-[1rem]">
            <a className=" text-white font-medium font-inter bg-bgPrimary px-[1rem] py-[0.5rem] rounded-[1rem]" target="_blank" href={repo?.svn_url} rel="noreferrer">
              Ver Repositorio
            </a>
            <a className=" text-white font-medium font-inter bg-bgPrimary px-[1rem] py-[0.5rem] rounded-[1rem]" target="_blank" href={repo?.homepage} rel="noreferrer">
              Ver demo
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
