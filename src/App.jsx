import React ,{useState} from "react"
function App() {
 
  const [country,setCountry]=useState("Ethiopia")
  
  function handleCountryChange(event){
    setCountry(event.target.value)
  }

  return(
    <div>
      <p className="label">Country:{country}</p>
      <input className="input" type="text" value={country} onChange={handleCountryChange} />
    </div>
  )
}

export default App
