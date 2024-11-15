import { PrismaClient, type Request } from "@prisma/client";

const prisma = new PrismaClient();

export const createRequest = (data: unknown) => {
  return prisma.request.create({
    data: (data as unknown) as Request,
  });
};
