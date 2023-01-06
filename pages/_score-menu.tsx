import React from 'react';
import styles from '../styles/_score-menu.module.css'

export default function ScoreMenu() {
    const [menuOpacity, setMenuOpacity] = React.useState(0);
    const [menuDisplay, setMenuDisplay] = React.useState("none");

    const handleMenu = () => {
        if (menuOpacity === 0) {
            setMenuDisplay("block");
            setMenuOpacity(1);
        } else {
            setMenuOpacity(0)
            setTimeout(() => {
                setMenuDisplay("none")
            }, 1000)
        }
    };

    return (
        <>
            <div 
                className={
                    `${styles.menuContainer} bg-black text-white absolute 
                    -bottom-1 right-0 z-0`
                }
                style={{
                    opacity: menuOpacity,
                    display: menuDisplay,
                    width: '50vw',
                    height: '400px'
                }}
            >
                <div 
                    className={``}
                >
                    Score
                </div>
            </div>
            <div 
                className={
                    `${styles.scoreMenu} rounded-full bg-black text-white 
                    absolute bottom-3 right-3 z-1`
                }
                onClick={() => handleMenu()}
            >
                ✎
            </div>
        </>
    )
}