import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col p-16 flex-1 h-full justify-between'>
      <div className='mb-16'>
        <h1 className='text-2xl font-bold uppercase text-black flex flex-col justify-center items-start mb-4'>
          <span className='mb-4'>Introduction to</span> <span className='text-teal-500 text-6xl'>GSAP</span>
        </h1>
        <p>
          GSAP, the GreenSock Animation Platform, is a dynamic JavaScript library designed to redefine web animation. Going beyond the limitations of traditional CSS animations, GSAP offers developers a powerful set of tools for crafting captivating, cross-browser compatible animations. With a reputation for high performance, GSAP enables the creation of seamless and intricate animations, providing fine-grained control over every aspect of the design. Its rich toolbox includes tweens, timelines, and various easing functions, empowering developers to bring their creative visions to life with precision.
          <br />
          <br />
          What sets GSAP apart is not just its feature-rich core but also its vibrant ecosystem of plugins that extends its functionality. From physics-based animations to scroll-driven effects, GSAP's community-driven extensions open new avenues for creativity. Supported by an active community, GSAP is a gateway for developers, offering a blend of control, performance, and a collaborative environment. This introduction invites both seasoned developers and newcomers to embark on an animation adventure, exploring GSAP's capabilities in crafting dynamic and immersive web experiences.
        </p>
      </div>
      <Link href={`/page1`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </Link>
    </main>
  )
}
