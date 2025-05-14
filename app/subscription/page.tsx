import { auth, clerkClient } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import AcquirePlanButton from "./_components/acquire-plan-button";
import { Badge } from "../_components/ui/badge";
import { getCurrentMonthTransactions } from "../_data/get-current-month-transactions";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const user = await clerkClient.users.getUser(userId);

  const hasPremiumPlan = user.publicMetadata.subscriptionPlan === "premium";

  const currentMonthTransactions = await getCurrentMonthTransactions();

  return (
    <>
      <Navbar />

      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Assinatura</h1>

        <div className="flex gap-8">
          <Card className="w-[450px]">
            <CardHeader className="space-y-6 border-b border-solid py-8">
              <h2 className="text-center text-2xl font-semibold">
                Plano Básico
              </h2>

              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-semibold">0,00</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-6 py-10">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>
                  Apenas 10 transações por mês{" "}
                  <span
                    className={`font-bold ${currentMonthTransactions === 10 ? "text-red-500" : "text-primary"}`}
                  >
                    {currentMonthTransactions}
                  </span>
                  /10
                </p>
              </div>

              <div className="flex items-center gap-2">
                <XIcon />
                <p>Relatórios de IA</p>
              </div>

              <Button
                disabled
                variant={"outline"}
                className="mt-6 w-full rounded-full font-bold"
              >
                Plano Atual
              </Button>
            </CardContent>
          </Card>

          <Card className="w-[450px]">
            <CardHeader className="relative space-y-6 border-b border-solid py-8">
              {hasPremiumPlan && (
                <Badge className="top-1/5 absolute left-6 cursor-default bg-primary/10 text-base text-primary hover:bg-primary/10">
                  Ativo
                </Badge>
              )}

              <h2 className="text-center text-2xl font-semibold">
                Plano Premium
              </h2>

              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-semibold">19,90</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-6 py-10">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Transações ilimitadas</p>
              </div>

              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Relatórios de IA</p>
              </div>

              <AcquirePlanButton />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
