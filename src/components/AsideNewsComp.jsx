import React from "react";
import useFetchData from "../hooks/useFetchData";
import Line from "./Line";

const AsideNewsComp = (props) => {
  const { data, isError, isLoading, error } = useFetchData(
    "business",
    "us",
    2,
    "sideNews",
    7
  );

  if (isLoading) {
    return "";
  }

  if (isError) {
    return console.log(error.message);
  }

  return (
    <div className="sideNewsComp">
      <h2>Latest</h2>
      {data.data.articles.map((val) => {
        return (
          <div className="sideNewsDiv" key={val.author}>
            <a target="_blank" href={val.url}>
              <h3>{val.title}</h3>
            </a>{" "}
            <h4>BY {val.author ? val.author : "Dev Singal"}</h4>
            <Line />
          </div>
        );
      })}
    </div>
  );
};

export default AsideNewsComp;
