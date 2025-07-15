import BackgroundGridImages from '@/assets/grid-background-new-portfolio.png';
import { LeftSideTemplate } from '@/templates/left-side-template/left-side-template';
import { RightSideTemplate } from '@/templates/right-side-template/right-side-template';

export const HomePage = () => {
  return (
    <main className="w-full h-screen flex relative">
      {/* background */}
      <img src={BackgroundGridImages} alt="Background Grid" className="w-full h-full absolute object-cover inset-0" />

      {/* left */}
      <LeftSideTemplate />
      {/* right */}
      <RightSideTemplate />
    </main>
  );
};
