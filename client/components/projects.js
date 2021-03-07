import React from 'react'
import Header from './common/header'
import Footer from './common/footer'

const Projects = () => {
  return (
    <>
      <Header />
      <main className="project">
        <div className="gallery">
          <div className="photo-item">
            <img src="images/gallery_slides/slide1.jpg" alt="1" />
          </div>
          <div className="photo-item">
            <img src="images/gallery_slides/slide2.jpg" alt="2" />
          </div>
          <div className="photo-item">
            <img src="images/gallery_slides/slide3.jpg" alt="3" />
          </div>
          <div className="photo-item">
            <img src="images/gallery_slides/slide4.jpg" alt="4" />
          </div>
          <div className="photo-item">
            <img src="images/gallery_slides/slide5.jpg" alt="5" />
          </div>
          <div className="photo-item">
            <img src="images/gallery_slides/slide6.jpg" alt="6" />
          </div>
          <div className="photo-item">
            <img src="images/gallery_slides/slide7.jpg" alt="7" />
          </div>
          <div className="photo-item">
            <img src="images/gallery_slides/slide8.jpg" alt="8" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

Projects.propTypes = {}

export default Projects
