import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
        <>
            <div className="after hidden md:flex flex-row items-center gap-3 justify-end ">
                <ul className="mt-4 mr-8 flex flex-row gap-10 items-center">
                    <li>
                        <a href="patreon.com">
                            <img className="h-[20px]" src="img/patreon.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="discord.com">
                            <img className="h-[20px]" src="img/discord.webp" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com">
                            <img className="h-[20px]" src="img/insta.webp" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="youtube.com">
                            <img className="h-[20px]" src="img/youtube.webp" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com">
                            <img className="h-[20px]" src="img/twitter.webp" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <nav className="hidden md:flex items-center justify-center bg-lime-950 opacity-80 mt-[-40px]">
                <ul className="flex flex-row gap-10 items-center justify-center">
                    <li>
                        <Link className="text-3xl hover:text-gray-500" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="text-3xl hover:text-gray-500" to="/episodes">Episodes</Link>
                    </li>
                    <li>
                        <a rel="noreferrer" target="_blank" className="text-3xl hover:text-gray-500" href="https://tolkien-with-friends-shop.creator-spring.com/">Merch</a>
                    </li>
                    <li>
                        <Link to="/"><img className="h-[30rem] w-[30rem]" src="img/BIGGGG-01.png" alt="Tolkien with Friends" /></Link>
                    </li>
                    <li>
                        <Link className="text-3xl hover:text-gray-500" to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link className="text-3xl hover:text-gray-500" to="/subscribe">Subscribe</Link>
                    </li>
                    <li>
                        <Link className="text-3xl hover:text-gray-500" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar