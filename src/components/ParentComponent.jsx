import React, { useState } from "react";
import BasicTable from "./BasicTable";
import Sidebar from "./Sidebar";

function ParentComponent() {
  const [rows, setRows] = useState([
    {
      name: "Dumbbells",
      trackingId: 12345,
      date: "2022-01-01",
      status: "Approved",
      imageUrl: "",
      details: "",
    },
    {
      name: "Gym Bar",
      trackingId: 67890,
      date: "2022-01-02",
      status: "Pending",
      imageUrl: "",
      details: "",
    },
  ]);

  const [updates, setUpdates] = useState([]);

  const handleUpdateOrder = (name, newData) => {
    const updatedRows = rows.map((row) => {
      if (row.name === name) {
        return { ...row, ...newData };
      }
      return row;
    });
    setRows(updatedRows);

    setUpdates([...updates, { name, newData }]);
  };

  const handleDeleteOrder = (name) => {
    setRows(rows.filter((row) => row.name !== name));
  };

  return (
    <div>
      <BasicTable
        rows={rows}
        handleUpdateOrder={handleUpdateOrder}
        handleDeleteOrder={handleDeleteOrder}
      />
      <Sidebar updates={updates} />
    </div>
  );
}

export default ParentComponent;
