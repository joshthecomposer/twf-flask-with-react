import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
      <>
        <div className="flex flex-col gap-10 items-center bg-">
            <h1 className='text-[5rem] md:text-[7rem] font-normal mt-[4rem] uppercase text-center text-mines'>Latest Episode</h1>
              <div className="flex flex-col justify-between gap-4 bg-mines-950 rounded py-6 px-8 mb-5 min-h-[120px] w-full md:w-1/4">
                  <div className='h-full w-full bg-mines-800 rounded px-5'>This is a div</div>
            </div>
            {/* <img className="self-start" src="./img/hill 2.svg" alt="" /> */}
          </div>

        <div className="flex flex-col gap-10 items-center py-10 bg-[url('../img/mountains.jpg')]">
            <div className="w-full md:w-1/4 flex flex-col gap-5 items-center text-center w-1/3">
                <hr className='border-t-1 border-white w-3/4 mt-3' /> 
                <p className="text-white text-[1.3rem] md:text-[2rem]">Join Andie, Kali and friends as they re-discover Middle-earth together by comparing the works of Tolkien to their various adaptations, starting with Peter Jackson's take on <i>Lord of the Rings</i> and <i>The Hobbit</i>.</p>
                <hr className="border-t-1 border-white w-3/4 mb-2" />
                <Link to="about" className="flex items-center justify-center hover:bg-white hover:bg-opacity-10 text-white border border-white rounded-lg px-3 py-1"><p>MORE ABOUT US</p></Link>
            </div> 
        </div>

        <div className="diag"></div>

        <div className="flex flex-wrap gap-24 p-5 m-5 bg-[#f7f7f7] justify-center">
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