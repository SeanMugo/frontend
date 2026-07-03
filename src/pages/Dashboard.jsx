import useAuth from "../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow">

        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back{user ? `, ${user.username}` : ""}.
        </p>

      </div>
    </div>
  );
}