import { getReposInfo, ReposInfoContract } from '@/api/get/get-repos-info/get-repos-info';
import { getUserInfo, UserInfo } from '@/hooks/useUserInfo';
import { getBestRepos } from '@/lib/get-best-repos';
import { useQuery } from '@tanstack/react-query';
import { createContext, useEffect, useMemo, useState } from 'react';

// Interfaz para el contexto
interface AppContextType {
  userInfo: null | UserInfo;
  isLoadingUserInfo: boolean;
  reposInfo: null | ReposInfoContract[];
  isLoadingReposInfo: boolean;
}

// Valor por defecto para el contexto
const defaultContextValue: AppContextType = {
  userInfo: null,
  isLoadingUserInfo: false,
  reposInfo: null,
  isLoadingReposInfo: false
};

// Crear el contexto
export const AppContext = createContext(defaultContextValue);

// Proveedor del contexto
export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { userInfo, isLoadingUserInfo } = getUserInfo();
  const [bestFourRepos, setBestFourRepos] = useState<ReposInfoContract[]>([]);

  const { data: reposInfo, isLoading: isLoadingReposInfo } = useQuery({
    queryKey: ['reposInfo'],
    queryFn: () => getReposInfo()
  });

  useEffect(() => {
    if (reposInfo) {
      const bestRepos = getBestRepos(reposInfo);
      setBestFourRepos(bestRepos);
    }
  }, [reposInfo]);

  // useMemo para optimizar el valor del contexto
  const value = useMemo(() => {
    return {
      userInfo: userInfo as UserInfo,
      isLoadingUserInfo: isLoadingUserInfo,
      reposInfo: bestFourRepos,
      isLoadingReposInfo: isLoadingReposInfo
    };
  }, [userInfo, bestFourRepos, isLoadingUserInfo, isLoadingReposInfo, reposInfo]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
