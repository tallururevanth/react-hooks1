import React, { useState } from 'react';

const DoubleInput = () => {
  const [a, addA] = useState(['Revanth', 'Eswar']);
  const [b, addB] = useState([27, 25]);
  const [x, addX] = useState();
  const [y, addY] = useState();
  const changeA = (n) => {
    addX(n.target.value);
  };
  const changeB = (a) => {
    addY(a.target.value);
  };
  return (
    <>
        <lable>Name:</lable><input id="namevalue" type="text" onChange={changeA}/>
        <label>Age:</label><input id="agevalue" type="text" onChange={changeB}/><br/><br/>
        <button
          onClick={() => {
            addA([...a, x]);
            addB([...b, y]);
            document.getElementById('namevalue').value = '';
            document.getElementById('agevalue').value = '';
          }}>Update</button>
          <br/>
          <br/>

      <table border="1 px">
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {a.map((al, i) => {
          return (
            <tr>
              <td>{al}</td>
              <td>{b[i]}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default DoubleInput;
