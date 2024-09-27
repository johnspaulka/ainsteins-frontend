import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SideNavbar = () => {
   const navigate = useNavigate();

  const tabs = [
    {
      id: 1,
      name: "Enquiries",
      route:'/enquiries'
    },
    {
      id: 2,
      name: "Connect to Workflows",
      route:'/connect-to-workflows'
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabChange = (tab:any) => {
    setActiveTab(tab);
    navigate(tab.route);
  }

  return (
    <div className="bg-gray-100 h-screen w-64 fixed left-0 top-0">
      <div className="flex flex-col space-y-6 py-4 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab)}
            className={`w-full text-left px-4 py-2 rounded-md ${
              activeTab === tab ? "bg-green-200 text-green-800 font-bold" : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};
