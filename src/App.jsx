// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { ButtonCard } from './Components/ButtonCard';
import PortfolioDetail from './Views/PortfolioDetail';
import MeowMeowFightDetail from './Views/MeowMeowFightDetail';
import MedicationDetail from "./Views/MedicationDetail";
import CV from "./Views/CV";


function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: "Europe/Madrid", hour: "2-digit", minute: "2-digit" };
      setLocalTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-menu">
          <h4>Menu</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Socials</h4>
          <ul>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/tianyu_075/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://github.com/tianyu-075" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-right">
          <span className="footer-time">Local Time (Spain): {localTime}</span>
          <button className="back-to-top" onClick={scrollToTop}>
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}




function App() {
  
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const fullText = 'hello,i am Tianyu,full stack developer';


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeNextChar, 150);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setTypedText('');
          currentIndex = 0;
          setTimeout(typeNextChar, 500);
        }, 3000);
      }
    };

    setTimeout(typeNextChar, 1000);
    return () => {
      setTypedText('');
      setIsTyping(true);
    };
  }, []);

  // Sticky bar 
  const stickyBar = (
    <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <h1 className="clickable-title" onClick={() => setCurrentPage("home")}>
          TIANYU
        </h1>
        <nav className="navigation">
         <a
          onClick={() => {
            setCurrentPage("home");
            setTimeout(() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
        >
          About
        </a>

        <a
          onClick={() => {
            setCurrentPage("home");
            setTimeout(() => {
              document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
        >
          Project
        </a>

        <a
          onClick={() => {
            setCurrentPage("home");
            setTimeout(() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
        >
          Contact
        </a>
      </nav>
    </div>
  </header>
);


  const renderPage = () => {
    switch (currentPage) {
      case 'cv':
        return <CV onBack={() => setCurrentPage('home')} />;
      case 'portfolio':
        return <PortfolioDetail />;
      case 'meowmeow':
        return <MeowMeowFightDetail />;
      case 'medication':
        return <MedicationDetail />;
      default:

      
        return (
          <main className="main-content">
            
            <section>
              <div className="typing-container">
                <div className="typing-animation">
                  {typedText}
                  <span className={`cursor ${isTyping ? 'typing' : ''}`}>|</span>
                </div>
              </div>

              
              <div id="about" className="cvcontainer">
                <img
                  className="codinganime-gif"
                  src="/src/assets/coding-anime.gif"
                  alt="coding"
                />
                <ButtonCard
                  className="buttonCardPortfolio"
                  title="Know more about developer Tianyu"
                  description="Click to check Tianyu CV"
                  onClick={() => setCurrentPage('cv')}
                />
              </div>

              
              <div id="project" className="project2container">
                <div className="center-container">
                  <img
                    className="center-img"
                    src="/src/assets/catmon.jpg"
                    alt="Catmon"
                  />
                  <ButtonCard
                    className="buttonCardMeow"
                    title="View MeowMeowFright Details"
                    description="Click to explore detailed MeowMeowFight projects"
                    onClick={() => setCurrentPage('meowmeow')}
                  />
                  <div className="centerp">
                    A retro-style browser game built with React for the frontend and Node.js/Express for the backend. Players assemble a team of cats and engage in turn-based battles against street cats.
                  </div>
                </div>
              </div>

              
              <div className="project3">
                <div className="project3-left">
                  <img
                    className="project3-bigImage"
                    src="/src/assets/syno.png"
                    alt="Big Left"
                  />
                  <ButtonCard
                    className="buttonCardMedication"
                    title="View Medication Details"
                    description="Click to explore Medication projects"
                    onClick={() => setCurrentPage('medication')}
                  />
                </div>
                <div className="project3-right">
                  <img
                    className="project3-smallImage"
                    src="/src/assets/synoapp.png"
                    alt="Small Right"
                  />
                  <ButtonCard
                    className="buttonCardMedicationSmall"
                    title="More..."
                    description="Click to App Store page"
                    onClick={() => window.open('https://apps.apple.com/es/app/syno/id6754502303?l=en-GB', '_blank')}
                  />
                </div>
              </div>

              
              <div className="image-container">
                <img
                  className="hadouken-gif"
                  src="/src/assets/wwwnami.jpg"
                  alt="Hadouken"
                />
                <ButtonCard
                  className="buttonCardPortfolio"
                  title="View Portfolio Details"
                  description="Click to explore detailed portfolio projects"
                  onClick={() => setCurrentPage('portfolio')}
                />
              </div>
            </section>

            
            <section id="contact" className="contact-section">



  <div className="contact-left">
    <img className="tenor-gif-embed"
                    src="/src/assets/anime-girl-wave.gif"
                    
                  />
      
      </div>
        
    
    


  <div className="contact-right">
    <div className="nes-card">
      <h3>📧 Contact Me</h3>
      <p>If you’d like to get in touch, feel free to email me!</p>
      <a
        href="mailto:tianyuu10@gmail.com"
        className="nes-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Send Email
      </a>
    </div>
  </div>
</section>
<Footer />
          </main>
        );
    }
  };

  return (
    <div className="App">
      {stickyBar}
      {renderPage()}
    </div>
  );
}

export default App;
