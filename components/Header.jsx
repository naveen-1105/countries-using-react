import React, { useState } from 'react'

function Header() {
    const [isDark, setIsDark] = useState(false)
    return (
        <div className="headerContainer">
        <header className="header">
            <h2><a href="/">where in the world?</a></h2>
            <p className="theme" onClick={() => {
                document.querySelector('.mode').classList.toggle('dark')
                setIsDark(!isDark)
                localStorage.setItem('isDarkMode', !isDark)
            }}>
                <i className={`fa-regular fa-${isDark ? 'sun' : 'moon' }`}/>
                    {isDark ? 'Light' : 'Dark'} Mode</p>
        </header>
    </div>
    )
}

export default Header
