import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
const [books,setBooks]=useState([{}])
  useEffect(()=>{

  setInterval(()=>fetch('/api/books')  // form server.js file
  .then(resp=>resp.json())
  .then(res=>{
  setBooks(res)
  }),2000)
  },[])


  const addBook=()=>{
    const title=prompt("enter title")
    const author=prompt("enter author")
    fetch("/api/add",{
      method:"POST",
      body:JSON.stringify({title,author})
    })
      .then(resp=>resp.json())
      .then(res=>console.log("res",res))


  }

  if(!books.length){
    return <h3>Loading....</h3>
  }
  return (
    <div >
      <h1>Book Lists</h1>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>

      {
        books.map((item,index)=>{
          return(
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.author}</td>
            </tr>
          )
        })
      }
      </tbody>
      </table>
      <button onClick={addBook}>add book</button>
    </div>
  );
}

export default App;
