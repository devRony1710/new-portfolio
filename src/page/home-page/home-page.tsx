import BackgroundGridImages from '@/assets/grid-background-new-portfolio.png';

export const HomePage = () => {
  return (
    <main className="w-full h-screen flex relative">
      {/* background */}
      <img src={BackgroundGridImages} alt="Background Grid" className="w-full h-full absolute object-cover inset-0" />

      {/* left */}
      <section className="w-[536px] h-full bg-red-500 z-[1]"></section>
      {/* right */}
      <section className="flex-1 h-full bg-blue-500 z-[2]"></section>
    </main>
  );
};
