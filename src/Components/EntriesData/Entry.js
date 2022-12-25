import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Entry = ({entry,index}) => {
    const {_id,name, phone,email, hobbies} = entry;
    console.log(index)
  return (
        <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{hobbies}</td>
        <td className='flex gap-2 items-center'><Link to={`/data/edit/${_id}`}><FaEdit className='cursor-pointer'/></Link><FaTrash className='text-red-600 cursor-pointer'/></td>
      </tr>
  )
}

export default Entry