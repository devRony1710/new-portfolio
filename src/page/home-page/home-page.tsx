import BackgroundGridImages from '@/assets/grid-background-new-portfolio.png';
import { LeftSideTemplate } from '@/templates/left-side-template/left-side-template';

export const HomePage = () => {
  return (
    <main className="w-full h-screen flex relative">
      {/* background */}
      <img src={BackgroundGridImages} alt="Background Grid" className="w-full h-full absolute object-cover inset-0" />

      {/* left */}
      <LeftSideTemplate />
      {/* right */}
      <section className="flex-1 h-full bg-blue-500 z-[2]"></section>
    </main>
  );
};
