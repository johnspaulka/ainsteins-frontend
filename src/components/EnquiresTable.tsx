import { useEffect, useState } from "react";
import { IconButton, Select, MenuItem, CircularProgress } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
import formatDate from "../utils/formatDate";
import { useNavigate } from "react-router-dom";


export const EnquiriesTable = () => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [filter, setFilter] = useState("");
  const [enquiryList, setEnquiryList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnquiryList = async () => {
      try {
        setLoading(true);

        const response = await fetch(`https://ainstein-api-black-voice-1238.fly.dev/conversations`);
        if (!response.ok) {
          throw new Error('Failed to fetch enquiry details');
        }
        const data = await response.json();
        setEnquiryList(data);
      } catch (err: any) {
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiryList();

  }, []);

  const handleSortChange = () => { 
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  const handleNavigation = (id: string) => {
    navigate(`/enquiries/${id}`);
  };


  return loading ? <div className='w-full h-96 flex justify-center items-center'><CircularProgress color="success" /></div> : (
    <div className="container">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customer Support Enquiries</h1>
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
            <th className="p-4 text-left text-gray-500">Feedback Rating</th>
            <th className="p-4 text-left text-gray-500">
              Conversation History
            </th>
          </tr>
        </thead>
        <tbody>
          {enquiryList?.map((query:any, index:number) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4 text-gray-800">{enquiryList.length - index}</td>
              <td className="p-4 text-gray-800 whitespace-nowrap">
                {query.phone_number}
              </td>{" "}
              <td className="p-4 text-gray-800">{formatDate(query.created_at)}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    query.status === "RESOLVED"
                      ? "bg-green-100 text-green-800"
                      : query.status === "PENDING"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {query.status}
                </span>
              </td>
              <td className="p-4 text-gray-800 pl-14">
                {query.feedback !== null ? query.feedback : "N/A"}
              </td>
              <td className="p-4">
                <button className="text-gray-500 hover:text-gray-700" onClick={() => handleNavigation(query.id)}>
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
