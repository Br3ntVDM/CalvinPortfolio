import React, { useState } from 'react';
import './App.css';
import profilePicture from './assets/propic.jpg';
import aboutPicture from './assets/aboutpic.jpg';
import webBackground from './assets/webbg.jpg';
import webBackgroundGame from './assets/webgame.jpg';
// WEBSITE IMGS
import web1v1 from './assets/web1-1.jpg';
import web1v2 from './assets/web1-2.png';
import web1v3 from './assets/web1-3.jpg';

import web2v1 from './assets/web2-1.jpg';
import web2v2 from './assets/web2-2.jpg';
import web2v3 from './assets/web2-3.jpg';

import web3v1 from './assets/web3-1.png';
import web3v2 from './assets/web3-2.png';
import web3v3 from './assets/web3-3.png';

// GAME IMGS
import game1v1 from './assets/game1-1.png';
import game1v2 from './assets/game1-2.jpg';
import game1v3 from './assets/game1-3.jpg';

import game2v1 from './assets/game2-1.jpg';
import game2v2 from './assets/game2-2.jpg';
import game2v3 from './assets/game2-3.jpg';

import game3v1 from './assets/game3-1.jpg';
import game3v2 from './assets/game3-2.jpg';
import game3v3 from './assets/game3-3.jpg';

import game4v1 from './assets/game4-1.jpg';
import game4v2 from './assets/game4-2.jpg';
import game4v3 from './assets/game4-3.jpg';

import headGif from './assets/headgif.gif';
import headGifGame from './assets/headgif3.gif';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectCard({ title, images, link, description, activeTab }) {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const cardClassName = activeTab === 'web' ? 'web-project-card' : 'game-project-card';

  return (
    <div className={`project-card ${cardClassName}`}>
      <div className="slideshow-container">
        <img src={images[currentImageIndex]} alt={`Project Image`} />
      </div>
      <h3>{title}</h3>
      <button onClick={handleOpenModal}>View Details</button>
      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{title}</h2>
            <div className="slideshow-container-modal">
              <img src={images[currentImageIndex]} alt={`Project Image`} />
              <button onClick={handlePrevImage}>Previous</button>
              <button onClick={handleNextImage}>Next</button>
            </div>
            <p>{description}</p> {/* Description */}
            <a href={link}>Go to Project</a>
          </div>
        </div>
      )}
    </div>
  );
}

