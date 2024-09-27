import { useState } from "react";

export const SideNavbar = () => {
  const [activeTab, setActiveTab] = useState("Queries");

  return (
    <div className="bg-gray-100 h-screen w-64 fixed left-0 top-0">
      <div className="flex flex-col space-y-6 py-4 px-6">
        {["Queries", "Administration", "Accounts"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-left px-4 py-2 rounded-md ${
              activeTab === tab ? "bg-green-200 text-green-800 font-bold" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
