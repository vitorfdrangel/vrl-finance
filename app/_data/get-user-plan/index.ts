"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export const getUserPlan = async () => {
  const { userId } = await auth();

  const user = await clerkClient().users.getUser(userId!);

  if (user.publicMetadata.subscriptionPlan === "premium") {
    return true;
  } else {
    return false;
  }
};