function AboutSection({ title, content, activeTab }) {
  const gradientStartColor = activeTab === 'web' ? 'blue' : 'red';
  const gradientEndColor = activeTab === 'web' ? 'red' : 'blue';
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, ${gradientStartColor}, ${gradientEndColor})`,
  };

  return (
    <div className="about-section" style={backgroundStyle}>
      <div className="about-image">
        <img src={aboutPicture} alt="aboutPicture" />
      </div>
      <div className="about-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('web');
  const [headerBackground, setHeaderBackground] = useState(headGif);
  const [bodyBackground, setBodyBackground] = useState(webBackground);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'game') {
      setHeaderBackground(headGifGame);
      setBodyBackground(webBackgroundGame);
    } else {
      setHeaderBackground(headGif);
      setBodyBackground(webBackground);
    }
  };

  const headingStyle = {
    color: activeTab === 'web' ? 'white' : 'black',
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bodyBackground})` }}>
      <header style={{ backgroundImage: `url(${headerBackground})` }}>
        <img src={profilePicture} alt="Profile Picture" />
        <div className="header-text">
          <h1>Calvin Van Der Merwe Portfolio</h1>
        </div>
      </header>
      <section className="tabs">
        <button
          className={`tab-button web ${activeTab === 'web' ? 'active' : ''}`}
          onClick={() => handleTabChange('web')}
        >
          Web Design
        </button>
        <button
          className={`tab-button game ${activeTab === 'game' ? 'active' : ''}`}
          onClick={() => handleTabChange('game')}
        >
          Game Design
        </button>
      </section>
      {activeTab === 'web' && (
        <AboutSection
          title="About My Web Design"
          content="With over five years of experience in HTML5 and three years in CSS, I've honed my skills in crafting clean and visually appealing web interfaces. Building upon this foundation, I've spent the past two years mastering JavaScript, enabling me to create dynamic and interactive web applications. Additionally, my recent year-long immersion in React has equipped me with the ability to develop scalable and maintainable user interfaces. Completing my academic studies in Digital Arts at Wits University further enriched my knowledge, providing me with a solid understanding of React. As a skilled front-end developer, I bring a blend of technical expertise and creative problem-solving to every project, committed to delivering high-quality solutions that exceed expectations and drive user engagement."
          activeTab={activeTab}
        />
      )}
      {activeTab === 'game' && (
        <AboutSection
          title="About My Game Design"
          content="With four years of dedicated study in digital arts at Wits University, specializing in game design, I've acquired a comprehensive understanding of game development principles. My two years of experience in analogue game design coupled with two years in digital game design have equipped me with a deep appreciation for game mechanics and player engagement strategies. Proficient in C# for game development, particularly in Unity, I thrive as a mechanics programmer and possess a strong aptitude for collaborative work within teams."
          activeTab={activeTab}
        />
      )}
      <section className="projects">
        {activeTab === 'web' && (
          <>
            <h2 style={headingStyle}>Web Design Projects</h2>
            <div className="project-cards">
              <ProjectCard
                title="MentalHealth Website"
                images={[web1v1, web1v2, web1v3]}
                link="https://br3ntvdm.github.io/MentalHealthWebsite.github.io/"
                description="This website uses html css and java to create a website that is centered around ones mental welling being as its theme"
                activeTab={activeTab}
              />
              <ProjectCard
                title="ArtRevolution Website"
                images={[web2v1, web2v2, web2v3]}
                link="https://br3ntvdm.github.io/Art-Revolution/"
                description="This is my favorite website made using the React framework and JavaScript. The point of the website is to mimic a museum showing off artworks and display art from the Renaissance. The style is very pleasing and looks good but due to high image resolution, it’s slow to load. ----NB*load the page by clicking on home."
                activeTab={activeTab}
              />
              <ProjectCard
                title="Auto-Yard Website"
                images={[web3v1, web3v2, web3v3]}
                link="https://br3ntvdm.github.io/Auto-Yard/"
                description="This is one of my more recent react projects and i used it to show case a business website. This website is modelled after the WeBuyCars website is made to look similar in terms of layout but with my own styling and colors. -- NB* Click on the AutoYards heading to start at the homepage and navigate through the site."
                activeTab={activeTab}
              />
            </div>
          </>
        )}
        {activeTab === 'game' && (
          <>
            <h2 style={headingStyle}>Game Design Projects</h2>
            <div className="project-cards">
              <ProjectCard
                title="Shellter Party"
                images={[game1v1, game1v2, game1v3]}
                link="https://github.com/Br3ntVDM/Shellter-Party"
                description="This game is called Shelter Party it’s a resource management game where the player is a snail and must collect ingredients out in the backyard to create dishes before lunchtime."
                activeTab={activeTab}
              />
              <ProjectCard
                title="Parkour Controller"
                images={[game2v1, game2v2, game2v3]}
                link="https://github.com/Br3ntVDM/Parkour-Controller"
                description="This parkour controller was meant to be in my most recent game but due to a change in direction was cut. It features the ability to sprint and consume stamina, the ability to wall run a set distance, the ability to vault over small walls and the ability to run up walls."
                activeTab={activeTab}
              />
              <ProjectCard
                title="Bounders Inc"
                images={[game3v1, game3v2, game3v3]}
                link="https://github.com/Br3ntVDM/Bounders-Inc"
                description="This is one of the larger games I have worked on with a group. The game is very story-driven and resembles the Stanley parable. In this game, you are a new employee at a company and are forced to follow the rules until an opening that changes everything comes by. Now forced to solve puzzles to progress the player changes the world they reside in."
                activeTab={activeTab}
              />
              <ProjectCard
                title="Storage Slasher"
                images={[game4v1, game4v2, game4v3]}
                link="https://github.com/Br3ntVDM/Storage-Slasher"
                description="This is a retro-styled horror game called storage slasher and it features me as the main character. The game is modelled after the older resident evil games and so makes use of the travelling and puzzle mechanics"
                activeTab={activeTab}
              />
            </div>
          </>
        )}
      </section>
      <footer className="footer" style={{ background: `linear-gradient(to bottom right, ${activeTab === 'web' ? 'blue, black ' : 'red, black'})` }}>
        <div>
          <ul className="social_icon">
            <li>
              <a href="https://www.facebook.com/calvin.vandermerwe.98"><FacebookIcon/></a>
            </li>
            <li>
              <a href="https://www.instagram.com/yxng.brent/"><InstagramIcon/></a>
            </li>
            <li>
              <a href="https://github.com/Br3ntVDM"><GitHubIcon/></a>
            </li>
          </ul>
          <ul className="menu">
            <li><p>Contact me at:</p><a href="mailto:br3ntvd@gmail.com"> br3ntvd@gmail.com</a></li>
          </ul>
          <p>&copy;2024 CVDMPortfolio | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
