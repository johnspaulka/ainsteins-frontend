import { EnquiriesTable } from "./components/EnquiresTable";
import { LogoHeader } from "./components/LogoHeader";
import { SideNavbar } from "./components/SideNav";
import { TabNav } from "./components/TabNav";

// Main Content Component
const QueriesPage = () => {
  return (
    <div>
      {/* Top Row: Logo Header and Top Navigation */}
      <div className="flex items-center">
        <LogoHeader />
        <TabNav />
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/4">
          <SideNavbar />
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-8">
          {/* Table with Customer Queries List */}
          <EnquiriesTable />
        </div>
      </div>
    </div>
  );
};
 

export default QueriesPage;


