import React from 'react'

function Welcome() {
    function show(){
      
         let val1 = document.getElementById('num1').value;
        let val2 = document.getElementById('num2').value;
       
        let sum = Number(val1) + Number(val2);
        document.getElementById('showMsg').innerText = `Result: ${sum}`
    }

    
  return (
    <div>
        Enter Number1 : <input type ='number' id = 'num1'/>
        Enter Number2 : <input type='number' id = 'num2'/>
        <button onClick={show}>E N T E R</button>
        <h1 id = 'showMsg'></h1>
      
    </div>
  )
}

export default Welcome