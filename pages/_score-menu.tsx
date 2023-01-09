import React from 'react';
import styles from '../styles/_score-menu.module.css'

export default function ScoreMenu() {
    const [menuOpacity, setMenuOpacity] = React.useState(0);
    const [menuDisplay, setMenuDisplay] = React.useState("none");
    const [userData, setUserData] = React.useState<T>(null);

    const handleMenu = () => {
        if (menuOpacity === 0) {
            setMenuDisplay("block");
            setMenuOpacity(1);
        } else {
            setMenuOpacity(0)
            setTimeout(() => {
                setMenuDisplay("none")
            }, 500)
        }
    };

    const handleGetMockData = async () => {
        fetch("/api/users")
            .then((res) => {
                return res.json()
            }).then((data) => {
                setUserData(data.mocks);
        })
    }

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
                    className={styles.menuBody}
                >
                    <div>
                        <h2>User List</h2>
                        <div>
                            {userData !== null  ? userData.map((user: any, i: number) => {
                                return (
                                    <div key={`user-record-${i}`} className="user-data-div">
                                        <span>Name: {user.name}</span>
                                        <span>Joined: {user.joinDate}</span>
                                        <span>Status: {user.status}</span>
                                        <span>Assignments: {user.assignments.length}</span>
                                    </div>
                                )
                            }) : ""}
                        </div>
                    </div>
                    <button
                        onClick={() => handleGetMockData()}
                    >
                        Get Mock Data
                    </button>
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