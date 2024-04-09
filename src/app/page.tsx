import Login from "@/components/login/page";
import ServerSessionComponent from "@/components/ServerSessionComponent";

export default function Home() {
  return (
    <main>
      <Login />
      <ServerSessionComponent />
    </main>
  );
}
