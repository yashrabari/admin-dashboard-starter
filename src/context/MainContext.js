import React, {
    useEffect,
    useState,
} from 'react'
import {
    CheckServer
} from '../api/index'


//create context
export const MainContext = React.createContext();



export const MainContextProvider = (props) => {

    //create state
    const [state, setState] = useState({
        isLoggedIn: false,
        user: {},
        isLoading: true,
    });


    useEffect(() => {
        //check if backend server is active or not
        try {
            CheckServer().then(response => {
                if (response.data.status === 'success') {
                    setState({
                        ...state,
                        isLoading: false,
                    });
                }
            }).catch(error => {
                console.log(error);
            });

        } catch (error) {
            console.log(error);
        }
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
            isLoading: state.isLoading
        }}>
            {props.children}
        </MainContext.Provider>
    )
}