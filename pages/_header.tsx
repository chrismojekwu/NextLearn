import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Header() {
    return (
        <>
        <header 
          className="kl-header flex justify-center"
        >
          <div className='kl-header-img'>
            <Link href="/">
                <Image
                  src="/kidslearn3.png"
                  alt="Header image"
                  width={250}
                  height={250}
                  sizes="(max-width: 750px) 50vw, (max-width: 1200px) 75vw"
                />
            </Link>
          </div>
          </header>
          <nav className="kl-nav flex justify-center bg-blue-500  h-100 space-x-1.5">
            {["Shapes", "Things", "Animals", "Clothes"].map((x,i) => {
              return (
                  <Fragment key={`nav-button-${i}-link`}>
                    <Link href={`/${x.toLowerCase()}`}>
                        <button 
                          className="kl-nav-btn bg-white border border black rounded-md mg-5 mt-5 drop-shadow-2xl px-2 md:px-10"
                        >
                          {x}
                        </button>
                    </Link>
                  </Fragment>
              )
            })}
          </nav>
          </>
    )
}