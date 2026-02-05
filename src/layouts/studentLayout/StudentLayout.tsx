import { StudentLayoutSidebar } from "./StudentLayoutSidebar";
import { StudentLayoutHeader } from "./StudentLayoutHeader";

interface StudentLayoutProps {
  children: React.ReactNode;
  sectionTitle: string;
}

{
  /*! Where does sectionTitle comes from?
It comes from the parent component that uses StudentLayout
a code example for that is settings page
export const SettingsPage = () => {
  return (
<StudentLayout sectionTitle="Settings">
     // Settings content goes here(setting component)
</StudentLayout>
  );
}; */
}

export const StudentLayout = ({
  children,
  sectionTitle,
}: StudentLayoutProps) => {
  return (
    <div
      className="flex h-screen bg-[#0f0f12] text-white"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      {/* Sidebar */}
      <StudentLayoutSidebar activeTab={sectionTitle} />

      {/* Main Content Area */}
      <div className="flex-1 p-10 overflow-auto">
        <StudentLayoutHeader />
        {/* Title Section */}
        <div className="mb-10">
          <h2 className="text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#7186FF] to-[#FE7587] pb-4">
            {sectionTitle}
          </h2>
          <div className="h-[1px] w-full bg-white opacity-20"></div>
        </div>

        {children}
      </div>
    </div>
  );
};
