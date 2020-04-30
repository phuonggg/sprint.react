import React, { useEffect } from "react";
import _ from "lodash";
import { getSingleObject } from "../utils/index.js";

export default function AllPhotos(photos) {
  return (
    <div>
      photos.map((photo) => (
      <img src={`data:image/jpeg;base64${photo}`} onClick={() => {}} />
      ))}
    </div>
  );
}
