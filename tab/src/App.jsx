import Tab from "./Compo/Tab"

const tabData = [
  {label: "profile",
    content: "hello this is profile"
  },
  {label: "profile1",
    content: "hello this is profile 1"
  },
  {label: "profile 2",
    content: "hello this is profile 2"
  },
  {label: "profile 3",
    content: "hello this is profile 3"
  },
  {label: "profile 4",
    content: "hello this is profile 4"
  },
]

function App() {
 
  

  return (
    <>
      <div>
        <Tab tabData={tabData} />
      </div>
    </>
  )
}

export default App