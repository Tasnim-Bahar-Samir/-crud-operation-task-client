import React, { useEffect, useState } from "react";
import Entry from "../EntriesData/Entry";

const Home = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setEntries(data.data));
  }, []);
  console.log(entries);
  return (
    <div>
      <h1>{entries.length}</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Hobbies</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry,idx) => (
                <Entry entry={entry} index={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
