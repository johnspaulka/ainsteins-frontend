import { TabNav } from "../components/TabNav";
import { SubTabNav } from "../components/SubNav";
import { EnquiriesTable } from "../components/EnquiresTable";

const QueriesPage = () => {
  return (
    <div>
      {/* Top Navigation Tabs */}
      <TabNav />
      {/* Sub Navigation Tabs */}
      <SubTabNav />
      {/* Table with Customer Queries List */}
      <EnquiriesTable />
    </div>
  );
};

export default QueriesPage;
