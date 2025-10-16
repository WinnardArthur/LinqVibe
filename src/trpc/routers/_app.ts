import { messageRouter } from "@/modules/messages/server/procedures";
import { projectRouter } from "@/modules/projects/server/procedure";
import { usageRouter } from "@/modules/usage/server/procedure";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  messages: messageRouter,
  projects: projectRouter,
  usage: usageRouter
});

export type AppRouter = typeof appRouter;
