import React, { useEffect } from "react";
import Header from "./Header";
import { useState } from "react";

const Home = () => {
    const [color, setColor] = useState('rgb(146, 26, 26)');
    const [bgColor, setBgColor] = useState('linear-gradient(135deg, #d4af37, #f3e5ab, #87ceeb)');
    const [buttonColor, setButtonColor] = useState({
        background: '#2c2c2c',
        color: '#ffffff'
    });
    const [theme, setTheme] = useState('Antiquity');

    const ChangeThemeForward = () => {
        const Home = document.querySelector('.Home');
        if (theme === 'Antiquity') {
            Home.style.backgroundImage = "url('/MA.jpg')";
            setTheme('Middle-age');
            setBgColor('linear-gradient(135deg, #8b4513, #a9a9a9, #d4af37)');
            setColor('#e7e7e7');
            setButtonColor({
                background: '#8b4513',
                color: '#ffffff'
            });
        } else if (theme === 'Middle-age') {
            Home.style.backgroundImage = "url('/REN.jpg')";
            setTheme('Renaissance');
            setBgColor('linear-gradient(135deg, #c2a280, #8b6b47, #4d2c26)');
            setColor('#ffffff');
            setButtonColor({
                background: '#4d2c26',
                color: '#ffffff'
            });
        } else if (theme === 'Renaissance') {
            Home.style.backgroundImage = "url('/LU.jpg')";
            setTheme('Enlightment');
            setBgColor('linear-gradient(135deg, #e6d8a7, #8b6b47, #4d2c26)');
            setColor('#000000');
            setButtonColor({
                background: '#4d2c26',
                color: '#ffffff'
            });
        } else if (theme === 'Enlightment') {
            Home.style.backgroundImage = "url('/RI.jpg')";
            setTheme('Industrial Revolution');
            setBgColor("linear-gradient(135deg, #2c3e50, #1f2b37, #0c1a2a)");
            setColor('#ffffff');
            setButtonColor({
                background: '#0c1a2a',
                color: '#ffffff'
            });
        } else if (theme === 'Industrial Revolution') {
            Home.style.backgroundImage = "url('/ANT.png')";
            setTheme('Antiquity');
            setBgColor('linear-gradient(135deg, #d4af37, #f3e5ab, #87ceeb)');
            setColor('#921a1a');
            setButtonColor({
                background: '#4b2e2e',
                color: '#ffffff'
            });
        }
    };

    const ChangeThemeBackward = () => {
        const Home = document.querySelector('.Home');
        if (theme === 'Middle-age') {
            Home.style.backgroundImage = "url('/ANT.png')";
            setTheme('Antiquity');
            setBgColor('linear-gradient(135deg, #d4af37, #f3e5ab, #87ceeb)');
            setColor('rgb(146, 26, 26)');
            setButtonColor({
                background: '#2c2c2c',
                color: '#ffffff'
            });
        } else if (theme === 'Renaissance') {
            Home.style.backgroundImage = "url('/MA.jpg')";
            setTheme('Middle-age');
            setBgColor('linear-gradient(135deg, #8b4513, #a9a9a9, #d4af37)');
            setColor('#e7e7e7');
            setButtonColor({
                background: '#8b4513',
                color: '#ffffff'
            });
        } else if (theme === 'Enlightment') {
            Home.style.backgroundImage = "url('/REN.jpg')";
            setTheme('Renaissance');
            setBgColor('linear-gradient(135deg, #c2a280, #8b6b47, #4d2c26)');
            setColor('#ffffff');
            setButtonColor({
                background: '#4d2c26',
                color: '#ffffff'
            });
        } else if (theme === 'Industrial Revolution') {
            Home.style.backgroundImage = "url('/LU.jpg')";
            setTheme('Enlightment');
            setBgColor('linear-gradient(135deg, #e6d8a7, #8b6b47, #4d2c26)');
            setColor('#000000');
            setButtonColor({
                background: '#4d2c26',
                color: '#ffffff'
            });
        } else if (theme === 'Antiquity') {
            Home.style.backgroundImage = "url('/RI.jpg')";
            setTheme('Industrial Revolution');
            setBgColor("linear-gradient(135deg, #2c3e50, #1f2b37, #0c1a2a)");
            setColor('#ffffff');
            setButtonColor({
                background: '#0c1a2a',
                color: '#ffffff'
            });
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                ChangeThemeForward();
            } else if (e.key === 'ArrowLeft') {
                ChangeThemeBackward();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [theme]);

    return (
        <>
            <div className="Home">
                <Header />
                <div className="center">
                    <h1 style={{ paddingTop: '40px', color: 'white', fontSize: '4rem', textAlign: 'center' }}>{theme}</h1>
                </div>
                <div className="content-container">
                    <button className="change-btn-left" value={theme} onClick={ChangeThemeBackward}><img src="/arrow.png" alt="Previous" /></button>
                    <div className="content" style={{ background: bgColor, color: color }}>
                        <h3>{theme === 'Antiquity' ? 'You want to discover the rich tapestry of ancient history and the captivating stories that accompany it? Let’s embark on a journey to the next page and delve into the wonders of Antiquity!' 
                        : theme === 'Middle-age' ? 'Ready to traverse the fascinating landscapes of the Middle Ages? Come along to the next page and immerse yourself in the tales of knights, castles, and legendary quests!':
                        theme === 'Renaissance' ? 'Curious about the rebirth of art, science, and culture? Join us on the next page to explore the marvels of the Renaissance and the stories that shaped our modern world!' :
                        theme === 'Enlightment' ? 'Excited to uncover the age of reason and enlightenment? Move to the next page to learn about the transformative ideas and events that sparked revolutions and redefined societies!' :
                        theme === 'Industrial Revolution' ? 'Intrigued by the era that revolutionized industry and technology? Click through to the next page to discover the innovations and stories of the Industrial Revolution that changed the world forever!' :
                        null}</h3>
                        <button className="discover" style={{ background: buttonColor.background, color: buttonColor.color }}>Discover</button>
                    </div>
                    <button className="change-btn-right" value={theme} onClick={ChangeThemeForward}><img src="/arrow.png" alt="Next" /></button>
                </div>
            </div>
        </>
    );
}

export default Home;