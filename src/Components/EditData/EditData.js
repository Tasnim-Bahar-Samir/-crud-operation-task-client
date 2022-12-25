import React from 'react'
import toast from 'react-hot-toast'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'

const EditData = () => {
    const navigate = useNavigate()
    const {data} = useLoaderData()
    const handleUpdate = (e)=>{
        e.preventDefault()
        const form = e.target;
        const EditedData = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            hobbies: form.hobbies.value,
        }

        fetch(`https://cruds-operation-task-server.vercel.app/data/update/${data._id}`,{
            method:"PATCH",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(EditedData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast.success(data.message)
                navigate('/')
            }else{
                toast.error(data.message)
            }
        })
    }
  return (
    <div className='mt-20 md:w-[500px] mx-auto'>
        <Link to='/' className='btn btn-success my-4'>Back</Link>
        <div className="card  border-2 bg-base-100">
        
                <form onSubmit={handleUpdate} className="card-body">
                  <div className="form-control">
                    <input
                      type="text"
                      name= 'name'
                      placeholder="Name"
                      className="input input-bordered"
                      defaultValue={data.name}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      className="input input-bordered"
                      defaultValue={data.phone}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                      defaultValue={data.email}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="hobbies"
                      placeholder="Hobbies"
                      className="input input-bordered"
                      defaultValue={data.hobbies}
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Changes</button>
                  </div>
                </form>
              </div>
    </div>
  )
}

export default EditData