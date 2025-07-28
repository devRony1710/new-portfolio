import ReactLogo from '@/assets/icons/React_dark.svg';
import TailwindLogo from '@/assets/icons/tailwindcss.svg';
import TypeScriptLogo from '@/assets/icons/typescript.svg';
import JavaScriptLogo from '@/assets/icons/javascript.svg';

const IconsObj = {
  'Bookmark-Landing': [ReactLogo, TailwindLogo, JavaScriptLogo],
  'Extension-Manager': [ReactLogo, TailwindLogo, TypeScriptLogo]
};

export const getIconsRepo = (repoName: string) => {
  // Aquí creamos una union de tipos para que el repoName sea de tipo string y keyof typeof IconsObj
  // keyof typeof IconsObj se lee como "los tipos de las llaves del objeto IconsObj"
  // la keyword as se utiliza para afirmar que el repoName es de tipo keyof typeof IconsObj
  return IconsObj[repoName as keyof typeof IconsObj] ?? [];
};
