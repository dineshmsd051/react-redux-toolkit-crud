import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { addUser, deleteUser } from './features/UserSlice';


function App() {
  const users = useSelector(state => state.users.value)
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [age, setAge] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log('users', users)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!name || !userName || !age) {
      alert('All fields are mandatory!')
      return
    }
      dispatch(
        addUser({
          id: users[users.length - 1].id + 1,
          name: name,
          username: userName,
          age: age
        })
      )
      setName('')
      setUserName('')
      setAge('')
  }

  const handleDeleteUser = (id) => {
    dispatch( deleteUser({ id: id }) )
  }

  return (
    <div className="App">

      <form className='container' style={{fontSize: '20px', marginTop: '20px'}}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className='form-control' value={name} id='name' placeholder='Please enter your name' 
            onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input type="text" value={userName} className='form-control' id='userName' placeholder='Please enter your user name' 
            onChange={(event) => setUserName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="text" value={age} className='form-control' id='age' placeholder='Please enter your age' 
            onChange={(event) => setAge(event.target.value)} />
        </div>
      <input type="submit" className='btn btn-primary' onClick={handleSubmit} />
      </form>
      <hr />
    {users.map((user) => {
      return <div key={user.id} className='container text-center' style={{border: '1px solid black', marginBlock: '10px', marginInline: 'auto'}}>
        <h2>Name: {user.name}</h2>
        <h4>User Name: {user.username}</h4>
        <h5>Age: {user.age}</h5>
        <br />  
        <button type="submit" className='btn btn-info' onClick={() => navigate(`/update/${user.id}`)} style={{marginRight: '20px'}}>Update</button>
        <button type='submit' className='btn btn-danger' onClick={() => handleDeleteUser(user.id)}>Delete User</button> <br /><br />
      </div>
    })}
    </div>
  );
}

export default App;
