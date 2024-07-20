import React from "react";
import Header from "./Header";
import { useState } from "react";

const Home = ()=>{

    const [theme, setTheme] = useState('Antiquity')
    const ChangeThemeForward = ()=>{
        const Home = document.querySelector('.Home')
        if(theme === 'Antiquity'){
            Home.style.backgroundImage = "url('/MA.jpg')"
            setTheme('Middle-age')
        }
        else if(theme === 'Middle-age'){
            Home.style.backgroundImage = "url('/REN.jpg')"
            setTheme('Renaissance')
        }
        else if(theme === 'Renaissance'){
            Home.style.backgroundImage = "url('/LU.jpg')"
            setTheme('Enlightment')
        }
        else if(theme === 'Enlightment'){
            Home.style.backgroundImage = "url('/RI.jpg')"
            setTheme('Industrial Revolution')
        }
    }

    const ChangeThemeBackward = ()=>{
        const Home = document.querySelector('.Home')
        if(theme === 'Middle-age'){
            Home.style.backgroundImage = "url('/AN.jpg')"
            setTheme('Antiquity')
        }
        else if(theme === 'Renaissance'){
            Home.style.backgroundImage = "url('/MA.jpg')"
            setTheme('Middle-age')
        }
        else if(theme === 'Enlightment'){
            Home.style.backgroundImage = "url('/REN.jpg')"
            setTheme('Renaissance')
        }
        else if(theme === 'Industrial Revolution'){
            Home.style.backgroundImage = "url('/LU.jpg')"
            setTheme('Enlightment')
        }
    }

    return(
        <>
        <div className="Home">
            <Header/>
            <div className="content">
                <button className="change-btn-left" value={theme} onClick={ChangeThemeBackward}><img src="/arrow.png"/></button>
                <button className="explore-btn">{theme}</button>
                <button className="change-btn-right" value={theme} onClick={ChangeThemeForward}><img src="/arrow.png"/></button>
            </div>
        </div>
        </>
    )
}

export default Home