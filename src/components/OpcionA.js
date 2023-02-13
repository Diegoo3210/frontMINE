import React, { useState, useEffect } from "react";

function OpcionA() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/getRequest/A')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default OpcionA;