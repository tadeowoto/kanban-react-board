type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <section className="w-full min-h-screen bg-mainBG flex flex-col gap-10">
      {children}
    </section>
  );
};

export default MainLayout;
