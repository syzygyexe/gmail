import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import "./EmailRow.css";

function EmailRow({ title, subject, description, time }) {
  const history = useHistory();

  return (
    <div onClick={() => history.push("/mail")} className='emailRow'>
      <div className='emailRow-options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <div className='emailRow-title'>{title}</div>

      <div className='emailRow-message'>
        <h4>
          {subject}{" "}
          <span className='emailRow-description'>- {description}</span>
        </h4>
      </div>

      <div className='emailRow-time'>{time}</div>
    </div>
  );
}

export default EmailRow;
