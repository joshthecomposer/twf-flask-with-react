import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
      <>
        <div className="flex flex-col gap-10 items-center bg-[#83967D]">
            <h1 className="text-[7rem] font-normal">Latest Episode</h1>
              <div className="flex flex-col justify-between gap-4 bg-[#5f6149] rounded py-6 px-8 mb-5 min-h-[120px] min-w-[200px]">
            </div>
            <img className="self-start" src="./img/hill 2.svg" alt="" />
        </div>

        <div className="flex flex-col gap-10 items-center bg-[#546142]">
            <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-5 items-center text-center w-1/3">
                <hr className='border-t-1 border-white w-3/4' /> 
                <p className="text-white text-[2rem]">Join Andie, Kali and friends as they re-discover Middle-earth together by comparing the works of Tolkien to their various adaptations, starting with Peter Jackson's take on <i>Lord of the Rings</i> and <i>The Hobbit</i>.</p>
                <hr className="border-t-1 border-white w-3/4" />
                <Link to="about"><p className="text-white border border-white rounded px-5 py-1">MORE ABOUT US</p></Link>
            </div> 
        </div>

        <div className="diag"></div>

        <div className="flex flex-wrap gap-24 p-5 m-5 bg-[#83967D] justify-center">
            <div className="flex flex-col items-center p-8 w-[300px] h-[400px] shadow rounded bg-[#b7c2b3] gap-3">
                <h3 className="card-header">Merchandise</h3>
                <a rel="noreferrer" href="https://tolkien-with-friends-shop.creator-spring.com/" target="_blank">
                    <img className="thumbnail" src="./img/spring.png" alt="Merch" />
                </a>
            </div>
            <div className="flex flex-col items-center p-8 w-[300px] h-[400px] shadow rounded bg-[#b7c2b3] gap-3">
                <h3 className="card-header">Patreon</h3>
                <a rel="noreferrer" href="https://www.patreon.com/TolkienwithFriends" target="_blank">
                    <img className="thumbnail" src="./img/patreonprev.png" alt="Patreon" />
                </a>
            </div>
            <div className="flex flex-col items-center p-8 w-[300px] h-[400px] shadow rounded bg-[#b7c2b3] gap-3">
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