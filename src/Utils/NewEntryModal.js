import React from "react";
import toast from "react-hot-toast";

const NewEntryModal = ({showModal,setShowModal,refresh,setRefresh}) => {
    const handleSave = (e)=>{
        e.preventDefault()
        const form = e.target
        const data = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            hobbies: form.hobbies.value,
        }
        console.log(data)
        fetch('https://cruds-operation-task-server.vercel.app/data',{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast.success(data.message);
                setShowModal(!showModal);
                setRefresh(!refresh)

            }else{
                toast.error(data.message)
            }
        })
    }
  return (
    <div>
      <input type="checkbox" id="NewEntryModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="NewEntryModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
            <div className="hero-content">
              <div className="card w-full border-2 bg-base-100">
                <form onSubmit={handleSave} className="card-body">
                  <div className="form-control">
                    <input
                      type="text"
                      name= 'name'
                      placeholder="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="hobbies"
                      placeholder="Hobbies"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NewEntryModal;
