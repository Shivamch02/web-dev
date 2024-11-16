import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodosAndUserDetails(userId: number) {
  //   await prisma.todo.create({
  //     data: {
  //       title: "Learn Prisma",
  //       description: "Learn Prisma",
  //       userId: 1,
  //     },
  //   });
  const response = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      user: true,
    },
  });
  console.log(response);
  //   await prisma.user.create({
  //     data: {
  //       firstName: "John Doe",
  //       lastName: "Doe",
  //       email: "john@gmail.com",
  //       password: "123456",
  //       username: "john",
  //     },
  //   });
}
getTodosAndUserDetails(1);
