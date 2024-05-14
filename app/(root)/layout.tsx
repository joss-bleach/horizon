import Image from "next/image";

// Components
import { Sidebar } from "./_components/sidebar";
import { MobileNavigation } from "./_components/mobile-navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const loggedIn = { firstName: "Joss", lastName: "Bank" };
  return (
    <main className="flex h-screen w-full font-sans">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src="/horizon-logo.svg"
            alt="Horizon logo"
            width={25}
            height={25}
          />
          <div>
            <MobileNavigation user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};
export default MainLayout;
