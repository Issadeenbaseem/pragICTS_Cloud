import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
    query($slug: String!) {
        projectsJson(slug: {eq: $slug}) {
            client,
            text,
            day,
            month,
            year,
            categories {
                title
            }
        }
    }
`

const ProjectPage = ({ data }) => {
    const project = data.projectsJson
    return (
        <div>
            <h1>{project.client}</h1>
            <h1>{project.text}</h1>
        </div>
    )
}

export default ProjectPage
