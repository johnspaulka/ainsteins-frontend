import { useState } from "react";
import ConnectToWorkflowModal from "../components/ConnectToWorkflowModal";

const genericWorkflowData = [
  {
    slno: 1,
    label: "Add Event to Calendar",
    description: "API to add a general event to the calendar",
  },
  {
    slno: 2,
    label: "Send Notification",
    description: "API to send a notification for event reminders or updates",
  },
  {
    slno: 3,
    label: "Create Task",
    description: "API to create a task in the workflow system",
  },
  {
    slno: 4,
    label: "Generate Report",
    description: "API to generate a report for a specific time period",
  },
  {
    slno: 5,
    label: "Upload Document",
    description: "API to upload documents to the system",
  },
];

const WorkflowListPage = () => {
      const [modalOpen, setModalOpen] = useState(false);

      const handleOpen = () => setModalOpen(true);
      const handleClose = () => setModalOpen(false);
  return (
    <div className="container mx-auto p-8 px-4">
      <div className="flex justify-between mb-2 ">
        <h1 className="text-2xl font-bold mb-4">Connect to your Workflows</h1>
        <button className="bg-green-700 px-4 rounded-md" onClick={handleOpen}>
          Connect{" "}
        </button>
        <ConnectToWorkflowModal open={modalOpen} onClose={handleClose} />
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left text-gray-500">Slno</th>
            <th className="p-4 text-left text-gray-500">Label</th>
            <th className="p-4 text-left text-gray-500">Description</th>
            <th className="p-4 text-left text-gray-500">View Details</th>
  
          </tr>
        </thead>
        <tbody>
          {genericWorkflowData.map((workflow, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4 text-gray-800">{workflow.slno}</td>
              <td className="p-4 text-gray-800">{workflow.label}</td>
              <td className="p-4 text-gray-800">{workflow.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkflowListPage;
