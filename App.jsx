import React, { useEffect, useState } from "react";

const apiCalls = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    const getData = async () => {
      try {
        const response = await fetch(URL);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h2>API Data</h2>
      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li> 
        ))}
      </ul>
    </div>
  );
};

export default apiCalls;
