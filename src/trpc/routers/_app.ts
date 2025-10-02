import { messageRouter } from "@/modules/messages/server/procedures";
import { projectRouter } from "@/modules/projects/server/procedure";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  messages: messageRouter,
  project: projectRouter
});

export type AppRouter = typeof appRouter;
