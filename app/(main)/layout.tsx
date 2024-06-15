import Sidebar from "@/components/shared/sidebar";

const MainLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full flex">
      <Sidebar />
      {children}
    </div>
  );
}

export default MainLayout;