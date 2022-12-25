import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Utils/ConfirmationModal";
import NewEntryModal from "../../Utils/NewEntryModal";
import Entry from "../EntriesData/Entry";

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [deletingData, setDeletingData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setEntries(data.data));
  }, [refresh]);

  //to close the modal
  const handleCloseModal = ()=> {
    setDeletingData(null)
  }

  const handleDeleteData = (data)=>{
    console.log(data)
    fetch(`http://localhost:5000/data/delete/${data._id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            toast.success(data.message)
            setDeletingData(null)
            setRefresh(!refresh)
        }else{
            toast.error(data.message)
        }
    })
  }
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
                <Entry entry={entry} setDeletingData={setDeletingData} index={idx} />
              ))}
            </tbody>
          </table>
        </div>
        {showModal && 
        <NewEntryModal 
        setShowModal={setShowModal} 
        showModal={showModal}
         refresh={refresh} 
         data = {deletingData}
         setRefresh={setRefresh}
         />}

        {deletingData && 
        <ConfirmationModal 
        title={'Are you sure to delete the data?'} 
        message={"If you delete once you won't be abble to get it back."}
        data = {deletingData}
        closeModal = {handleCloseModal}
        modalAction = {handleDeleteData}
        />}
      </div>
    </div>
  );
};

export default Home;
