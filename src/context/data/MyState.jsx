import React from 'react'
import MyContext from "./MyContext"

const MyState = (props) => {
    const[mode,setMode] = React.useState('light');
   const toggleMode = () => {
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(17,24,39)';
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
   }

    return (

    <div>
        <MyContext.Provider value={{mode,toggleMode}}>
        {props.children}
        </MyContext.Provider>
      
    </div>
  )
}

export default MyState
