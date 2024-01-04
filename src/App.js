import React,{useState, useEffect} from "react"

import {Container, Row, Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import MyCard from "./MyCard";


import Axios from "axios";


function App() {
  const[details, setDetails]=useState({}) //so whatever data that you request and when you get it, it has to be stored somewhere which is in a state. And the data will be in JSOn format of which the default type would be object type and that;s why the curly braces as default state

//axios requests are all asynchronous and thats why async and await keywords are used
const fetchDetails=async ()=>{
  const {data}= await Axios.get('https://randomuser.me/api/') //the get method can take 2 arguments, one is the string url value and the second is an object which you usually pass in an header, HTTp token etc
  console.log("RESPONSE:",data)

   details=  data.results[0]
   setDetails(details)
}
//this useeffect fires first upon rendering/before the application loads, invoking fetchDetails method
useEffect(()=>{
  fetchDetails()
},[])
  return (
    <Container fluid className="pr-5 bg-primary App">  
    <Row>
      <Col md={6} className="offset-md-3 mt-4">
        <MyCard details={details}/>
      </Col>
    </Row>
   </Container>
  )
}

export default App;
