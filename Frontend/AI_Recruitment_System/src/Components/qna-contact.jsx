import { useState } from 'react';
import { Plus, X } from 'lucide-react';

// Explicit CSS styles
const styles = {
  container: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginBottom: '32px'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '16px',
    color: '#333',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  item: {
    overflow: 'hidden',
  },
  itemHeader: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    border: '1px solid #e5e7eb',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
  },
  activeHeader: {
    color: '#3b82f6',
  },
  itemQuestion: {
    fontSize: '14px',
    fontWeight: '400',
  },
  icon: {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '1px solid #d1d5db',
    color: '#9ca3af',
  },
  contentContainer: {
    overflow: 'hidden',
    transition: 'max-height 0.3s ease, opacity 0.3s ease',
  },
  contentHidden: {
    maxHeight: '0',
    opacity: '0',
  },
  contentVisible: {
    maxHeight: '500px',
    opacity: '1',
  },
  contentBody: {
    padding: '16px',
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderTop: 'none',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    fontSize: '14px',
    color: '#4b5563',
  }
};

export default function QNA() {
  // Sample data for the accordion
  const sections = [
    {
      id: "your-account",
      title: "Your Account",
      items: [
        {
          id: "account-1",
          question: "Donec in ipsum sit amet mi tincidunt lacinia ut id risus.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere sit, scelerisque sed eros."
        },
        {
          id: "account-2",
          question: "Etiam rutrum ligula at dui tempor, eu tempus ligula tristique.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere sit, scelerisque sed eros."
        },
        {
          id: "account-3",
          question: "Morbi vitae neque eu sapien aliquet rhoncus.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere sit, scelerisque sed eros."
        }
      ]
    },
    {
      id: "employers-jobs",
      title: "Employers and Jobs",
      items: [
        {
          id: "jobs-1",
          question: "Donec in ipsum sit amet mi tincidunt lacinia ut id risus.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere sit, scelerisque sed eros."
        },
        {
          id: "jobs-2",
          question: "Etiam rutrum ligula at dui tempor, eu tempus ligula tristique.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere sit, scelerisque sed eros."
        },
        {
          id: "jobs-3",
          question: "Morbi vitae neque eu sapien aliquet rhoncus.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere sit, scelerisque sed eros."
        }
      ]
    },
    {
      id: "candidate-resume",
      title: "Candidate & Resume",
      items: [
        {
          id: "resume-1",
          question: "Donec in ipsum sit amet mi tincidunt lacinia ut id risus.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere sit, scelerisque sed eros."
        },
        {
          id: "resume-2",
          question: "Etiam rutrum ligula at dui tempor, eu tempus ligula tristique.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere sit, scelerisque sed eros."
        },
        {
          id: "resume-3",
          question: "Morbi vitae neque eu sapien aliquet rhoncus.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere sit, scelerisque sed eros."
        }
      ]
    }
  ];

  // State to track which item is open
  const [openItems, setOpenItems] = useState({});
  
  // Function to toggle the open state of an accordion item
  const toggleItem = (itemId) => {
    setOpenItems(prev => {
      // Close all other items when opening a new one
      if (!prev[itemId]) {
        const allClosed = {};
        Object.keys(prev).forEach(key => {
          allClosed[key] = false;
        });
        return {
          ...allClosed,
          [itemId]: true
        };
      } else {
        return {
          ...prev,
          [itemId]: !prev[itemId]
        };
      }
    });
  };
  
  // Function to close a specific item
  const closeItem = (e, itemId) => {
    e.stopPropagation(); // Prevent triggering the parent click event
    setOpenItems(prev => ({
      ...prev,
      [itemId]: false
    }));
  };

  // Custom icon component for plus sign
  const PlusIcon = () => (
    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-400">
      <Plus size={16} />
    </div>
  );

  // Custom X icon in circle
  const CloseIcon = () => (
    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-400">
      <X size={16} />
    </div>
  );

  return (
    <div style={styles.container}>
      {sections.map((section) => (
        <div key={section.id} style={styles.section}>
          <h2 style={styles.sectionTitle}>{section.title}</h2>
          
          <div style={styles.itemsContainer}>
            {section.items.map((item) => (
              <div 
                key={item.id} 
                style={styles.item}
              >
                <div 
                  style={{
                    ...styles.itemHeader,
                    ...(openItems[item.id] ? styles.activeHeader : {})
                  }}
                  onClick={() => toggleItem(item.id)}
                >
                  <span style={styles.itemQuestion}>{item.question}</span>
                  <div style={styles.icon}>
                    {openItems[item.id] ? <X size={16} /> : <Plus size={16} />}
                  </div>
                </div>
                
                <div 
                  style={{
                    ...styles.contentContainer,
                    ...(openItems[item.id] ? styles.contentVisible : styles.contentHidden)
                  }}
                >
                  <div style={styles.contentBody}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}