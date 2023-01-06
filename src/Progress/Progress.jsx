import { Typography } from "@mui/material";
import React from "react";
import CircularStatic from "./CircularProgressWithLabel";

export default function Progress() {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <div>
          <Typography variant="h4">
            Write better, faster, and clearer instantly
          </Typography>
          <Typography variant="h5" sx={{ m: 2 }}>
            QuillBot is trusted by students, professional writers, and business
            people who want to write more effectively.
          </Typography>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ height: "300px", width: "300px" }}>
          <CircularStatic value={75} symbol={"%"} />
          <div>
            <Typography variant="h6">
              Average time savings per writing project.
            </Typography>
          </div>
        </div>
        <div style={{ height: "300px", width: "300px" }}>
          <CircularStatic value={50} symbol={"+"} />
          <div>
            <Typography variant="h6">Trusted by millions worldwide.</Typography>
          </div>
        </div>
        <div style={{ height: "300px", width: "300px" }}>
          <CircularStatic value={85} symbol={"%"} />
          <div>
            <Typography variant="h6">
              85% of students Who reported their grades improved after using
              QuillBot.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
