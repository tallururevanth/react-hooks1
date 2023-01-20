import React, { useState } from 'react';

const SingleInput = () => {
  const [a, x] = useState(['Hello', 'World', 'all', 'santhosh']);
  const [b, y] = useState();
  const change = (e) => {
    y(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('refresh prevented');
  };

  return (
    <>
      <form id="form1" action="" onSubmit={handleSubmit}>
        {/* <label>Text:</label> */}
        <input id="inputv" type="text" placeholder="text" onChange={change} />
        <button
          type="submit"
          onClick={() => {
            if (document.forms['form1']['inputv'].value == '') {
              alert("Please fill the 'Text' requireed.");
            } else {
              x([...a, b]);
            }
            document.getElementById('inputv').value = '';
          }}
        >
          Update
        </button>
      </form>

      <ul>
        {a.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default SingleInput;
