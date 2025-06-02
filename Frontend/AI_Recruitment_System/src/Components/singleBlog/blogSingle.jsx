import { useState } from "react";
import { Search } from "lucide-react";
import checker from '../../assets/images/checkerboard.png';

export default function SingleBlog() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample post data
  const recentPosts = [
    {
      id: 1,
      title: "Integer volutpat fringilla ipsum, nec tempor nisi facilisis eget",
      date: "Nov 12, 2021",
      comments: 25
    },
    {
      id: 2,
      title: "Integer volutpat fringilla ipsum, nec tempor nisi facilisis eget",
      date: "Nov 12, 2021",
      comments: 25
    },
    {
      id: 3,
      title: "Integer volutpat fringilla ipsum, nec tempor nisi facilisis eget",
      date: "Nov 12, 2021",
      comments: 25
    }
  ];

  // Categories with checkbox state
  const [categories, setCategories] = useState([
    { id: 1, name: "Graphics & Design", checked: true },
    { id: 2, name: "Code & Programming", checked: true },
    { id: 3, name: "Digital Marketing", checked: false },
    { id: 4, name: "Video & Animation", checked: false },
    { id: 5, name: "Music & Audio", checked: false },
    { id: 6, name: "Finance & Accounting", checked: false },
    { id: 7, name: "Health & Care", checked: false },
    { id: 8, name: "Data Science", checked: false }
  ]);

  // Toggle category checkbox
  const toggleCategory = (id) => {
    setCategories(
      categories.map(category =>
        category.id === id ? { ...category, checked: !category.checked } : category
      )
    );
  };

  // Popular tags
  const popularTags = [
    "Design", "Programming", "Health & Care", "Motion Design", "Photography", "Politics"
  ];

  // Image placeholder component for responsive images
  const ImagePlaceholder = ({ className = "" }) => (
    <div className={`image-placeholder ${className}`}>
      <img 
        src={checker} 
        alt="Font sample" 
        className="responsive-image"
      />
    </div>
  );

  return (
    <div className="fonts-page">
      <div className="container-post">
        <main className="main-content-post">
          <article className="blog-post">
            <h1>20 cool fonts for web and graphic design</h1>
            
            <div className="post-meta">
              <div className="author">
                <div className="author-img">
                  <img 
                    src={checker}
                    alt="Kevin Gilbert" 
                    className="avatar-image"
                  />
                </div>
                <span>Kevin Gilbert</span>
              </div>
              <div className="post-date">
                <span>Nov 12, 2021</span>
              </div>
              <div className="comments-count">
                <span>25 Comments</span>
              </div>
            </div>
            
            <div className="featured-image">
              <ImagePlaceholder />
            </div>
            
            <div className="post-content">
              <p className="intro">
                Check out these 20 cool fonts for your next web or graphic design project.
                Typography, font, and typeface are focal design elements that can make or break your design.
              </p>
              
              <p>
                Typography and font choice influences people's perception of a brand, making font one the more necessary for digital 
                designers to consider when designing for the web and beyond. Font goes the extra mile. It conveys a brand's 
                messaging, adding a thread to its target audience with each line of header text and content within a web design. 
                Below you'll find 20 cool fonts worth checking out for personal use or your next web or graphic design project. And 
                don't worry, we've included both free and paid fonts!
              </p>
              
              <p>
                The Graphik family has 18 different styles, from bold to regular, compact light, semibold, medium, and so on. 
                Graphik is a gorgeous typeface with a wide range of font styles, each contemporary in its own respect.
              </p>
              
              <blockquote>
                Vintage meets vogue is the only way to describe this serif typeface. Neue World encompasses the mode high-fashion aesthetic of the 1960s with a commercial take.
              </blockquote>
              
              <h2>EB Garamond and Relative (free+paid)</h2>
              
              <p>
                Relative is an OpenType sans-serif font known for its range. Designed by The Entente in 2015, this type font family 
                comes in two names: Book (in Black, hefty italics) and Sans monospace. The range gives you versatility and 
                readability. Coming in four weights and 12 styles, Relative's great for both personal and commercial use due to its duality.
              </p>
              
              <p>
                If you're looking for a serif font that is both girly and refined but want to explore typefaces outside of the typical 
                Playfair Display, EB Garamond is the font you've been seeking.
              </p>
              
              <div className="font-examples">
                <ImagePlaceholder className="large-image" />
                <p className="font-caption">
                  This example showcases how different fonts can dramatically change the look and feel of your design. 
                  The right typography choice creates visual hierarchy, enhances readability, and communicates your brand personality.
                </p>
              </div>
            </div>
          </article>
        </main>
        
        <aside className="sidebar">
          <div className="search-box">
            <h3>Search</h3>
            <div className="search-input">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="category-section">
            <h3>Category</h3>
            <div className="categories">
              {categories.map(category => (
                <div key={category.id} className="category-item">
                  <input 
                    type="checkbox" 
                    id={`category-${category.id}`}
                    checked={category.checked}
                    onChange={() => toggleCategory(category.id)}
                  />
                  <label htmlFor={`category-${category.id}`}>{category.name}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="recent-posts">
            <h3>Recent Post</h3>
            {recentPosts.map(post => (
              <div key={post.id} className="recent-post-item">
                <div className="post-thumbnail">
                  <img 
                    src={checker}
                    alt="Recent post thumbnail" 
                    className="thumbnail-image"
                  />
                </div>
                <div className="post-info">
                  <div className="post-meta-small">
                    <span>{post.date}</span>
                    <span>{post.comments} Comments</span>
                  </div>
                  <h4>{post.title}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="gallery-section">
            <h3>Gallery</h3>
            <div className="gallery-grid">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="gallery-item">
                  <img 
                    src={checker}
                    alt={`Gallery item ${index + 1}`} 
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="popular-tags">
            <h3>Popular Tag</h3>
            <div className="tag-cloud">
              {popularTags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
          html, body {
  background-color: #ffffff;
}
        
        .fonts-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
          line-height: 1.6;
        }
        
        .container-post {
          display: flex;
          flex-direction: row;
          gap: 40px;
        }
        
        .main-content-post {
          flex: 2;
        }
        
        .sidebar {
          flex: 1;
        }
        
        h1 {
          font-size: 32px;
          margin-bottom: 20px;
          font-weight: 700;
        }
        
        h2 {
          font-size: 24px;
          margin: 30px 0 15px;
        }
        
        h3 {
          font-size: 18px;
          margin-bottom: 15px;
          font-weight: 600;
        }
        
        h4 {
          font-size: 16px;
          font-weight: 500;
        }
        
        p {
          margin-bottom: 20px;
          font-size: 16px;
        }
        
        .post-meta {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 14px;
          color: #666;
        }
        
        .author {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .author-img {
          width: 32px;
          height: 32px;
          overflow: hidden;
          border-radius: 50%;
        }
        
        .featured-image {
          width: 100%;
          max-height: 300px;
          margin-bottom: 30px;
          overflow: hidden;
        }
        
        .intro {
          font-weight: 600;
          font-size: 18px;
        }
        
        blockquote {
          padding: 20px;
          border-left: 4px solid #333;
          background-color: #f9f9f9;
          margin: 30px 0;
          font-style: italic;
        }
        
        .image-placeholder {
          width: 100%;
          overflow: hidden;
          background-color: #f6f6f6;
          line-height: 0; /* Remove extra space below image */
        }
        
        .responsive-image,
        .thumbnail-image,
        .gallery-image,
        .avatar-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          max-width: 100%;
        }
        
        .avatar-image {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
        
        .font-examples {
          margin: 30px 0;
        }
        
        .large-image {
          margin-bottom: 15px;
          max-height: 250px;
          overflow: hidden;
        }
        
        .font-caption {
          font-size: 15px;
          font-style: italic;
          color: #555;
          margin-top: 10px;
        }
        
        /* Sidebar Styles */
        .search-box, .category-section, .recent-posts, .gallery-section, .popular-tags {
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .search-input {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .search-input input {
          width: 100%;
          padding: 10px 10px 10px 35px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .search-input svg {
          position: absolute;
          left: 10px;
          color: #999;
        }
        
        .category-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .category-item input {
          margin-right: 8px;
        }
        
        .recent-post-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .post-thumbnail {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
          overflow: hidden;
        }
        
        .post-meta-small {
          display: flex;
          gap: 15px;
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        
        .gallery-item {
          aspect-ratio: 1;
          overflow: hidden;
        }
        
        .tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tag {
          padding: 5px 12px;
          background-color: #f0f0f0;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
        }
        
        .tag:hover {
          background-color: #e0e0e0;
        }
        
        /* Responsive styles */
        @media (max-width: 900px) {
          .container-post {
            flex-direction: column;
          }
          
          .sidebar {
            margin-top: 40px;
          }
        }
        
        @media (max-width: 600px) {
          .fonts-page {
            padding: 15px;
          }
          
          h1 {
            font-size: 26px;
          }
          
          .post-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          
          .featured-image {
            max-height: 200px;
          }
          
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}