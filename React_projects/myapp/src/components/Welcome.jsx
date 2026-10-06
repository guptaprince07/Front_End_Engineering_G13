import React from 'react'

function Welcome() {
    // function show(){
    //     // document.getElementById('showMsg').innerText='Welcome to React';
    // }
    function show(uname){
        // document.getElementById('showMsg').innerText='Welcome to React';
        document.getElementById('showMsg').innerText=`Welcome ${uname}!`;
    }
  return (
    <div>
      {/* <button onClick={show}>ENTER</button> */}
      <button onClick={()=>show('Krishna')}>ENTER</button>
      <h1 id='showMsg'></h1>
    </div>
  )
}

export default Welcome
