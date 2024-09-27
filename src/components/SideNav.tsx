import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoHeader } from "./LogoHeader";

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
      name: "Workflows",
      route:'/connect-to-workflows'
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabChange = (tab:any) => {
    setActiveTab(tab);
    navigate(tab.route);
  }

  return (
    <div className="bg-gray-100 h-screen shadow-inner">
      <LogoHeader />
      <div className="flex flex-col space-y-6 py-4 text-center">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabChange(tab)}
            className={`w-full px-8 py-2 text-left cursor-pointer hover:bg-slate-600 hover:text-white ${
              activeTab === tab ? "bg-gray-200 text-gray-700 font-bold" : ""
            }`}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
};
