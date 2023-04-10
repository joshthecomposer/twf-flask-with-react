import React from 'react'

const About = (props) => {
    const { message } = props;
    return (
        <div>
            {
                <h1>This ID fetched from flask and rendered: { message }</h1>
            }
        </div>
    )
}

export default About