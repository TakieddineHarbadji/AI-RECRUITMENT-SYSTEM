import { useState, useEffect } from 'react';
import { Search, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const styles = {
    // Layout styles
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      display: 'grid',
      gridTemplateColumns: 'minmax(280px, 300px) 1fr',
      gap: '30px',
      backgroundColor: '#fff',
    },
    mobileContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      gap: '24px',
      backgroundColor: '#fff',
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',

    },
    
    // Search component styles
    searchContainer: {
      border: '1px solid #e5e5e5',
      borderRadius: '5px',
      padding: '20px',
    },
    searchTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    searchInputContainer: {
      position: 'relative',
    },
    searchInput: {
      width: '100%',
      padding: '10px 10px 10px 35px',
      border: '1px solid #e5e5e5',
      borderRadius: '5px',
      fontSize: '14px',
    },
    searchIcon: {
      position: 'absolute',
      left: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#999',
    },
    
    // Category component styles
    categoryContainer: {
      border: '1px solid #e5e5e5',
      borderRadius: '5px',
      padding: '20px',
    },
    categoryTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    categoryList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    categoryItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
    },
    checkbox: {
      width: '16px',
      height: '16px',
    },
    checkboxChecked: {
      accentColor: '#007bff',
    },
    
    // Post styles
    postContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '30px',
    },
    blogPost: {
      display: 'flex',
      borderRadius: '5px',
      overflow: 'hidden',
      border: '1px solid #e5e5e5',
    },
    postImage: {
      width: '180px',
      height: '150px',
      backgroundColor: '#888',
      flexShrink: 0,
    },
    postContent: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    postMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '12px',
      color: '#666',
    },
    postTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '0',
    },
    postDescription: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.5',
      margin: '0',
    },
    readMore: {
      color: '#007bff',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '14px',
      marginTop: 'auto',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    
    // Recent Post styles
    recentPostContainer: {
      border: '1px solid #e5e5e5',
      borderRadius: '5px',
      padding: '20px',
    },
    recentPostTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    recentPostList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    recentPostItem: {
      display: 'flex',
      gap: '15px',
    },
    recentPostImage: {
      width: '50px',
      height: '50px',
      backgroundColor: '#000',
      flexShrink: 0,
    },
    recentPostInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },
    recentPostDate: {
      fontSize: '12px',
      color: '#666',
    },
    recentPostText: {
      fontSize: '14px',
      fontWeight: 'medium',
      margin: '0',
    },
    
    // Gallery styles
    galleryContainer: {
      border: '1px solid #e5e5e5',
      borderRadius: '5px',
      padding: '20px',
    },
    galleryTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '5px',
    },
    galleryImage: {
      aspectRatio: '1/1',
      backgroundColor: '#000',
      width: '100%',
    },
    
    // Tags styles
    tagContainer: {
      border: '1px solid #e5e5e5',
      borderRadius: '5px',
      padding: '20px',
    },
    tagTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    tagGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
    },
    tag: {
      padding: '5px 15px',
      borderRadius: '20px',
      backgroundColor: '#f5f5f5',
      fontSize: '12px',
      cursor: 'pointer',
    },
    tagActive: {
      backgroundColor: '#007bff',
      color: 'white',
    },
    
    // Pagination styles
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      margin: '20px 0',
    },
    paginationItem: {
      width: '36px',
      height: '36px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '14px',
    },
    paginationActive: {
      backgroundColor: '#007bff',
      color: 'white',
    },
    paginationArrow: {
      width: '36px',
      height: '36px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      color: '#666',
    },
    
    responsivePostImage: {
      width: '100%',
      height: '180px',
      backgroundColor: '#888',
      objectFit: 'cover',
    },
    responsiveBlogPost: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #e5e5e5',
      borderRadius: '5px',
      overflow: 'hidden',
    }
  };

