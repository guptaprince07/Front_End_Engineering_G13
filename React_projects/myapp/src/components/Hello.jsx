import React, { useState } from 'react';

function GreetingButton() {
  const [text, setText] = useState('hello');

  return (
    <button onClick={() => setText('hii')}>
      {text}
    </button>
  );
}

export default GreetingButton;