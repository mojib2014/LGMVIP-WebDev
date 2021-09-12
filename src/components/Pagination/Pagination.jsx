import React from "react";
import "./pagination.css";

export default function Pagination({ getUsers }) {
  return (
    <div className="flex-container pagination">
      <button onClick={getUsers} className="btn btn-secondary">
        Next
      </button>
    </div>
  );
}
