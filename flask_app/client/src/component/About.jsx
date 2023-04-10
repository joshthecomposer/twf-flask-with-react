import React from 'react'
import "./About.css"

const About = (props) => {
    return (
        <>
            <div className="header">
                <h1>
                    MEET THE TEAM
                </h1>
                <h2>
                    A podcast forged in friendship
                </h2>
                <hr />
                <div className="blurb">
                    <p>Founded and co-hosted by Andie, Tolkien with Friends was created to capture the conversations only best friends can have: silly, thoughtful, and serious all at once — and always about the things those friends are passionate about.</p>
                    <br/>
                    <p>In our case, that's the works of J.R.R. Tolkien, the Lord of the Rings movies, and fantasy in general. What started as a shared journey with two best friends comparing and contrasting the Lord of the Rings books and movies has since expanded to include a more friends and, really, a whole community of Tolkien fans.</p>
                </div>
                <hr />
            </div>
            <div className="container">
                <img className="prof-pic" src="./img/andie.jpg" alt="" />
                <div className="bio">
                    <h3>
                        Andie
                    </h3>
                    <p>What started as a series on her TikTok quickly became a passion project because Andie simply has too much to say about Lord of the Rings. Instead of simply revealing “Lines from Lord of the Rings” she wished had been in the movies, she started a podcast with the goal of comparing the books and the movies chapter by chapter and scene by scene, turning her yearly re-read into a year-long project - and now a project with no end date 😜
                    </p>
                </div>
                <img className="prof-pic" src="./img/kali.JPG" alt="" />
                <div className="bio">
                    <h3>
                        Kali
                    </h3>
                    <p>Kali is a cosplayer, content creator, and community organizer in the Tolkien fan space. After joining Tolkien with Friends partway through the first season, Kali adds a thoughtful perspective to every episode. Kali is also a cohost of the Voices of Arda podcast with KnewBettaDoBetta, which gives another unique spin on all things Tolkien.
                    </p>
                </div>
                <img className="prof-pic" src="./img/ahnna2.jpeg" alt="" />
                <div className="bio">
                    <h3>
                        Ahnna
                    </h3>
                    <p>Andie's best friend and a huge Game of Thrones fan, Ahnna helped add a movies-only fan perspective to keep Andie's rants in check. Always ready to reference George R.R. Martin, Ahnna loaned us her magical brain up until the birth of her perfect baby boy. We're keeping our fingers crossed for a comeback!
                    </p>
                </div>
            </div>
        </>
    )
}

export default About