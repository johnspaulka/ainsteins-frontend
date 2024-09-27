import { EnquiriesTable } from "./components/EnquiresTable";
import { LogoHeader } from "./components/LogoHeader";
import { SideNavbar } from "./components/SideNav";
import { TabNav } from "./components/TabNav";
import WorkflowTable from "./pages/WorkflowListPage";
import QueryDetails from "./pages/QueryDetails"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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
        <div className="w-1/5">
          <SideNavbar />
        </div>
        
        {/* Main Content */}
        <div className="w-3/4 py-8 h-1/2">
        <Router>
        <Routes>
        <Route path="/" element={<WorkflowTable />} />
        <Route path="/enquiries" element={<EnquiriesTable />} />
        <Route path="/enquiries/details" element={<QueryDetails />} />
      </Routes>
      </Router>
    
          {/* Table with Customer Queries List */}
          
        </div>
      </div>
    </div>
  );
};
 

export default QueriesPage;


