import React from "react";
import Linkedin from "../../icons/Linkedin";
import Facebook from "../../icons/Facebook";
import Twitter from "../../icons/Twitter";
import Errorboundary from "../Errorboundary";
import "./card.css";

export default function Card({ user }) {
  return (
    <Errorboundary>
      {user && (
        <div className="card">
          <img src={user.avatar} alt={user.last_name} />
          <div className="card-body">
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <a href={`mailto:${user.email}`}>{user.email}</a>
            <div className="card-socials">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      )}
    </Errorboundary>
  );
}
