import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-10 bg-[#f7f7f7]">
                <h1 className='text-[2.2rem] font-medium md:font-normal md:text-[7rem] mt-[4rem] uppercase text-center text-[2D2D2D]'>
                    Welcome to Tolkien With Friends
                </h1>
                <h2 className="text-[1.3rem] md:text-4xl font-medium">
                    LET'S EXPLORE TOGETHER
                </h2>
                <div className="w-full md:w-1/4 flex flex-col gap-5 items-center text-center w-1/3">
                    <hr className='border-t-1 border-mines w-3/4 mt-3' />
                    <p className="text-mines font-medium text-[1.3rem] md:text-[2rem]">Join Andie, Kali and friends as they re-discover Middle-earth together by comparing the works of Tolkien to their various adaptations, starting with Peter Jackson's take on <i>Lord of the Rings</i> and <i>The Hobbit</i>.</p>
                    <hr className="border-t-1 border-mines w-3/4 mb-2" />
                    <Link to="about" className="flex items-center justify-center text-white font-medium bg-indigo-900 rounded-lg px-10 py-5 mb-[8rem]"><p>MORE ABOUT US</p></Link>
                </div>
                {/* <img className="self-start" src="./img/hill 2.svg" alt="" /> */}
            </div>
            <div className="flex flex-col gap-10 items-center py-10 bg-lime-950">
                <h1 className='text-[7rem] font-normal mt-[4rem] uppercase text-center text-white'>
                    LATEST VIDEOS
                </h1>
                <div className='flex flex-wrap gap-3 mb-'>
                    <div className="w-[100vw] h-[56.25vw] md:w-[64rem] md:h-[36rem] bg-twfg-900 rounded-lg px-5 py-5">
                        {/* <iframe className="h-full w-full rounded-xl" src="https://www.youtube.com/embed/S_0UqVlvyrU" title="Season 2 Episode 3: A Short Rest" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                    </div>
                    <div className="w-[100vw] h-[56.25vw] md:w-[64rem] md:h-[36rem] bg-twfg-900 rounded-lg px-5 py-5">
                        {/* <iframe className="h-full w-full rounded-xl" src="https://www.youtube.com/embed/tnlPYgPOeZ0" title="Season 2 Episode 3: A Short Rest" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                    </div>
                </div>
                <Link to="/episodes" className="flex items-center justify-center text-white font-medium bg-purple-900 rounded-lg px-10 py-5 mb-[8rem]"><p className="uppercase font-medium">Listen to More</p></Link>
            </div>
            <div className="diag"></div>
            <div className="flex flex-wrap gap-24 p-5 m-5 justify-center">
                <div className="flex flex-col items-center p-8 w-[300px] h-[400px] shadow rounded-lg bg-mines-100 gap-3">
                    <h3 className="card-header">Merchandise</h3>
                    <a rel="noreferrer" href="https://tolkien-with-friends-shop.creator-spring.com/" target="_blank">
                        <img className="thumbnail" src="./img/spring.png" alt="Merch" />
                    </a>
                </div>
                <div className="flex flex-col items-center p-8 w-[300px] h-[400px] rounded-lg bg-mines-100 gap-3">
                    <h3 className="card-header">Patreon</h3>
                    <a rel="noreferrer" href="https://www.patreon.com/TolkienwithFriends" target="_blank">
                        <img className="thumbnail" src="./img/patreonprev.png" alt="Patreon" />
                    </a>
                </div>
                <div className="flex flex-col items-center p-8 w-[300px] h-[400px] rounded-lg bg-mines-100 gap-3">
                    <h3 className="card-header">Discord</h3>
                    <a rel="noreferrer" href="https://discord.com/invite/PDqRa7mamJ" target="_blank">
                        <img className="thumbnail" src="./img/discord.png" alt="Discord" />
                    </a>
                </div>
            </div>
    </>
    )
}

export default Home