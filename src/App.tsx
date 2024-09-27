import { EnquiriesTable } from "./components/EnquiresTable";
import { LogoHeader } from "./components/LogoHeader";
import { SideNavbar } from "./components/SideNav";
import { TabNav } from "./components/TabNav";
import QueryDetails from "./pages/QueryDetails"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkflowListPage from "./pages/WorkflowListPage";
import MapWorkflow from "./pages/MapWorkflow";

// Main Content Component
const QueriesPage = () => {
  return (
    <Router>
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
            <Routes>
              <Route path="/" element={<WorkflowListPage />} />
              <Route path="/enquiries" element={<EnquiriesTable />} />
              <Route path="/enquiries/:id" element={<QueryDetails />} />
              <Route path="/connect-to-workflows" element={<WorkflowListPage />} />
              <Route path="/map-to-workflows" element={<MapWorkflow />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};
 

export default QueriesPage;


