import React, {useState, createContext} from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [globals, setGlobals] = useState(
        {
            score: 0,
            active: 0,
            activeGirls: [],
            allGirls: [5,4,10,24,28,50,34,40,45,46,41,44,48,8,13,16]
        }
    );
    return (
        <GlobalContext.Provider value={[globals, setGlobals]}>
            {props.children}
        </GlobalContext.Provider>
    )
}