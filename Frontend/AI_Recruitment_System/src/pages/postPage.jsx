import { useState } from 'react'
import Footer from '../components/footer';
import SingleBlog from '../components/singleBlog/blogSingle';
import CommentsSection from '../components/singleBlog/comments/comments.jsx';
import RelatedBlog from '../components/singleBlog/relatedBlogs.jsx';

function PostPage() {

  return (

    <>
    
   <SingleBlog/>
   <CommentsSection/>
   <RelatedBlog/>
    <Footer />
  </>
  )
}

export default PostPage
