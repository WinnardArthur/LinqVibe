import { RateLimiterPrisma } from "rate-limiter-flexible";
import { auth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/db";

const FREE_LIMIT = 5;
const PRO_POINTS = 99;
const DURATION = 30 * 24 * 60 * 60; // 30 days
const GENERATION_COSTS = 1;

// Get usages
export const getUsageTracker = async () => {
  const { has } = await auth();

  const hasProAccess = has({ plan: "pro" });

  const usageTracker = new RateLimiterPrisma({
    storeClient: prisma,
    tableName: "Usage",
    points: hasProAccess ? PRO_POINTS : FREE_LIMIT,
    duration: DURATION,
  });

  return usageTracker;
};

// Consume credits
export const consumeCredits = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const usageTracker = await getUsageTracker();
  const result = await usageTracker.consume(userId, GENERATION_COSTS);

  return result;
};

// Get usage status
export const getUsageStatus = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const usageTracker = await getUsageTracker();
  const result = await usageTracker.get(userId);

  return result;
};
