// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});

async function insertUser(username: string, password: string, email: string) {
  await client.connect();
  const result = await client.query(
    `
        INSERT INTO users (username, password, email)
        VALUES ($1,$2,$3)
    `,
    [username, password, email]
  );
  console.log(result);
}

insertUser("shivam", "123456", "shivam@gmail.com");
