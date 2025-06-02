import { useState } from 'react'
import Footer from '../Components/footer';
import SingleBlog from '../Components/singleBlog/blogSingle';
import CommentsSection from '../Components/singleBlog/comments/comments.jsx';
import RelatedBlog from '../Components/singleBlog/relatedBlogs.jsx';

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
