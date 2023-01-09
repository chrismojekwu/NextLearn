import Image from 'next/image'

export default function Home() {
  return (
    <div 
      className="kl-home bg-black h-full"
    >
      <div 
        className="top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url(https://kidslearn.fun/static/media/stars.22ab9f1f0dc571d8deae.png)"
        }}
      >
        <div className="index-img-wrapper">
          <Image
            src="https://kidslearn.fun/static/media/kidslearn2.65a9beebe08dd7a8337e.png"
            alt="Main logo"
            width={450}
            height={450}
            sizes="(max-width: 750px) 50vw, (max-width: 1200px) 75vw"
          />
        </div>
      </div>
    </div>
  )
}
