import React from 'react'



//create context
export const MainContext = React.createContext();



export const MainContextProvider = (props) => {

    //create state
    const [state, setState] = React.useState({
        isLoggedIn: false,
        user: {},
        isLoading: false,
    });


    useEffect(() => {

    }, []);



    useEffect(() => {
        //check if user is logged in
        if (localStorage.getItem('user')) {
            setState({
                ...state,
                isLoggedIn: true,
                user: JSON.parse(localStorage.getItem('user')),
            });
        }
    }, []);



    return (
        <MainContext.Provider value={{

        }}>
            {props.children}
        </MainContext.Provider>
    )
}