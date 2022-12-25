import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Utils/ConfirmationModal";
import Loader from "../../Utils/Loader";
import NewEntryModal from "../../Utils/NewEntryModal";
import Entry from "../EntriesData/Entry";

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [deletingData, setDeletingData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://cruds-operation-task-server.vercel.app/data")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data.data)
        setLoading(false)
      });
  }, [refresh]);

  //to close the modal
  const handleCloseModal = ()=> {
    setDeletingData(null)
  }

  //to delete data
  const handleDeleteData = (data)=>{
    console.log(data)
    fetch(`https://cruds-operation-task-server.vercel.app/data/delete/${data._id}`,{
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
  if(loading){
    return <div className="flex items-center justify-center h-screen">
        <Loader/>
    </div>
  }
  return (
    <div className="md:m-10 md:p-10 p-3 border-2 rounded-md"> 
    <h1 className="text-center font-bold text-3xl my-4"> Table Data</h1>
      <label onClick={()=>setShowModal(true)} htmlFor="NewEntryModal" className="btn btn-success my-4">Add New Entry</label>
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
                <Entry key={entry._id} entry={entry} setDeletingData={setDeletingData} index={idx} />
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
