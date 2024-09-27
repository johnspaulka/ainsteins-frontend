import { useState } from "react";
import { IconButton, Select, MenuItem } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";

// Sample customer queries data
const enquiresData = [
  {
    queryID: "001",
    customerPhone: "+91 98765 43210", // Indian phone number format
    contactInfo: "johndoe@mail.com",
    queryDate: "21/12/2022 10:40 PM",
    queryType: "Appointment",
    status: "Resolved",
    priorityLevel: "High",
    resolutionDetails: "Appointment confirmed for 23/12/2022.",
    feedbackRating: 4,
    conversationID: "C001", // ID for conversation
  },
  {
    queryID: "002",
    customerPhone: "+91 91234 56789", // Indian phone number format
    contactInfo: "janesmith@mail.com",
    queryDate: "22/12/2022 05:20 PM",
    queryType: "Billing",
    status: "Pending",
    priorityLevel: "Medium",
    resolutionDetails: "Waiting for billing clarification.",
    feedbackRating: null,
    conversationID: "C002", // ID for conversation
  },
  {
    queryID: "003",
    customerPhone: "+91 99876 54321",
    contactInfo: "sarahconnor@mail.com",
    queryDate: "23/12/2022 09:15 AM",
    queryType: "Feedback",
    status: "Resolved",
    priorityLevel: "Low",
    resolutionDetails:
      "Thanked for the feedback, and suggestions forwarded to the management.",
    feedbackRating: 5,
    conversationID: "C003",
  },
  {
    queryID: "004",
    customerPhone: "+91 98765 12345",
    contactInfo: "michaelbrown@mail.com",
    queryDate: "24/12/2022 02:30 PM",
    queryType: "Appointment Cancellation",
    status: "Resolved",
    priorityLevel: "Medium",
    resolutionDetails: "Cancellation request processed successfully.",
    feedbackRating: 3,
    conversationID: "C004",
  },
  {
    queryID: "005",
    customerPhone: "+91 87654 32109",
    contactInfo: "emilyj@mail.com",
    queryDate: "25/12/2022 11:00 AM",
    queryType: "Emergency",
    status: "Pending",
    priorityLevel: "High",
    resolutionDetails: "Emergency care requested; awaiting agent response.",
    feedbackRating: null,
    conversationID: "C005",
  },
  {
    queryID: "006",
    customerPhone: "+91 76543 21098",
    contactInfo: "chrisjohnson@mail.com",
    queryDate: "26/12/2022 01:45 PM",
    queryType: "General Inquiry",
    status: "Resolved",
    priorityLevel: "Low",
    resolutionDetails: "Information provided regarding lab hours and services.",
    feedbackRating: 4,
    conversationID: "C006",
  },
  {
    queryID: "007",
    customerPhone: "+91 65432 10987",
    contactInfo: "karens@mail.com",
    queryDate: "27/12/2022 04:20 PM",
    queryType: "Prescription Refill",
    status: "Pending",
    priorityLevel: "Medium",
    resolutionDetails: "Refill request received; processing in progress.",
    feedbackRating: null,
    conversationID: "C007",
  },
  {
    queryID: "008",
    customerPhone: "+91 54321 09876",
    contactInfo: "jamesdoe@mail.com",
    queryDate: "28/12/2022 03:00 PM",
    queryType: "Follow-up Appointment",
    status: "Resolved",
    priorityLevel: "High",
    resolutionDetails: "Follow-up appointment scheduled for 30/12/2022.",
    feedbackRating: 5,
    conversationID: "C008",
  },
  {
    queryID: "009",
    customerPhone: "+91 43210 98765",
    contactInfo: "karenmartin@mail.com",
    queryDate: "29/12/2022 10:10 AM",
    queryType: "Billing Dispute",
    status: "Pending",
    priorityLevel: "High",
    resolutionDetails:
      "Billing dispute acknowledged; investigation in progress.",
    feedbackRating: null,
    conversationID: "C009",
  },
  {
    queryID: "010",
    customerPhone: "+91 32109 87654",
    contactInfo: "alexsmith@mail.com",
    queryDate: "30/12/2022 08:00 PM",
    queryType: "Feedback",
    status: "Resolved",
    priorityLevel: "Low",
    resolutionDetails: "Feedback received and noted for future improvements.",
    feedbackRating: 4,
    conversationID: "C010",
  },
];

export const EnquiriesTable = () => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [filter, setFilter] = useState("");

  const handleSortChange = () => { 
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  const filteredData = enquiresData.filter((query) =>
    filter ? query.queryType === filter : true
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const comparison = a.queryDate.localeCompare(b.queryDate);
    return sortDirection === "asc" ? comparison : -comparison;
  });

  return (
    <div className="container mx-auto p-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customer Support Inquiries</h1>
        <div className="flex items-center">
          <IconButton onClick={handleSortChange} title="Sort">
            <SortIcon />
          </IconButton>
          <Select
            value={filter}
            onChange={handleFilterChange}
            displayEmpty
            inputProps={{ "aria-label": "Filter" }}
            className="ml-2"
          >
            <MenuItem value="">
              <em>All Queries</em>
            </MenuItem>
            <MenuItem value="Appointment">Appointment</MenuItem>
            <MenuItem value="Billing">Billing</MenuItem>
            <MenuItem value="Feedback">Feedback</MenuItem>
            <MenuItem value="Emergency">Emergency</MenuItem>
            <MenuItem value="General Inquiry">General Inquiry</MenuItem>
            <MenuItem value="Prescription Refill">Prescription Refill</MenuItem>
            <MenuItem value="Appointment Cancellation">
              Appointment Cancellation
            </MenuItem>
          </Select>
          <IconButton className="ml-2" title="Filter">
            <FilterListIcon />
          </IconButton>
        </div>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left text-gray-500">Query ID</th>
            <th className="p-4 text-left text-gray-500">Customer Phone</th>
            <th className="p-4 text-left text-gray-500">Query Date</th>
            <th className="p-4 text-left text-gray-500">Status</th>
            <th className="p-4 text-left text-gray-500">Priority Level</th>
            <th className="p-4 text-left text-gray-500">Feedback Rating</th>
            <th className="p-4 text-left text-gray-500">
              Conversation History
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((query, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4 text-gray-800">{query.queryID}</td>
              <td className="p-4 text-gray-800 whitespace-nowrap">
                {query.customerPhone}
              </td>{" "}
              <td className="p-4 text-gray-800">{query.queryDate}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    query.status === "Resolved"
                      ? "bg-green-100 text-green-800"
                      : query.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {query.status}
                </span>
              </td>
              <td className="p-4 text-gray-800">{query.priorityLevel}</td>
              <td className="p-4 text-gray-800">
                {query.feedbackRating !== null ? query.feedbackRating : "N/A"}
              </td>
              <td className="p-4">
                <button className="text-gray-500 hover:text-gray-700">
                  View Conversation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
