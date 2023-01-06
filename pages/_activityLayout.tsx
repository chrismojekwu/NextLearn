import { MutableRefObject, useEffect, useRef, useState } from 'react'
import styles from '../styles/_activityLayout.module.css'

export default function ActivityLayout(props: any) {
    const containerRef = useRef<RefObject<HTMLDivElement>>(null);
    const [height1, setHeight1] = useState<number>(200);
    const [height2, setHeight2] = useState<number>(200);

    useEffect(() => {
        setHeight1(containerRef?.current?.clientHeight / 100 * 70);
        setHeight2(containerRef?.current?.clientHeight / 100 * 70);
    }, [containerRef])
    

    return (
        <section 
            className={`${styles.klActivitylayout} bg-emerald-200`}
            ref={containerRef}
        >
            <div 
                className={`${styles.activityDisplay} bg-emerald-200`}
                style={{
                    height: `${height1}px`
                }}
            >
                {props.title}
            </div>
            <div 
                className={`${styles.activityControls} bg-emerald-400`}
                style={{
                    height: `${height2}px`
                }}
            >
                Control
            </div>
        </section>
    )
}