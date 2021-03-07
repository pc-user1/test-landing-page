import React from 'react'
import Header from './common/header'
import Footer from './common/footer'

const Services = () => {
  return (
    <>
      <Header />
      <main className="services">
        <img src="images/services.jpg" alt="services" />
        <div className="services__container">
          <div className="services__container__block">
            <h3>Lorem ipsum, dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur soluta
              corporis. Consectetur voluptas cupiditate nesciunt nostrum, aperiam quos suscipit?
            </p>
          </div>
          <div className="services__container__block">
            <h3>Lorem ipsum, dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur soluta
              corporis. Consectetur voluptas cupiditate nesciunt nostrum, aperiam quos suscipit?
            </p>
          </div>
          <div className="services__container__block">
            <h3>Lorem ipsum, dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur soluta
              corporis. Consectetur voluptas cupiditate nesciunt nostrum, aperiam quos suscipit?
            </p>
          </div>
          <div className="services__container__block">
            <h3>Lorem ipsum, dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur soluta
              corporis. Consectetur voluptas cupiditate nesciunt nostrum, aperiam quos suscipit?
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

Services.propTypes = {}

export default Services
