import React, { useState } from "react";

const Cisco400GLineCard = () => {
  const sfpPorts = () =>
    "w-6 h-10 flex items-center justify-center border rounded hover:bg-gray-200";

  const [portSelected, setPortSelected] = useState([]);
  const [portTypes, setPortTypes] = useState({
    0: "QSFP28",
    1: "QSFP28",
    5: "QSFP28",
    6: "QSFP28",
  });

  const isPortDisabled = (port) => {
    if (port === 10 && portSelected.some((p) => [0, 1, 2, 3, 4].includes(p))) {
      return true;
    }
    if (port === 11 && portSelected.some((p) => [5, 6, 7, 8, 9].includes(p))) {
      return true;
    }

    if (portSelected.includes(10) && [0, 1, 2, 3, 4].includes(port))
      return true;
    if (portSelected.includes(11) && [5, 6, 7, 8, 9].includes(port))
      return true;

    if (port === 0 && portTypes[0] === "QSFP28") {
      if (portSelected.includes(2)) return true;
    }
    if (port === 1 && portTypes[1] === "QSFP28") {
      if (portSelected.includes(3) || portSelected.includes(4)) return true;
    }
    if (port === 2) {
      if (portSelected.includes(0) && portTypes[0] === "QSFP28") return true;
    }
    if (port === 3 || port === 4) {
      if (portSelected.includes(1) && portTypes[1] === "QSFP28") return true;
    }
    if (port === 4) {
      if (portSelected.includes(0) && portTypes[0] === "QSFP28") return true;
    }
    if (port === 5 && portTypes[5] === "QSFP28") {
      if (portSelected.includes(7)) return true;
    }
    if (port === 6 && portTypes[6] === "QSFP28") {
      if (portSelected.includes(8) || portSelected.includes(9)) return true;
    }
    if (port === 7) {
      if (portSelected.includes(5) && portTypes[5] === "QSFP28") return true;
    }
    if (port === 8 || port === 9) {
      if (portSelected.includes(6) && portTypes[6] === "QSFP28") return true;
    }
    if (port === 9) {
      if (portSelected.includes(5) && portTypes[5] === "QSFP28") return true;
    }

    return false;
  };

  const handlePortClick = (port) => {
    if (isPortDisabled(port)) return;

    setPortSelected((prevActivePorts) =>
      prevActivePorts.includes(port)
        ? prevActivePorts.filter((p) => p !== port)
        : [...prevActivePorts, port]
    );
  };

  const clearAllPorts = () => {
    setPortSelected([]);
  };

  const handleDropdownChange = (port, type) => {
    setPortTypes((prevPortTypes) => ({
      ...prevPortTypes,
      [port]: type,
    }));
  };

  const digi0Details = [
    { id: 0, label: "Port 0: " },
    { id: 1, label: "Port 1: " },
    { id: 2, label: "Port 2: QSFP+" },
    { id: 3, label: "Port 3: QSFP+" },
    { id: 4, label: "Port 4: QSFP+" },
  ];
  const digi0Cfp2 = [{ id: 10, label: "Port 10: CFP2" }];
  const digi1Details = [
    { id: 5, label: "Port 5: " },
    { id: 6, label: "Port 6: " },
    { id: 7, label: "Port 7: QSFP+" },
    { id: 8, label: "Port 8: QSFP+" },
    { id: 9, label: "Port 9: QSFP+" },
  ];
  const digi1Cfp2 = [{ id: 11, label: "Port 11: CFP2" }];

  return (
    <>
      <div className="flex mx-auto max-w-screen-md justify-around">
        <section className="drop-shadow-sm text-center">
          <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg bg-gray-100 space-y-4">
            <div className="flex flex-row space-x-2">
              <div className="flex flex-col space-y-4">
                {[0, 1, 2, 3, 4].map((port) => (
                  <div
                    key={port}
                    className={`${sfpPorts()} ${
                      portSelected.includes(port)
                        ? "bg-green-300 cursor-pointer"
                        : isPortDisabled(port)
                        ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
                        : "cursor-pointer"
                    } border-blue-800`}
                    title={`Port ${port}`}
                    onClick={() => handlePortClick(port)}
                  >
                    {port}
                  </div>
                ))}
              </div>
              <div className="flex flex-col space-y-4">
                {[5, 6, 7, 8, 9].map((port) => (
                  <div
                    key={port}
                    className={`${sfpPorts()} ${
                      portSelected.includes(port)
                        ? "bg-green-300 cursor-pointer"
                        : isPortDisabled(port)
                        ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
                        : "cursor-pointer"
                    } border-blue-800`}
                    title={`Port ${port}`}
                    onClick={() => handlePortClick(port)}
                  >
                    {port}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              {[10, 11].map((port) => (
                <div
                  key={port}
                  className={`w-8 h-20 flex items-center justify-center border border-red-300 rounded hover:bg-gray-200 ${
                    portSelected.includes(port)
                      ? "bg-green-300 cursor-pointer"
                      : isPortDisabled(port)
                      ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
                      : "cursor-pointer"
                  }`}
                  title={`Port ${port}`}
                  onClick={() => handlePortClick(port)}
                >
                  {port}
                </div>
              ))}
            </div>
          </div>
          <button
            className="mt-2 transition text-black hover:bg-vzred hover:text-white hover:border-vzred rounded-md px-4 py-2 border border-gray-400"
            onClick={clearAllPorts}
          >
            Clear
          </button>
        </section>

        <section className="">
          <h2 className="text-2xl font-bold">Port Details</h2>
          <h3 className="text-lg font-bold my-2">DIGI #0</h3>
          <ul className="list-none space-y-2">
            {digi0Details.map((port) => (
              <li key={port.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`port-${port.id}`}
                  checked={portSelected.includes(port.id)}
                  onChange={() => handlePortClick(port.id)}
                  className={`form-checkbox h-5 w-5 accent-vzred ${
                    isPortDisabled(port.id)
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  disabled={isPortDisabled(port.id)}
                />
                <label htmlFor={`port-${port.id}`}>{port.label}</label>
                {(port.id === 0 || port.id === 1) && (
                  <select
                    value={portTypes[port.id] || "QSFP28"}
                    onChange={(e) =>
                      handleDropdownChange(port.id, e.target.value)
                    }
                    className="ml-2 p-1 border border-gray-400 rounded"
                  >
                    <option value="QSFP28">QSFP28</option>
                    <option value="QSFP+">QSFP+</option>
                  </select>
                )}
              </li>
            ))}
            {digi0Cfp2.map((port) => (
              <li key={port.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`port-${port.id}`}
                  checked={portSelected.includes(port.id)}
                  onChange={() => handlePortClick(port.id)}
                  className={`form-checkbox h-5 w-5 accent-vzred ${
                    isPortDisabled(port.id)
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  disabled={isPortDisabled(port.id)}
                />
                <label htmlFor={`port-${port.id}`}>{port.label}</label>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-bold my-2">DIGI #1</h3>
          <ul className="list-none space-y-2">
            {digi1Details.map((port) => (
              <li key={port.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`port-${port.id}`}
                  checked={portSelected.includes(port.id)}
                  onChange={() => handlePortClick(port.id)}
                  className={`form-checkbox h-5 w-5 accent-vzred ${
                    isPortDisabled(port.id)
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  disabled={isPortDisabled(port.id)}
                />
                <label htmlFor={`port-${port.id}`}>{port.label}</label>
                {(port.id === 5 || port.id === 6) && (
                  <select
                    value={portTypes[port.id] || "QSFP28"}
                    onChange={(e) =>
                      handleDropdownChange(port.id, e.target.value)
                    }
                    className="ml-2 p-1 border border-gray-400 rounded"
                  >
                    <option value="QSFP28">QSFP28</option>
                    <option value="QSFP+">QSFP+</option>
                  </select>
                )}
              </li>
            ))}
            {digi1Cfp2.map((port) => (
              <li key={port.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`port-${port.id}`}
                  checked={portSelected.includes(port.id)}
                  onChange={() => handlePortClick(port.id)}
                  className={`form-checkbox h-5 w-5 accent-vzred ${
                    isPortDisabled(port.id)
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  disabled={isPortDisabled(port.id)}
                />
                <label htmlFor={`port-${port.id}`}>{port.label}</label>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Cisco400GLineCard;
