import React, { useEffect, useState } from "react";
import NewEntryModal from "../../Utils/NewEntryModal";
import Entry from "../EntriesData/Entry";

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setEntries(data.data));
  }, [refresh]);
  console.log(entries);
  return (
    <div>
      <label onClick={()=>setShowModal(true)} htmlFor="NewEntryModal" className="btn btn-success">Add New Entry</label>
      <div>
        <div className="overflow-x-auto shadow-lg">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Hobbies</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry,idx) => (
                <Entry entry={entry} index={idx} />
              ))}
            </tbody>
          </table>
        </div>
        {showModal && <NewEntryModal setShowModal={setShowModal} showModal={showModal} refresh={refresh} setRefresh={setRefresh}/>}
      </div>
    </div>
  );
};

export default Home;
