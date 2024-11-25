import client from "@/db";

const fetchData = async () => {
  const user = await client.user.findFirst();
  return {
    email: user?.email,
  };
};

export default async function User() {
  const data = await fetchData();
  return (
    <div>
      <h1>User</h1>
      {data.email}
    </div>
  );
}
