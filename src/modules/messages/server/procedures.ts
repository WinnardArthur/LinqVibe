import z from "zod";

import { prisma } from "@/lib/db";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { inngest } from "@/inngest/client";

export const messageRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const messages = await prisma.message.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });

    return messages;
  }),
  create: baseProcedure
    .input(
      z.object({
        value: z
          .string()
          .min(1, { error: "Value is required" })
          .max(10000, { error: "Value is too long" }),
        projectId: z.string().min(1, { error: "Project ID is required" }),
      })
    )
    .mutation(async ({ input }) => {
      const newMessage = await prisma.message.create({
        data: {
          content: input.value,
          role: "USER",
          type: "RESULT",
          projectId: input.projectId,
        },
      });

      await inngest.send({
        name: "code-agent/run",
        data: {
          value: input.value,
          projectId: input.projectId,
        },
      });
      return newMessage;
    }),
});
