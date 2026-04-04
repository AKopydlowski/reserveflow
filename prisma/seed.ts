import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./prisma/dev.db",
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.appointment.deleteMany();
  await prisma.timeOff.deleteMany();
  await prisma.workingHour.deleteMany();
  await prisma.serviceResource.deleteMany();
  await prisma.client.deleteMany();
  await prisma.service.deleteMany();
  await prisma.resource.deleteMany();

  const resource = await prisma.resource.create({
    data: {
      name: "John Barber",
      type: "STAFF",
      color: "#0f172a",
      workingHours: {
        create: [
          { dayOfWeek: 1, startTime: "09:00", endTime: "17:00" },
          { dayOfWeek: 2, startTime: "09:00", endTime: "17:00" },
          { dayOfWeek: 3, startTime: "09:00", endTime: "17:00" },
          { dayOfWeek: 4, startTime: "09:00", endTime: "17:00" },
          { dayOfWeek: 5, startTime: "09:00", endTime: "17:00" },
        ],
      },
    },
  });

  const service = await prisma.service.create({
    data: {
      name: "Standard Haircut",
      description: "Basic haircut service",
      durationMin: 60,
      price: 80,
      resources: {
        create: [{ resourceId: resource.id }],
      },
    },
  });

  const client = await prisma.client.create({
    data: {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "jan@example.com",
      phone: "500600700",
      notes: "First test client",
    },
  });

  await prisma.appointment.create({
    data: {
      clientId: client.id,
      serviceId: service.id,
      resourceId: resource.id,
      status: "CONFIRMED",
      startAt: new Date("2026-04-06T09:00:00.000Z"),
      endAt: new Date("2026-04-06T10:00:00.000Z"),
      notes: "Seeded appointment",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });