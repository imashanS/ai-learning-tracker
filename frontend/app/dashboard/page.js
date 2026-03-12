async function getAPI() {
  const res = await fetch("http://127.0.0.1:8000/");
  return res.json();
}

export default async function Dashboard() {
  const data = await getAPI();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{data.message}</p>
    </div>
  );
}