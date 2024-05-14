// Components
import { HeaderBox } from "@/components/shared/header-box";
import { TotalBalanceBox } from "@/components/shared/total-balance-box";
import { RightSidebar } from "./_components/right-sidebar";

const RootPage = () => {
  const loggedIn = {
    firstName: "Joss",
    lastName: "Bank",
    email: "contact@joss.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome, "
            subtitle="View and manage your account and transactions"
            user={loggedIn?.firstName || "Guest"}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1250.5}
          />
        </header>
        Recent transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 5000 }, { currentBalance: 244.2 }]}
      />
    </section>
  );
};

export default RootPage;
