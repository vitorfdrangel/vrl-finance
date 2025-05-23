import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionPieChart from "../_components/transactions-pie-chart";
import GetDashboard from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";
import AiReportButton from "./_components/ai-report-button";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");

  if (monthIsInvalid) {
    redirect(`/?month=${new Date().getMonth() + 1}`);
  }

  const dashboard = await GetDashboard(month, userId);

  const user = await clerkClient().users.getUser(userId!);

  return (
    <>
      <Navbar />

      <div className="space-y-6 p-6 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <AiReportButton
              month={month}
              hasPremiumPlan={
                user.publicMetadata.subscriptionPlan === "premium"
              }
            />
            <TimeSelect />
          </div>
        </div>

        <div className="grid grid-cols-[2fr,1fr] gap-6">
          <div className="space-y-6">
            <SummaryCards {...JSON.parse(JSON.stringify(dashboard))} />

            <div className="grid grid-cols-[1.35fr,2fr] grid-rows-1 gap-6">
              <TransactionPieChart {...JSON.parse(JSON.stringify(dashboard))} />

              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>

          <div>
            <LastTransactions
              lastTransactions={JSON.parse(
                JSON.stringify(dashboard.lastTransactions),
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
