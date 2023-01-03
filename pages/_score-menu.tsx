import React from 'react';
import styles from '../styles/_score-menu.module.css'

export default function ScoreMenu() {
    const [menuOpacity, setMenuOpacity] = React.useState(0);

    const handleMenu = () => {
        if (menuOpacity === 0) {
            setMenuOpacity(1);
        } else {
            setMenuOpacity(0)
        }
    };

    return (
        <>
            <div 
                className={
                    `${styles.menuContainer} bg-black text-white absolute 
                    bottom-0 right-0 z-0`
                }
                style={{
                    opacity: menuOpacity,
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
                    absolute bottom-0 right-0 z-1`
                }
                onClick={() => handleMenu()}
            >
                ✎
            </div>
        </>
    )
}