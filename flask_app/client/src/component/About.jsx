import React from 'react'
import "./About.css"

const About = (props) => {
    return (
        <>
            <div className="header">
                <h1 className='text-[7rem] font-normal mt-[4rem] uppercase text-center text-[2D2D2D]'>
                    MEET THE TEAM
                </h1>
                <h2 className="text-4xl font-medium">
                    A podcast forged in friendship
                </h2>
                <hr className="border-t-2 border-[#2d2d2d] w-1/2 text-center my-10" />
                <div className="w-1/2 text-center">
                    <p className="tracking-normal font-medium text-[1.8rem] text-[#2d2d2d]">Founded and co-hosted by Andie, Tolkien with Friends was created to capture the conversations only best friends can have: silly, thoughtful, and serious all at once — and always about the things those friends are passionate about.</p>
                    <br/>
                    <p className="tracking-normal font-medium text-[1.8rem] text-[#2d2d2d]">In our case, that's the works of J.R.R. Tolkien, the Lord of the Rings movies, and fantasy in general. What started as a shared journey with two best friends comparing and contrasting the Lord of the Rings books and movies has since expanded to include a more friends and, really, a whole community of Tolkien fans.</p>
                </div>
                <hr className="border-t-2 border-[#2d2d2d] w-1/2 text-center my-10" />
            </div>
            <div className="container">
                <img className="prof-pic" src="./img/andie.jpg" alt="" />
                <div className="bio">
                    <h3 className="text-[2.8rem] uppercase text-[#2d2d2d] mt-4 font-medium">
                        Andie
                    </h3>
                    <p className="tracking-normal font-medium text-[1.8rem] text-[#2d2d2d]">What started as a series on her TikTok quickly became a passion project because Andie simply has too much to say about Lord of the Rings. Instead of simply revealing “Lines from Lord of the Rings” she wished had been in the movies, she started a podcast with the goal of comparing the books and the movies chapter by chapter and scene by scene, turning her yearly re-read into a year-long project - and now a project with no end date 😜
                    </p>
                </div>
                <img className="prof-pic" src="./img/kali.JPG" alt="" />
                <div className="bio">
                    <h3 className="text-[2.8rem] uppercase text-[#2d2d2d] mt-4 font-medium">
                        Kali
                    </h3>
                    <p className="tracking-normal font-medium text-[1.8rem] text-[#2d2d2d]">Kali is a cosplayer, content creator, and community organizer in the Tolkien fan space. After joining Tolkien with Friends partway through the first season, Kali adds a thoughtful perspective to every episode. Kali is also a cohost of the Voices of Arda podcast with KnewBettaDoBetta, which gives another unique spin on all things Tolkien.
                    </p>
                </div>
                <img className="prof-pic" src="./img/ahnna2.jpeg" alt="" />
                <div className="bio">
                    <h3 className="text-[2.8rem] uppercase text-[#2d2d2d] mt-4 font-medium font-medium">
                        Ahnna
                    </h3>
                    <p className="tracking-normal font-medium text-[1.8rem] text-[#2d2d2d]">Andie's best friend and a huge Game of Thrones fan, Ahnna helped add a movies-only fan perspective to keep Andie's rants in check. Always ready to reference George R.R. Martin, Ahnna loaned us her magical brain up until the birth of her perfect baby boy. We're keeping our fingers crossed for a comeback!
                    </p>
                </div>
            </div>
        </>
    )
}

export default About