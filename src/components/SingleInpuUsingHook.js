import React,{useState} from 'react';

const SingleInput = () => {
  const [a,x] = useState(["Hello", "World", "all","santhosh"]);
  const [b,y] = useState();
  const change = (e) => {
    y(e.target.value);
  }

  return <>
  <input id="inputv" type='text' onChange={change}/>
  <button onClick = {()=>{
     x([...a, b])
   document.getElementById("inputv").value ="";
   }}>Update</button>

  <ul>
     {a.map((el) => (
      <li>{el}</li>
    ))}
  </ul>
  </>
}

export default SingleInput;