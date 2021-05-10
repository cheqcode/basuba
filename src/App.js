import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import './App.css';
import Axios from 'axios'

function App() {
  const [word, setWord]=useState("")
  const [dialect, setDialect]=useState("")
  const [meaning, setMeaning]=useState("")
  const [tlang, setTlang]=useState("")

  const handleWord=(e)=>{
   setWord(e.target.value)
   console.log(word)
  }
  const handleDialect=(e)=>{
   setDialect(e.target.value)
   console.log(dialect)
  }
  const handleMeaning=(e)=>{
   setMeaning(e.target.value)
   console.log(meaning)
  }
  const handleTlang=(e)=>{
   setTlang(e.target.value)
   console.log(tlang)
  }
  const postData=async()=>{
    await Axios.post("https://basubabackend.herokuapp.com/words",{
      word:word,
      dialect:dialect,
      meaning:meaning,
      tlang:tlang
    })
    setMeaning("");
    setDialect("");
    setTlang("");
    setWord("");
  }
  const handleSubmit=(e)=>{
    
    e.preventDefault()
    /*Axios.post("http://localhost:4000/words",{
      word:word,
      dialect:dialect,
      meaning:meaning,
      tlang:tlang
    }).then(()=>{
      alert("Success") 
    })*/
    postData()
  }
  return (
    <div className="app">
      <h1>Welcome Please</h1>
      <h6>Please help us identify and define various Basuba words</h6>
     <Form onSubmit={handleSubmit} className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Suba Word</Form.Label>
    <Form.Control type="text" placeholder="Enter the Basuba word" 
    onChange={handleWord} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Dialect</Form.Label>
    <Form.Control type="text" placeholder="Olusuba or Olusuva" 
    onChange={handleDialect}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Meaning</Form.Label>
    <Form.Control type="text" placeholder="Enter the meaning of the Basuba word" 
    onChange={handleMeaning}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Translation Language</Form.Label>
    <Form.Control type="text" placeholder="Enter the translation Language"
    onChange={handleTlang} />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
