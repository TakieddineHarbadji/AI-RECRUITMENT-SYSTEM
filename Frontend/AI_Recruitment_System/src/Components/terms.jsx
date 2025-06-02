import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
      <div className="toc">
          <h3>TABLE OF CONTENTS</h3>
          <ul>
            <li><a href="#terms-and-condition">01. Terms & Condition</a></li>
            <li><a href="#limitations">02. Limitations</a></li>
            <li><a href="#security">03. Security</a></li>
            <li><a href="#privacy-policy">04. Privacy Policy</a></li>
          </ul>
        </div>
        <div className="main-content-terms">
          <section id="terms-and-condition">
            <h2>01. Terms & Condition</h2>
            <p>
              Praesent placerat dictum elementum. Nam pulvinar urna vel lectus maximus, eget faucibus turpis hendrerit. Sed lectus molestie arcu, et accumsan nisi. Quisque molestie velit vitae ligula luctus bibendum. Duis sit amet eros mollis, viverra ipsum sed, convallis sapien. Donec justo erat, posuere vitae eu ut, finibus euismod enim. Donec velit tortor, mollis eu tortor euismod, gravida lacinia arcu.
            </p>
            <ul>
              <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
              <li>Curabitur luctus sapien augue, mattis faucibus nisi vehicula nec. Mauris et scelerisque lorem. Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et.</li>
              <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor.</li>
              <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
              <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
            </ul>
          </section>

          <section id="limitations">
            <h2>02. Limitations</h2>
            <p>
              In pretium est id amet ellem feugiat eleifend. Curabitur consectetur facilisis metus. Morbi hendrerit facilisis tincidunt. Sed condimentum lacinia arcu. Ut ut iaculis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel erat est, in vitae turpis tempor, accumsan sapien vitae, rutrum eros. Integer pulvinar mattis turpis, ac fermentum leo ullamcorper a. Nam finibus eros libero, sit amet mattis lacus tristique eu. Donec nec ex convallis, ultricies eros ut, mollis libero. Ut scelerisque lacus interdum consectetur sodales.
            </p>
            <ul>
              <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
              <li>Curabitur luctus sapien augue.</li>
              <li>mattis faucibus nisi vehicula nec. Mauris at scelerisque lorem.</li>
              <li>Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et. Aenean vel metus leo.</li>
              <li>Vivamus nec neque a libero sodales aliquam a et dolor.</li>
            </ul>
          </section>

          <section id="security">
            <h2>02. Security</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ex neque, elementum eu blandit in, ornare eu purus. Fusce eu rhoncus mi, quis ultricies lacus. Phasellus ut pellentesque nulla. Cras erat nisi, mattis et efficitur et, iaculis a lacus. Fusce gravida augue quis leo facilisis.
            </p>
          </section>

          <section id="privacy-policy">
            <h2>04. Privacy Policy</h2>
            <p>
              Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum maximus nec justo sed maximus. Vivamus sit amet turpis sem. Integer vitae tortor ac ex scelerisque facilisis ac vitae urna. In hac habitasse platea dictumst. Maecenas imperdiet tortor arcu, nec tincidunt neque malesuada volutpat.
            </p>
            <ul>
              <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
              <li>Mauris et scelerisque lorem. Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et.</li>
              <li>Aenean vel metus leo.</li>
              <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
              <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
            </ul>
            <p>
              Fusce rutrum mauris sit amet justo rutrum, ut sodales lorem ullamcorper. Aliquam vitae iaculis urna. Nulla vitae mi vel nisi viverra ullamcorper vel elementum est. Mauris vitae elit nec enim hendrerit dignissim. Donec ultricies nulla a enim pulvinar, quis pulvinar lacus consectetur. Donec dignissim, risus nec mollis efficitur, turpis erat blandit urna, eget elementum lacus lectus eget lorem.
            </p>
          </section>
        </div>
        
        
      </div>
      
      <style jsx>{`
        /* CSS styles */
        .terms-container {
          font-family: 'Arial', sans-serif;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .terms-content {
          display: flex;
          flex-direction: row-reverse;
          gap: 40px;
        }
        
        .main-content-terms {
          flex: 3;
        }
        
        .toc {
          flex: 1;
          position: sticky;
          top: 20px;
          align-self: flex-start;
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .toc h3 {
          font-size: 14px;
          color: #777;
          margin-top: 0;
          margin-bottom: 15px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        
        .toc ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        
        .toc li {
          margin-bottom: 10px;
          font-size: 14px;
        }
        
        .toc a {
          color: #333;
          text-decoration: none;
        }
        
        .toc a:hover {
          color: #0066cc;
        }
        
        h2 {
          font-size: 24px;
          font-weight: 600;
          margin-top: 40px;
          margin-bottom: 20px;
        }
        
        p {
          line-height: 1.6;
          margin-bottom: 20px;
          color: #555;
        }
        
        ul {
          padding-left: 20px;
          margin-bottom: 30px;
        }
        
        li {
          list-style-type: disc;
          margin-bottom: 10px;
          line-height: 1.5;
          color: #555;
        }
        
        section {
          margin-bottom: 40px;
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .terms-content {
            flex-direction: column;
          }
          
          .toc {
            position: relative;
            top: 0;
            margin-bottom: 30px;
            width: 100%;
          }
        }
        
        @media (max-width: 768px) {
          .terms-container {
            padding: 15px;
          }
          
          h2 {
            font-size: 22px;
          }
          
          p, li {
            font-size: 15px;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 20px;
          }
          
          p, li {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsAndConditions;