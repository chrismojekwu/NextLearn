import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const paths = [
        {
            src: "https://kidslearn.fun/static/media/email.85c85d02d90f42784363.png",
            name: "Email",
            path: "mailto:kidslearndotfun@gmail.com"
        },
        {
            src: "https://kidslearn.fun/static/media/github.c754f90f6c447fe44983.png",
            name: "Github",
            path: "https://github.com/chrismojekwu"
        } 
    ];
    return (
        <footer className="kl-footer bg-rose-800 text-white absolute -bottom-1 w-full min-h-100 p-10 flex justify-center">
            <div className="content flex-column">
                <div className="flex justify-center gap-2">
                    {paths.map((x,i) => {
                        return (
                            <Link href={x.path} key={`footer-icon-${i}`}>
                                <Image 
                                    src={x.src} 
                                    alt={`${x.name} Icon`}
                                    key={`icon-img-${i}`}
                                    width={25}
                                    height={25}
                                    className="hover: transition-all text-black"
                                />
                            </Link>
                        )
                    })}
                </div>
                <div className="text-center text-xs"> 
                    <p>
                        Privacy Policy
                    </p>
                    <p>
                    Icons provided by Flaticon.com, Freepik.com, & Flaticon users: small like art, item2101, pixel perfect.
                    </p>
                </div>
            </div>
        </footer>
    )
}