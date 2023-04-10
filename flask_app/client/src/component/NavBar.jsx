import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
        <>
            <div className="hidden lg:flex flex-row items-center gap-3 justify-end bg-[#3C4B37]">
                <ul className="mt-4 mr-8 flex flex-row gap-10 items-center">
                    <li>
                        <a href="patreon.com">
                            <img className="soc-icon" src="img/patreon.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="discord.com">
                            <img className="soc-icon" src="img/discord.webp" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com">
                            <img className="soc-icon" src="img/insta.webp" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="youtube.com">
                            <img className="soc-icon" src="img/youtube.webp" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com">
                            <img className="soc-icon" src="img/twitter.webp" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <nav className="hidden lg:flex items-center justify-center bg-[#3C4B37] mt-[-40px]">
                <ul className="flex flex-row gap-10 items-center justify-center">
                    <li>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/episodes">Episodes</Link>
                    </li>
                    <li>
                        <a rel="noreferrer" target="_blank" className="nav-link" href="https://tolkien-with-friends-shop.creator-spring.com/">Merch</a>
                    </li>
                    <li>
                        <Link to="/"><img className="h-[300px] w-[300px]" src="img/BIGGGG-01.png" alt="Tolkien with Friends" /></Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/subscribe">Subscribe</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar