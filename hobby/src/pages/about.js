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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem atque obcaecati inventore id ut tempora impedit quam unde vitae. Labore laborum amet facere suscipit perspiciatis error officia quaerat, repellendus hic doloribus dolorum quas quia quasi iusto enim nulla minus vitae nihil mollitia quos a deleniti molestiae ea? Labore id reprehenderit facilis nemo illo, exercitationem culpa ex corrupti obcaecati iure perferendis voluptate nulla quasi fugiat ducimus totam at nostrum tenetur et, adipisci consequuntur. Culpa nostrum voluptatibus ducimus nihil reiciendis recusandae perferendis voluptatum. Nam amet sunt incidunt quam minima magnam aperiam ea velit officia tempora, accusamus ullam. Iusto molestiae blanditiis architecto!</p>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}

export default About