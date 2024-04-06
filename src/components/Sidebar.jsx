import Form from "./Form";
import Admin from "./Admin";
import { useState } from "react";
import AdminPanel from "./AdminPanel";

function Sidebar() {
  const [activeTab, setACtiveTab] = useState("2");
  const [loggedIn, setIsLoggedIn] = useState(false);

  const toggleTab = (tabIndex) => {
    setACtiveTab(tabIndex);
  };

  return (
    <div className="w-4/12">
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <input
          type="radio"
          name="1"
          role="tab"
          className={`tab font-bold text-lg ${
            activeTab === "1" ? " tab-active text-primary" : ""
          }`}
          aria-label="Admin"
          onClick={() => {
            toggleTab("1");
          }}
        />
        <div
          role="tabpanel"
          id="1"
          className={`${
            activeTab === "1"
              ? "tab-content bg-base-100 border-base-300 rounded-box p-6"
              : "hidden"
          } `}
        >
          {loggedIn ? <AdminPanel /> : <Admin />}
        </div>

        <input
          type="radio"
          name="2"
          role="tab"
          className={`tab font-bold text-lg ${
            activeTab === "2" ? " tab-active text-primary" : ""
          }`}
          onClick={() => {
            toggleTab("2");
          }}
          aria-label="Ask a Question!"
        />
        <div
          role="tabpanel"
          id="2"
          className={`${
            activeTab === "2"
              ? "tab-content bg-base-100 border-base-300 rounded-box p-6"
              : "hidden"
          } `}
        >
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
