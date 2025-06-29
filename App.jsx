import { useState } from 'react'
import Header from './componenets/header'
import './App.css'

import {Outlet} from 'react-router'
function App() {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode'))) 
    return (
        <>
        <div className={`mode ${isDark ? 'dark' : ''}`}>
            <Header/>
            <Outlet />
        </div>
        </>
    )
}

export default App
