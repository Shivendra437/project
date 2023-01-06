import React, { useEffect, useState } from "react";
import LinearDeterminate from "../Progress/LinearProgress";
import availablewords from "./Availablewords.jpg";
import essential from "./Essential.jpg";
import identical from "./identical.jpg";
import synonym from "./Synonyms.jpg";
let interval;

export default function MainDiv() {
  const images = [
    `${availablewords}`,
    `${synonym}`,
    `${identical}`,
    `${essential}`,
  ];
  const dummyData = [
    {
      title: "Increase your productivity",
      description: "Paraphrase more text at once to finish writing faster.",
    },
    {
      title: "Access all modes",
      description: "Get maximum control over how you paraphrase.",
    },
    {
      title: "Scan for plagiarism",
      description:
        "Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.",
    },
    {
      title: "Compare all mode outputs at once",
      description: "Paraphrase in and compare outputs from all seven modes.",
    },
  ];
  const [ind, setIndex] = useState(0);

  useEffect(() => {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => {
      setIndex((ind) => (ind + 1) % images.length);
    }, 1500);
  }, [interval]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "30px",
      }}
    >
      <div style={{ height: "300px", width: "50%" }}>
        <img src={images[ind]} />
      </div>
      <div>
        {dummyData.map((el, i) => {
          return (
            <div style={{ width: "50%", textAlign: "inline-start" }} key={i}>
              <h3 style={{ color: "green" }}>{el.title}</h3>
              <p>{el.description}</p>
              <LinearDeterminate />
            </div>
          );
        })}
      </div>
    </div>
  );
}
