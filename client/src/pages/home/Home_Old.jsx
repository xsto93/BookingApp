import React, {useEffect, useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./home.css";
import {Users} from './data.js';
import Table from './Table';

const Home_Old = (props) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

    useEffect(() => {
        setData(Users);
        if (query.length === 0 || query.length > 2) setData(search(Users));
    }, [query]);


  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={data} />}
    </div>
  );
};

export default Home_Old;