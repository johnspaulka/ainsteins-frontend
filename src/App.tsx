import { EnquiriesTable } from "./components/EnquiresTable";
import { SideNavbar } from "./components/SideNav";
import { TabNav } from "./components/TabNav";
import QueryDetails from "./pages/QueryDetails"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkflowListPage from "./pages/WorkflowListPage";

// Main Content Component
const QueriesPage = () => {
  return (
    <Router>
      <div>
        <div className="flex w-full">
          {/* Left Sidebar */}
          <div className="w-48">
            <SideNavbar />
          </div>

          {/* Main Content */}
          <div className="w-full h-1/2 px-6">
            <TabNav />
            <div className="pt-10">
              <Routes>
                <Route path="/" element={<WorkflowListPage />} />
                <Route path="/enquiries" element={<EnquiriesTable />} />
                <Route path="/enquiries/details" element={<QueryDetails />} />
                <Route path="/connect-to-workflows" element={<WorkflowListPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};


export default QueriesPage;


