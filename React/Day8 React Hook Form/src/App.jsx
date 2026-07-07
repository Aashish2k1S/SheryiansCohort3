import { useState } from 'react'
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'
import Navbar from './components/Navbar'

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([
    // {
    //   name: "Alex Mercer",
    //   email: "alex.mercer@devmail.com",
    //   mobile: "9876543210",
    //   image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&h=400&q=80",
    //   password: "Password1!"
    // },
    // {
    //   name: "Sarah Jenkins",
    //   email: "s.jenkins@techcorp.io",
    //   mobile: "8765432109",
    //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
    //   password: "SecurePass23$"
    // },
    // {
    //   name: "David Chen",
    //   email: "dchen.builds@gmail.com",
    //   mobile: "7654321098",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    //   password: "LetMeIn456#"
    // }
  ]);

  console.log(users);



  return (
    <div className="p-4 w-screen min-h-screen bg-[#212121] text-white">
      <Navbar setToggle={setToggle} />

      {
        toggle
          ? <UserForm setUsers={setUsers} />
          : <UserCard users={users} />
      }
    </div>
  )
}

export default App