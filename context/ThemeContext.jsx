// 'use client'

// import { createContext, useState } from "react"

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {

//     const colorMode = [
//         {
//             light: 'bg-black text-white',
//         },
//         {
//             dark: 'bg-white text-black'
//         }
//     ]

//     const [mode, setMode] = useState(colorMode);

//     const toggle = () => {
//         setMode((prev) => (prev === dark ? light : dark));
//     };

//     return (
//         <ThemeContext.Provider value={toggle}>
//             <div className={`theme ${mode}`}>
//                 {children}
//             </div>
//         </ThemeContext.Provider>
//     )
// }