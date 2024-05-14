// Utils
import { AnimatedCounter } from "./animated-counter";

// Components
import { DoughnutChart } from "./doughnut-chart";

interface TotalBalanceBoxProps {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}

export const TotalBalanceBox = ({
  accounts,
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          {totalBanks} account{totalBanks > 1 && "s"}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total balance:</p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};
