import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'
import "./blogBody.css"

export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      bodyText {
        childMarkdownRemark {
          html
        }
      }
      title
      date( formatString: "MMMM Do, YYYY")
    }
    
  }
`

const BlogPost = (props) => {
  return (
    <Layout>
      <h1></h1>


      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.date}</p>
            <p class="mb-8 leading-relaxed"><div className="body" dangerouslySetInnerHTML={{ __html: props.data.contentfulBlogPost.bodyText.childMarkdownRemark.html, }} /></p>
            <div class="flex justify-center">

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )

}

export default BlogPost
