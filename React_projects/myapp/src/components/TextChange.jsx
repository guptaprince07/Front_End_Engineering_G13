import {useState} from 'react'
// function Textchange(){
//     let[text,setText]=useState('Hello')

//     function changeText(){
//         setText('Hi')
//     }
//     return (
//         <div>
//         <h2>{text}</h2>
//         <button onClick={changeText}>Change Text</button>
//         </div>
//     )
// }
function Toggle(){
    let[val,setVal]=useState('Hello');
    function changeVal(){
        if(val=='Hello'){
            setVal('Hi');
        }
        else{
            setVal('Hello');
        }
    }
    return (
        <div>
            <h2>{val}</h2>
            <button onClick={changeVal}>Click to toggle</button>
        </div>
    )
}

export default Textchange