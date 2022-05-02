import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from './features/UserSlice';


const EditUser = () => {

  const users = useSelector( (state) => (state.users.value))
  const [newUsername, setNewUsername] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const id = useParams()

  const handleUpdateUsername = (id) => {
    if(!newUsername) {
      alert('Please enter the new username to update')
    }
    
    dispatch(
      updateUser({
        id,
        userName: newUsername
      }),
      navigate('/')
    )
  }

  return (
    <div className='container' style={{ marginTop:'100px' }}>        
      <div className="form-group">
        <input type="text" className='form-control' value={newUsername} id='newUsername' placeholder='Please enter your user name' 
          onChange={(event) => setNewUsername(event.target.value)} /> <br />
        <button type="submit" className='btn btn-info' style={{marginRight: '20px'}} onClick={() => handleUpdateUsername(id)}>Update User name</button>
      </div>
    </div>
  )
}

export default EditUser