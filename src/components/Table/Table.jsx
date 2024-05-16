import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import { v4 as uuidv4 } from "uuid";
import dumbbellImage from "../assets/dumbbell.png";
import barImage from "../assets/bar.png";
import "./Table.css";

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

const descriptions = {
  Dumbbells:
    "A dumbbell is a versatile piece of fitness equipment consisting of a short bar with weights attached at each end. These weights can be adjusted to vary the resistance for different exercises. Dumbbells come in various shapes, sizes, and materials, ranging from traditional iron or steel to more modern designs featuring rubber-coated ends for better grip and protection. They are commonly used for strength training and muscle building, offering a wide range of exercises targeting different muscle groups.",
  "Gym Bar":
    "On the other hand, a gym bar, often referred to as a barbell, is a long, straight bar typically used for heavy lifting exercises such as squats, deadlifts, and bench presses. It usually has weights attached at both ends, known as weight plates, which can be customized to adjust the overall resistance. Gym bars come in different lengths and thicknesses, catering to various lifting preferences and body sizes. They are a staple in weightlifting and powerlifting routines, providing stability and balance during compound exercises that engage multiple muscle groups simultaneously.",
};

const BasicTable = ({ handleUpdateOrder, handleDeleteOrder }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [productName, setProductName] = useState("");
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [error, setError] = useState("");

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = [
          {
            id: uuidv4(),
            name: "Dumbbells",
            trackingId: 12345,
            date: "2024-05-26",
            status: "Approved",
            imageUrl: dumbbellImage,
          },
          {
            id: uuidv4(),
            name: "Gym Bar",
            trackingId: 67890,
            date: "2024-05-25",
            status: "Pending",
            imageUrl: barImage,
          },
        ];
        setRows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleRowClick = (name, imageUrl) => {
    setSelectedRow(name);
    setImageUrl(imageUrl);
    setNewImageUrl("");
    setDescription(descriptions[name]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFile(null);
    setNewImageUrl("");
    setDescription("");
    setProductName("");
    setCreatingOrder(false);
    setError("");
  };

  const handleUpdate = () => {
    console.log("Inside handleUpdate");
    console.log("file:", file);
    console.log("newImageUrl:", newImageUrl);

    if (file) {
      const updatedRows = rows.map((row) => {
        if (row.name === selectedRow) {
          return {
            ...row,
            imageUrl: newImageUrl || imageUrl,
            description: description,
            name: productName || row.name,
          };
        }
        return row;
      });
      setRows(updatedRows);
      console.log("Image updated:", newImageUrl || imageUrl);
      setRows(updatedRows);
      setSelectedRow(true);
      setModalOpen(false);
    } else {
      console.log("file selected");
    }
  };

  const handleDelete = () => {
    if (selectedRow) {
      const updatedRows = rows.filter((row) => row.name !== selectedRow);
      console.log("Deleted:", selectedRow);
      setRows(updatedRows);
      setSelectedRow(null);
      handleCloseModal();
    }
  };

  const handleCreateOrder = () => {
    setCreatingOrder(true);
    setModalOpen(true);
  };

  const handleConfirmCreateOrder = () => {
    if (!productName) {
      setError("Product name is required.");
      return;
    }

    if (!file || !newImageUrl) {
      setError("Please upload an image.");
      return;
    }

    const newOrder = {
      id: uuidv4(),
      name: productName,
      trackingId: 323,
      date: new Date().toISOString().slice(0, 10),
      status: "Pending",
      imageUrl: newImageUrl || "",
    };

    console.log("New Order:", newOrder);

    setRows([...rows, newOrder]);

    handleCloseModal();
  };

  return (
    <div className="Table">
      <h3>Recent Gym Orders</h3>
      <button
        onClick={handleCreateOrder}
        disabled={creatingOrder}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Create Order
      </button>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          maxHeight: "400px",
          overflowY: "scroll",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                  backgroundColor:
                    selectedRow === row.name ? "lightgray" : "inherit",
                }}
                onClick={() => handleRowClick(row.name, row.imageUrl)}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div className="Modal" style={{ textAlign: "left" }}>
          {creatingOrder ? (
            <>
              <h3>Create New Order</h3>
              <input
                type="text"
                value={productName}
                placeholder="Product Name"
                onChange={(e) => setProductName(e.target.value)}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    setNewImageUrl(e.target.result);
                    setFile(selectedFile);
                  };
                  reader.readAsDataURL(selectedFile);
                }}
              />
              <button onClick={handleConfirmCreateOrder}>Confirm</button>
              <button onClick={handleCloseModal}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{selectedRow}</h3>
              <img
                src={newImageUrl || imageUrl}
                alt={selectedRow}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  margin: "auto",
                  display: "block",
                  border: "none",
                }}
              />
              <p
                style={{
                  color: "black",
                  fontSize: 20,
                  maxWidth: "80%",
                  margin: "0 auto",
                }}
              >
                {description}
              </p>
              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default BasicTable;
