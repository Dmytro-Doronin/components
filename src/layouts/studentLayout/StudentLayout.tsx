import { StudentLayoutSidebar } from "../../../../../Majd/testing_Project/src/components/StudentLayoutSidebar";
import { StudentLayoutHeader } from "../../../../../Majd/testing_Project/src/components/StudentLayoutHeader";

export const StudentLayout = () => {
  return (
    <div
      className="flex min-h-screen bg-[#0f0f12] text-white overflow-hidden"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      {/* Sidebar */}
      <StudentLayoutSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-10 overflow-auto">
        <StudentLayoutHeader />
        {children}
      </div>
    </div>
  );
};
