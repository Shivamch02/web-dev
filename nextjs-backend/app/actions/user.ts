"use server";

import client from "@/db";

export async function signup(email: string, password: string) {
  try {
    await client.user.create({
      data: {
        email,
        password,
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
