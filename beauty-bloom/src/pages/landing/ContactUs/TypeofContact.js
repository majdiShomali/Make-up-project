import React from "react";
import { Link } from "react-router-dom";
import "./typeof.css";
import Icon from "@mdi/react";
import { mdiMapMarker } from "@mdi/js";
import { mdiHours24 } from "@mdi/js";
import { mdiEmailFastOutline } from "@mdi/js";

const TypeofContact = () => {
  return (
    <div className="TypeofContact">
      <div className="container">
        <div className=" cardd">
          <div className="icon">
            <Icon path={mdiMapMarker} size={2} />
          </div>
          <div className="text">
            <h3>OFFICE ADDRESS</h3>
            <p>380 St Khalda Road, Amman 3004, Jordan</p>
          </div>
        </div>
        <div className="cardd">
          <div className="icon">
            <Icon path={mdiHours24} size={2} />
          </div>
          <div className="text">
            <h3>WORKING HOURS</h3>
            <p>Monday to Friday 09:00 to 18:30 Saturday 15:30</p>
          </div>
        </div>
        <div className="cardd">
          <div className="icon">
            <Icon path={mdiEmailFastOutline} size={2} />
          </div>
          <div className="text">
            <h3>MESSAGE US:</h3>
            <p>
              E-mail :{" "}
              <Link to="support@example.com" target="_blank">
                support@example.com
              </Link>
            </p>
            <p>
              E-mail :{" "}
              <Link to="info@example.com" target="_blank">
                info@example.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeofContact;
