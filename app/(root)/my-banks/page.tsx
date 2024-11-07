import HeaderBox from '@/components/HeaderBox';
import BankCard from '@/components/BankCard';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { getAccounts } from '@/lib/actions/bank.actions';

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities"
        />

        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>

          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts.data.map((a: Account) => (
                <div key={a.id} className="min-w-[325px]">
                  <BankCard
                    account={a}
                    userName={loggedIn?.firstName}
                    showBalance
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;