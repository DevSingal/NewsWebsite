import React, { Fragment } from "react";
import Loader from "./Loader";
import AsideNewsComp from "./AsideNewsComp";
import useFetchData from "../hooks/useFetchData";

const Home = () => {
  const {
    data: mainData,
    isError: mainIsError,
    isLoading: mainIsLoading,
    error: mainError,
  } = useFetchData("general", "in", 1, "mainNews");

  if (mainIsLoading) {
    return <Loader />;
  }

  if (mainIsError) {
    return console.log(mainError.message); // error is the error that occured while data fetching whereas isError is the state of the data that some error ocurred
  }

  const fetchedData = mainData.data;

  const dataOfFirstElem = fetchedData.articles[0];

  return (
    <Fragment>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <section className="home">
          <div className="firstElm">
            <img src={dataOfFirstElem.urlToImage} alt="" />
            <a target="_blank" href={dataOfFirstElem.url}>
              <h1>{dataOfFirstElem.title}</h1>
            </a>
            <p className="news_description">{dataOfFirstElem.description}</p>
            <p className="news_author">
              By{" "}
              {dataOfFirstElem.author ? dataOfFirstElem.author : "Dev Singal"}
            </p>
          </div>
          <div className="news_MainContainer">
            {fetchedData.articles.map((val, index) => {
              if (index === 0) {
                return "";
              }

              let date = new Date(val.publishedAt);
              console.log(date);
              let month;
              switch (date.getMonth()) {
                case 0:
                  month = "January";
                  break;
                case 1:
                  month = "February";
                  break;
                case 2:
                  month = "March";
                  break;
                case 3:
                  month = "April";
                  break;
                case 4:
                  month = "May";
                  break;
                case 5:
                  month = "June";
                  break;
                case 6:
                  month = "July";
                  break;
                case 7:
                  month = "August";
                  break;
                case 8:
                  month = "September";
                  break;
                case 9:
                  month = "October";
                  break;
                case 10:
                  month = "November";
                  break;
                case 11:
                  month = "December";
                  break;
              }
              let stringDate = `${month} ${date.getDate()}, ${date.getFullYear()}`;
              return (
                <div key={index} className="news_ctnr">
                  <img className="news_img" src={val.urlToImage} alt="" />
                  <a target="_blank" href={val.url}>
                    <h2 className="news_heading">{val.title}</h2>
                  </a>
                  <p className="news_description">{val.description}</p>
                  <div className="semantic_div">
                    <p className="news_author">
                      By {val.author ? val.author : "Dev Singal"}
                    </p>
                    <span>{stringDate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <AsideNewsComp />
      </div>
    </Fragment>
  );
};

export default Home;
