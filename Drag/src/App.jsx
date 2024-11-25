import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Drag from './Components/Drag'


const initialData = {
  TOdo : [
    "Design UI mockups",
    "study DSA",
    "Prepare for endsems",
    "Learn something",
  ],
  "In Progress": ["Develop authentication flow", "Implement responsive design"],
  Completed: [
    "Set up CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging",
  ],
  };
  
 
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Drag initialState={initialData} />
    </>
  )
}

export default App
