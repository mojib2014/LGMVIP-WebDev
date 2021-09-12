import React from "react";
import loadingIcon from "../../icons/loading.gif";
import "./loading.css";

export default function Loading() {
  return (
    <div className="flex-container loading center">
      <img src={loadingIcon} alt="Loading Indicator" />
    </div>
  );
}
