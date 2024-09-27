
const genericWorkflowData = [
  {
    slno: 1,
    label: "Add Event to Calendar",
    description: "API to add a general event to the calendar",
    api: "/calendar/addEvent",
    params: "{ eventID, title, dateTime, location }",
    apiKey: "CAL123XYZ",
  },
  {
    slno: 2,
    label: "Send Notification",
    description: "API to send a notification for event reminders or updates",
    api: "/notifications/send",
    params: "{ recipientID, message, notificationType }",
    apiKey: "NOTIF456DEF",
  },
  {
    slno: 3,
    label: "Create Task",
    description: "API to create a task in the workflow system",
    api: "/tasks/create",
    params: "{ taskID, title, assignedTo, deadline }",
    apiKey: "TASK789GHI",
  },
  {
    slno: 4,
    label: "Generate Report",
    description: "API to generate a report for a specific time period",
    api: "/reports/generate",
    params: "{ reportID, startDate, endDate, reportType }",
    apiKey: "REP123JKL",
  },
  {
    slno: 5,
    label: "Upload Document",
    description: "API to upload documents to the system",
    api: "/documents/upload",
    params: "{ documentID, fileType, uploadedBy }",
    apiKey: "DOC456MNO",
  },
];

const WorkflowTable = () => {
  return (
    <div className="container mx-auto p-8 px-4">
      <div className="flex justify-between mb-2 ">
        <h1 className="text-2xl font-bold mb-4">Workflows</h1>
        <button className="bg-green-700 px-4 rounded-md">Upload </button>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left text-gray-500">Slno</th>
            <th className="p-4 text-left text-gray-500">Label</th>
            <th className="p-4 text-left text-gray-500">Description</th>
            <th className="p-4 text-left text-gray-500">API</th>
            <th className="p-4 text-left text-gray-500">Params</th>
            <th className="p-4 text-left text-gray-500">API Key</th>
          </tr>
        </thead>
        <tbody>
          {genericWorkflowData.map((workflow, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4 text-gray-800">{workflow.slno}</td>
              <td className="p-4 text-gray-800">{workflow.label}</td>
              <td className="p-4 text-gray-800">{workflow.description}</td>
              <td className="p-4 text-gray-800">{workflow.api}</td>
              <td className="p-4 text-gray-800">{workflow.params}</td>
              <td className="p-4 text-gray-800">{workflow.apiKey}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkflowTable;
