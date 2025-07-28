import { ReposInfoContract } from '@/api/get/get-repos-info/get-repos-info';

const bestReposName = ['extension-manager', 'Bookmark-Landing'];

export const getBestRepos = (reposInfo: ReposInfoContract[]) => {
  const bestRepos = reposInfo.filter((repo: ReposInfoContract) => bestReposName.includes(repo.name));
  return bestRepos;
};
