import React from 'react'
import Header from './common/header'
import Footer from './common/footer'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <img className="mainContent" src="images/city.jpg" alt="cat" />

        <div className="advantages__container">
          <div className="advantages">
            <div className="advantages__item">
              <img className="advantages__image" src="images/advantage1.png" alt="advantage1" />
              <h2 className="advantages__header">Advantage 1</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur, eius,
                velit debitis magni nam nihil possimus?
              </p>
            </div>
            <div className="advantages__item">
              <img className="advantages__image" src="images/advantage2.png" alt="advantage2" />
              <h2 className="advantages__header">Advantage 2</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur, eius,
                velit debitis magni nam nihil possimus?
              </p>
            </div>
            <div className="advantages__item">
              <img className="advantages__image" src="images/advantage3.png" alt="advantage3" />
              <h2 className="advantages__header">Advantage 3</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur, eius,
                velit debitis magni nam nihil possimus?
              </p>
            </div>
            <div className="advantages__item">
              <img className="advantages__image" src="images/advantage4.png" alt="advantage4" />
              <h2 className="advantages__header">Advantage 4</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur, eius,
                velit debitis magni nam nihil possimus?
              </p>
            </div>
            <div className="advantages__item">
              <img className="advantages__image" src="images/advantage5.png" alt="advantage5" />
              <h2 className="advantages__header">Advantage 5</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur, eius,
                velit debitis magni nam nihil possimus?
              </p>
            </div>
            <div className="advantages__item">
              <img className="advantages__image" src="images/advantage6.png" alt="advantage6" />
              <h2 className="advantages__header">Advantage 6</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur, eius,
                velit debitis magni nam nihil possimus?
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

Home.propTypes = {}

export default Home
