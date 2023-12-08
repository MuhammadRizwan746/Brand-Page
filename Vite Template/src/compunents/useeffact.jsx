import React, { UseEffect } from 'react'
    
const Useeffact = () => {
    const [seconds, setSeconds] = useState(0);
      
        useEffect (()=>{document.title= `Chats(${seconds} )`
        });
         console.log('hello outside')
  return (
    <div>
       <h1>{seconds}</h1>
      <button onClick={()=> setSeconds(seconds+1)}>ClickMe</button>
    </div>
  )
}

export default Useeffact;
