import React from 'react'



//create context
export const MainContext = React.createContext();



export const MainContextProvider = (props) => {

    const [name, setName] = React.useState("Yash Rabari");




    return (
        <MainContext.Provider value={{
            name, setName
        }}>
            {props.children}
        </MainContext.Provider>
    )
}