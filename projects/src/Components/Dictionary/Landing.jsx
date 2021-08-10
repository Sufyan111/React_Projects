import React, { useState } from "react";
import { Search } from "./Search";
import { MeaningList } from "./MeaningList";
import { Pronunciation } from "./Pronunciation";
import axios from "axios";
import "./Dictionary.css";

export const Landing = () => {
  const [resData, setResData] = useState([]);
  const [wordSearch, setWordSearch] = useState("");
  const handleSearch = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordSearch}`)
      .then((res) => {
        console.log(res.data);
        setResData([...res.data]);
      });
  };
  return (
    <div>
      <Search handleSearch={handleSearch} setWordSearch={setWordSearch} />
      <Pronunciation />
      {resData.map(
        (item) => item.meanings.length > 0 && <MeaningList item={item} />
      )}
    </div>
  );
};
