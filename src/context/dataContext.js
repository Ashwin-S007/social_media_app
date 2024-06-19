import { createContext, useState, useEffect, Children } from "react";

const dataContext = createContext({})

export const DataProvider = () => {
    
    return (
        <dataContext.Provider value={{

        }}>
            {Children}
        </dataContext.Provider>
    )
}
export default dataContext