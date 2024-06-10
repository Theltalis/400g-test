import React, { useState } from "react";

import Cisco400GLineCard from "../components/Cisco400GLineCard";

const CardSubslotting = () => {

  const [selectedComponent, setSelectedComponent] = useState("Cisco 400G LC");

  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  let componentToRender;
  if (selectedComponent === "Cisco 400G LC") {
    componentToRender = <Cisco400GLineCard />;
  }

  return (
    <>
      <header className="text-center mb-8 pt-4">
        <h1 className="text-3xl font-bold">
          <select
            value={selectedComponent}
            onChange={handleComponentChange}
            className="p-1 text-center border border-gray-400 rounded bg-gray-200"
          >
            <option value="Cisco 400G LC">Cisco 400G Line Card</option>
          </select>
        </h1>
      </header>
      <div className="mb-2">{componentToRender}</div>
    </>
  );
};

export default CardSubslotting;
