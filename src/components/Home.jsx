import React, { Fragment } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "./Loader";

const apiKey = process.env.REACT_APP_API_KEY;

let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

const fetchData = () => {
  return axios.get(`${url}`);
};

const Home = () => {
  const { data, isLoading, isError, error } = useQuery("news-data", fetchData, {
    cacheTime: 10 * 60 * 1000, // cache time is 10 minutes
    refetchInterval: 10 * 60 * 1000, // refetches data in every 10 minute
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>{error.message}</h1>; // error is the error that occured while data fetching whereas isError is the state of the data that some error ocurred
  }

  const fetchedData = data.data;

  let dataOfFirstElem = fetchedData.articles[0];

  return (
    <Fragment>
      <section className="home">
        <div className="firstElm">
          <img src={dataOfFirstElem.urlToImage} alt="" />
          <a href={dataOfFirstElem.url}><h1>{dataOfFirstElem.title}</h1></a>
          <p>{dataOfFirstElem.description}</p>
          <p>By {dataOfFirstElem.author}</p>
        </div>
        <div className="news_MainContainer">
          {fetchedData.articles.map((val, index) => {
            return (
              <div key={index} className="news_ctnr">
                <img className="news_img" src={val.urlToImage} alt="" />
                <a href={val.url}>
                  <h2 className="news_heading">{val.title}</h2>
                </a>
                <p className="news_description">{val.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
