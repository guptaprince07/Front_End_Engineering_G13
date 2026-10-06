import React from 'react'

function Welcome() {
    function show(){
        document.getElementById('showMsg').innerText='Welcome to React';
    }
  return (
    <div>
      <button onClick={show}>ENTER</button>
      <h1 id='showMsg'></h1>
    </div>
  )
}

export default Welcome
