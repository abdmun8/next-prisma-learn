import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "error"],
  __internal: {
    useUds: true,
  },
});

export default prisma;
export * from "@prisma/client";