// Responsive design hook
const useResponsiveDesign = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default function Blog() {
  const isMobile = useResponsiveDesign();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const [categories, setCategories] = useState([
    { id: 1, name: 'Graphics & Design', checked: false },
    { id: 2, name: 'Code & Programming', checked: false },
    { id: 3, name: 'Digital Marketing', checked: false },
    { id: 4, name: 'Video & Animation', checked: false },
    { id: 5, name: 'Music & Audio', checked: false },
    { id: 6, name: 'Finance & Accounting', checked: false },
    { id: 7, name: 'Health & Care', checked: false },
    { id: 8, name: 'Data Science', checked: false },
  ]);

  const toggleCheckbox = (id) => {
    const updated = categories.map((cat) =>
      cat.id === id ? { ...cat, checked: !cat.checked } : cat
    );
    setCategories(updated);
  };

  const blogPosts = [
    { id: 1, title: 'Proin sit amet massa eget odio consectetur ultrices.', description: 'Integer imperdiet mauris...', date: 'Nov 12, 2021', comments: 25, image: 'post1.jpg' },
    { id: 2, title: 'Praesent tristique sagittis malesuada.', description: 'Integer imperdiet mauris...', date: 'Nov 12, 2021', comments: 25, image: 'post2.jpg' },
    { id: 3, title: 'Integer volutpat fringilla ipsum.', description: 'Integer imperdiet mauris...', date: 'Nov 12, 2021', comments: 25, image: 'post3.jpg' },
    { id: 4, title: 'Praesent hendrerit diam ac metus finibus.', description: 'Integer imperdiet mauris...', date: 'Nov 12, 2021', comments: 25, image: 'post4.jpg' },
    { id: 5, title: 'Nullam et est vel eros sodales.', description: 'Integer imperdiet mauris...', date: 'Nov 12, 2021', comments: 25, image: 'post5.jpg' },
  ];

  const recentPosts = [
    { id: 1, title: 'Integer volutpat fringilla ipsum...', date: 'Nov 12, 2021', comments: 25 },
    { id: 2, title: 'Integer volutpat fringilla ipsum...', date: 'Nov 12, 2021', comments: 25 },
    { id: 3, title: 'Integer volutpat fringilla ipsum...', date: 'Nov 12, 2021', comments: 25 },
  ];

  const popularTags = [
    { id: 1, name: 'Design', active: true },
    { id: 2, name: 'Programming', active: false },
    { id: 3, name: 'Health & Care', active: false },
    { id: 4, name: 'Motion Design', active: false },
    { id: 5, name: 'Photography', active: false },
    { id: 6, name: 'Politics', active: false },
  ];

  const Pagination = () => (
    <div style={styles.paginationContainer}>
      <div style={styles.paginationArrow}>
        <ChevronLeft size={20} />
      </div>
      {[...Array(totalPages).keys()].map((page) => (
        <div
          key={page + 1}
          style={{
            ...styles.paginationItem,
            ...(currentPage === page + 1 ? styles.paginationActive : {}),
          }}
          onClick={() => setCurrentPage(page + 1)}
        >
          {page + 1}
        </div>
      ))}
      <div style={styles.paginationArrow}>
        <ChevronRight size={20} />
      </div>
    </div>
  );

  const BlogPost = ({ post }) => (
    <div style={isMobile ? styles.responsiveBlogPost : styles.blogPost}>
      <div style={isMobile ? styles.responsivePostImage : styles.postImage}></div>
      <div style={styles.postContent}>
        <div style={styles.postMeta}>
          <span>{post.date}</span>
          <span>{post.comments} Comments</span>
        </div>
        <h3 style={styles.postTitle}>{post.title}</h3>
        <p style={styles.postDescription}>{post.description}</p>
        <div style={styles.readMore}>
          Read more <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );

  const SearchComponent = () => (
    <div style={styles.searchContainer}>
      <div style={styles.searchTitle}>Search</div>
      <div style={styles.searchInputContainer}>
        <input type="text" placeholder="Search" style={styles.searchInput} />
        <div style={styles.searchIcon}><Search size={16} /></div>
      </div>
    </div>
  );

  const CategoryComponent = () => (
    <div style={styles.categoryContainer}>
      <div style={styles.categoryTitle}><span>Category</span></div>
      <div style={styles.categoryList}>
        {categories.map((category) => (
          <div key={category.id} style={styles.categoryItem}>
            <input
              type="checkbox"
              checked={category.checked}
              onChange={() => toggleCheckbox(category.id)}
              style={{
                ...styles.checkbox,
                ...(category.checked ? styles.checkboxChecked : {}),
              }}
            />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const RecentPostComponent = () => (
    <div style={styles.recentPostContainer}>
      <div style={styles.recentPostTitle}>Recent Post</div>
      <div style={styles.recentPostList}>
        {recentPosts.map((post) => (
          <div key={post.id} style={styles.recentPostItem}>
            <div style={styles.recentPostImage}></div>
            <div style={styles.recentPostInfo}>
              <div style={styles.recentPostDate}>{post.date} • {post.comments} Comments</div>
              <p style={styles.recentPostText}>{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  const GalleryComponent = () => (
    <div style={styles.galleryContainer}>
      <div style={styles.galleryTitle}>Gallery</div>
      <div style={styles.galleryGrid}>
        {Array(8).fill(0).map((_, index) => (
          <div key={index} style={styles.galleryImage}></div>
        ))}
      </div>
    </div>
  );
  const TagComponent = () => (
    <div style={styles.tagContainer}>
      <div style={styles.tagTitle}>Popular Tag</div>
      <div style={styles.tagGrid}>
        {popularTags.map((tag) => (
          <div 
            key={tag.id} 
            style={{
              ...styles.tag,
              ...(tag.active ? styles.tagActive : {})
            }}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={isMobile ? styles.mobileContainer : styles.container}>
      <div style={styles.sidebar}>
        <SearchComponent />
        <CategoryComponent />
        <RecentPostComponent />
        <GalleryComponent/>
        <TagComponent/>
      </div>
      <div style={styles.main}>
        <div style={styles.postContainer}>
          {blogPosts.map((post) => <BlogPost key={post.id} post={post} />)}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
