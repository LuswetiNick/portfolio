import Header from "@/components/dashboard/header/header";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Header />
      <section>{children}</section>
    </main>
  );
};
export default DashboardLayout;
