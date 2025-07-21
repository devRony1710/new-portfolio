import { getUserInfo, UserInfo } from '@/hooks/useUserInfo';
import { createContext, useMemo } from 'react';

// Interfaz para el contexto
interface AppContextType {
  userInfo: null | UserInfo;
  isLoadingUserInfo: boolean;
}

// Valor por defecto para el contexto
const defaultContextValue: AppContextType = {
  userInfo: null,
  isLoadingUserInfo: false
};

// Crear el contexto
export const AppContext = createContext(defaultContextValue);

// Proveedor del contexto
export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { userInfo, isLoadingUserInfo } = getUserInfo();

  // useMemo para optimizar el valor del contexto
  const value = useMemo(() => {
    return {
      userInfo: userInfo as UserInfo,
      isLoadingUserInfo: isLoadingUserInfo
    };
  }, [userInfo]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
