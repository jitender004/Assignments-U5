import React, { useEffect, useState } from "react";

const ShowDbData = () => {
  const [name, showName] = useState([]);

  useEffect(() => {
    getdata()
  }, []);

  async function getdata(){
    fetch("http://localhost:8080/users")
    .then((d) => d.json());
 
      showName(name);
  }
  return (
    <div>
      {name.map((name) => (
        <div>{name.id} {name.title}</div>
      ))}
    </div>
  );
};

export default ShowDbData;
