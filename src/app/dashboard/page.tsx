import { Navigation } from "@/components/dashboard/header/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
const Dashboard = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/login");
  }

  return (
    <section>
      <Navigation />
    </section>
  );
};
export default Dashboard;
