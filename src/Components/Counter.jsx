import React, { useEffect, useState } from 'react'

const Counter = (props) => {
    const handleCounter = () =>{
        const [count, setCount] = useState(0);
      const desiredNumber = props.Desired
      const incrementValue = props.Increment
    
      useEffect(() => {
        if (count < desiredNumber) {
          const timer = setTimeout(() => {
            setCount(prevCount => prevCount + incrementValue);
          }, 1000);
    
          return () => {
            clearTimeout(timer);
          };
        }
      }, [count]);
    }
  return (
    {count}
  )
}

export default Counter