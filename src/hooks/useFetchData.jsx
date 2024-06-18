import axios from "axios";
import { useQuery } from "react-query";

const apiKey = "836e7351771f487aa95adcbd68539f6d";

const useFetchData = (category = "general", country = "in", page = 1, type, pageSize = 5) => {
  const fetchData = () => {
    return axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
      );
  };

  const data = useQuery(["news-data", type ], fetchData, {
    cacheTime: 10 * 60 * 1000, // cache time is 10 minutes
    refetchInterval: 10 * 60 * 1000, // refetches data in every 10 minute
  });

  return data;
};

export default useFetchData;
