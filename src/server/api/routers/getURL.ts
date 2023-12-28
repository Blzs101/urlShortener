import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const URLRouter = createTRPCRouter({
  getURL: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.uSER_URL.findMany({
      select: { url: true, createdAt: true },
      where: { userId: ctx.session.user.id },
    });
  }),
  createURL: protectedProcedure
    .input(
      z.object({ url: z.string().min(1), shortenedURL: z.string().min(1) }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.uSER_URL.create({
        data: {
          url: input.url,
          userId: ctx.session.user.id,
          shortenedURL: input.shortenedURL,
        },
      });
    }),

  findLatestURL: protectedProcedure.query(({ ctx }) => {
    return ctx.db.uSER_URL.findFirst({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        shortenedURL: true,
      },
    });
  }),
  getAllURL: protectedProcedure.query(({ ctx }) => {
    return ctx.db.uSER_URL.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id:true,
        url: true,
        shortenedURL: true,
        createdAt: true
      },
      where:{
        userId: ctx.session.user.id
      }
    });
  }),
  deleteURL: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.uSER_URL.delete({
        where: { id: input.id, userId: ctx.session.user.id },
      });
    }),
});
