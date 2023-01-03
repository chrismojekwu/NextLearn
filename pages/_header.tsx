import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header 
              className="flex justify-center"
            >
            <Link href="/">
                <Image
                  src="/kidslearn3.png"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                  sizes="(max-width: 750px) 50vw, (max-width: 1200px) 75vw"
                />
            </Link>
            </header>
            <nav className="flex justify-center bg-blue-500 py-2 space-x-2.5">
              {["Shapes", "Things", "Animals", "Clothes"].map((x,i) => {
                return (
                    <Link href={`/${x.toLowerCase()}`}>
                        <button 
                          className="bg-white border border black rounded-md mg-5 drop-shadow-2xl px-5 md:px-10"
                          key={`nav-button-${i}`}
                        >
                          {x}
                        </button>
                    </Link>
                )
              })}
            </nav>
        </>
    )
}