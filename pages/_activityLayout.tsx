import { useEffect, useRef, useState } from 'react'
import styles from '../styles/_activityLayout.module.css'

export default function ActivityLayout(props: any) {
    const containerRef = useRef<RefObject<HTMLDivElement>>(null);
    const [height1, setHeight1] = useState<number>(200);

    useEffect(() => {
        setHeight1(containerRef?.current?.clientHeight);
    }, [containerRef])
    

    return (
        <section 
            className={`${styles.klActivitylayout} bg-emerald-200`}
            ref={containerRef}
        >
            <div 
                className={`${styles.activityDisplay} bg-emerald-200`}
            >
                {props.title}
                <div 
                    className={`${styles.activityControls} bg-emerald-400`}
                >
                    Control
                </div>
            </div>
        </section>
    )
}