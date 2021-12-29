import {
    useState,
    createContext
} from 'react'
const ThemeContext = createContext()
function ThemeProvider({children}){
     const [theme, setThem] = useState('dark')
     const handleClick = () => {
         setThem(theme === 'dark' ? 'light' : 'dark')
     }
     const value={
         theme, handleClick
     }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeProvider,ThemeContext}