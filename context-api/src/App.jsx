import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>React component context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
