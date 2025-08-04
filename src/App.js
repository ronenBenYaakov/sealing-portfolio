import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import About from './About';
import ContactUs from './ContactUs';

const Card = ({ title, content, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: index * 150
  });

  return (
    <div ref={ref} className={`card ${inView ? 'show' : 'hidden'}`}>
      <div className="card-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
      <div className="card-content-container">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const { ref: navRef, inView: navInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contentData = [
    {
      title: "DocsX",
      content: "DocsX utilizes a highly optimized GPT model, enhanced with quantization methods, to deliver fast and efficient document processing. It includes a unique feature to rephrase text using a Diffusion-based technique and also offers a free GPT text generation tool.",
    },
    {
      title: "AgentGO",
      content: "AgentGO combines vector quantization with LLMs to create a lightspeed LLM, enabling extremely fast and responsive AI interactions for a variety of tasks.",
    },
    {
      title: "PhotoAI",
      content: "PhotoAI is a next-generation photo cloud storage platform powered by cutting-edge AI technologies. Designed for individuals and teams who value speed, security, and intelligent organization, SealPhotoCloud automatically analyzes, sorts, and tags your media using the latest advancements in computer vision, generative AI, and deep learning.",
    },
  ];

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <header ref={heroRef} className={`hero-section ${heroInView ? 'show' : 'hidden'}`}>
        <h1 className="hero-title">Pioneering the future of AI.</h1>
        <p className="hero-subtitle">
          We're an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.
        </p>
        <div className="hero-buttons">
          <a 
            href="https://docsx-app.vercel.app/" 
            className="hero-button docsx-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Try DocsX
          </a>
          <a 
            href="https://sealing-app-update.vercel.app/" 
            className="hero-button agentgo-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Try AgentGO
          </a>
          <a 
            href="http://cloud-front-kappa.vercel.app/" 
            className="hero-button photoai-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Try PhotoAI
          </a>
        </div>
      </header>
      
      {/* Content Cards Section */}
      <section className="lorem-container">
        {contentData.map((data, index) => (
          <Card key={index} index={index} title={data.title} content={data.content} />
        ))}
      </section>
      
      <div style={{ height: '50vh' }}></div>
    </>
  );

  return (
    <div className="homepage-container">
      <div className="background-image-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/ai-consciousness-illusion.webp)` }}></div>
      
      <nav ref={navRef} className={`navbar ${navInView ? 'show' : 'hidden'}`}>
        <div className="nav-logo">
          <img src={process.env.PUBLIC_URL + '/SealingLogo.png'} alt="Sealing Logo" className="logo-image" />
          <span className="logo-text">sealing</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>About</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>Contact Us</a>
          </li>
        </ul>
      </nav>
      
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <ContactUs />}
    </div>
  );
};

export default App;