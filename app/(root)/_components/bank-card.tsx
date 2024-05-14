import Link from "next/link";
import { Nfc } from "lucide-react";

// Utils
import { formatAmount } from "@/lib/utils";
import Image from "next/image";

interface BankCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}

export const BankCard = ({
  account,
  userName,
  showBalance = true,
}: BankCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            <p className="font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-12 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●●<span className="text-14"> 1234</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Nfc size={24} className="text-white" />
          <Image
            src="/mastercard.svg"
            alt="MasterCard logo"
            className="ml-5"
            width={45}
            height={32}
          />
        </div>
        <Image
          src="/pattern-transparent.svg"
          width={400}
          height={400}
          alt="Horizon pattern"
          className="absolute top-0 left-0"
        />
      </Link>
    </div>
  );
};
