import { PrismaClient } from "@prisma/client";
import { get } from "http";
import { emitWarning } from "process";

const prisma = new PrismaClient();

// --- Creating a user ---

// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       email: username,
//       password: password,
//       firstName: firstName,
//       lastName: lastName,
//     },
//     select: {
//       id: true,
//       email: true,
//     },
//   });
//   console.log(res);
// }

// insertUser("shivam@gmail.com", "shivam123", "shivam", "chaurasiya");

// --- Updating  a user ---

// interface UpdateParams {
//   firstName: string;
//   lastName: string;
// }

// async function updateUser(
//   username: string,
//   { firstName, lastName }: UpdateParams
// ) {
//   const res = await prisma.user.update({
//     where: {
//       email: username,
//     },
//     data: {
//       firstName,
//       lastName,
//     },
//   });

//   console.log(res);
// }

// updateUser("shivam@gmail.com", {
//   firstName: "Guts",
//   lastName: "chaurasiya",
// });

// --- Getting a user ---
// async function getUser(username: string) {
//   const res = await prisma.user.findUnique({
//     where: {
//       email: username,
//     },
//   });
//   console.log(res);
// }

// getUser("shivam@gmail.com");

// --- Deleting a User ---

// async function deleteUser(username: string) {
//   const res = await prisma.user.delete({
//     where: {
//       email: username,
//     },
//   });
// }

// deleteUser("shivam@gmail.com");
