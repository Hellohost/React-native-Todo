import React, { useReducer } from 'react'
import { ScreenContext } from './screenContext'
import { screendReducer } from './screenReducer'
import { CHANGE_SCREEN } from "../types"


export const ScreenState = ({ children }) => {
    const [state, dispatch] = useReducer(screendReducer, null)

    const changeScreen =  id => dispatch({type: CHANGE_SCREEN, payload: id})
    return <ScreenContext.Provider
        value={{changeScreen, 
            todoId: state}}> 
            {children}
            </ScreenContext.Provider>
}