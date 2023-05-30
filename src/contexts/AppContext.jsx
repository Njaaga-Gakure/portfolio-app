import { createContext, useContext, useReducer} from "react";
const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
const CLOSE_SIDEBAR = 'CLOSE_SEIDEBAR'

const AppContext = createContext()
const initialState = {
    isSidebarOpen: false
}
const reducer = (state, action) => {
    if (action.type === OPEN_SIDEBAR) {
        return {...state, isSidebarOpen: true}
    }
    if (action.type === CLOSE_SIDEBAR) {
        return {...state , isSidebarOpen: false}
    }
}
export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR})
    }
    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR})
    }
    return (
        <AppContext.Provider value={{...state, openSidebar, closeSidebar}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)   
}
