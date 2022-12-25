import React from 'react'

const Entry = ({entry,index}) => {
    const {name, phone,email, hobbies} = entry;
    console.log(index)
  return (
        <tr>
        <th>{index}</th>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{hobbies}</td>
      </tr>
  )
}

export default Entry