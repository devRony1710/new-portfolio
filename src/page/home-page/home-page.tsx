import BackgroundGridImages from '@/assets/grid-background-new-portfolio.png';
import { AppContext } from '@/context/app-context';
import { LeftSideTemplate } from '@/templates/left-side-template/left-side-template';
import { RightSideTemplate } from '@/templates/right-side-template/right-side-template';
import { useContext } from 'react';

export const HomePage = () => {
  const { isLoadingUserInfo } = useContext(AppContext);

  return (
    <main className="w-full h-screen flex relative">
      {/* background */}
      <img src={BackgroundGridImages} alt="Background Grid" className="w-full h-full absolute object-cover inset-0" />

      {isLoadingUserInfo ? (
        <section className="w-full h-full flex items-center justify-center">
          <div className="w-[100px] h-[100px] border-4 border-bgPrimary rounded-full animate-spin"></div>
        </section>
      ) : (
        <>
          {/* left */}
          <LeftSideTemplate />
          {/* right */}
          <RightSideTemplate />
        </>
      )}
    </main>
  );
};
