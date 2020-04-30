import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar.jsx";
import AllPhotos from "./AllPhotos.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
import Upload from "./Upload.jsx";
import { listObjects } from "../utils/index.js";
import { getSingleObject } from "../utils/index.js";
import ReactDOM from "react-dom";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState("");

  async function getPhotos() {
    let list = await listObjects();
    const array = list.map(obj => {
      return getSingleObject(obj.Key);
    });
    Promise.all(array).then(item => {
      setPhotos(item);
    });
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="app">
      <AllPhotos photos={photos} />
    </div>
  );
}
