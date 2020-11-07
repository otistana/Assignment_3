import React from "react"
import { Link }  from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const About = () =>{
    return(
        <Layout>
            <SEO title="About"/>
            <img src="/images/me.jpg" alt="Me"/>
            <h1>This is About Me!</h1>
            <p>Hello, my name is T'Ana Otis (Tianna). I'm from Norfolk Virginia, but raised in Dallas, Texas. I am currently serving in the Army National Guard. I love what I do 
                in the military and wouldn't change it for the world. I also like to read a lot mostly romance but its what i enjoy.
            </p>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}

export default About