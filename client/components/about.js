import React from 'react'
import Header from './common/header'
import Footer from './common/footer'

const About = () => {
  return (
    <>
      <Header />
      <main>
        <div className="about__container">
          <img src="images/cat1.gif" alt="cat" />
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, consequatur, nesciunt!
            Quas vel vero dolorem ipsum dignissimos in asperiores voluptatibus distinctio laborum
            qui officia natus dolore et veritatis sapiente eum quae, debitis assumenda soluta
            accusantium velit? Quos earum cum magni provident quisquam quia voluptatum saepe numquam
            iure. Recusandae officia, illum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, consequatur, nesciunt!
            Quas vel vero dolorem ipsum dignissimos in asperiores voluptatibus distinctio laborum
            qui officia natus dolore et veritatis sapiente eum quae, debitis assumenda soluta
            accusantium velit? Quos earum cum magni provident quisquam quia voluptatum saepe numquam
            iure. Recusandae officia, illum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, consequatur, nesciunt!
            Quas vel vero dolorem ipsum dignissimos in asperiores voluptatibus distinctio laborum
            qui officia natus dolore et veritatis sapiente eum quae, debitis assumenda soluta
            accusantium velit? Quos earum cum magni provident quisquam quia voluptatum saepe numquam
            iure. Recusandae officia, illum.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

About.propTypes = {}

export default About
