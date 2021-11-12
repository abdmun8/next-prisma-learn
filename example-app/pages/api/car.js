import prisma from "../../lib/prisma";
export default async function handler(req, res) {
  const cars = await prisma.car.findMany();
  res.status(200).json({ cars });
}
