import { useState } from "react";

export const SubTabNav = () => {
  const [activeTab, setActiveTab] = useState("Queries");

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex space-x-6 py-4 px-8">
        {["Queries", "Administration", "Accounts"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md ${
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
