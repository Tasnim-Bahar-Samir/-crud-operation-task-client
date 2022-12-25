import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'

const Entry = ({entry,index}) => {
    const {name, phone,email, hobbies} = entry;
    console.log(index)
  return (
        <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{hobbies}</td>
        <td className='flex gap-2 items-center'><FaEdit className='cursor-pointer'/><FaTrash className='text-red-600 cursor-pointer'/></td>
      </tr>
  )
}

export default Entry