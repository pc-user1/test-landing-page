import React from 'react'
import Header from './common/header'
import Footer from './common/footer'

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <form className="form">
          <p>
            <input
              type="text"
              name="name"
              className="feedback-input"
              placeholder="Name"
              id="name"
            />
          </p>
          <p>
            <input
              type="email"
              name="name"
              className="feedback-input"
              placeholder="Email"
              id="email"
            />
          </p>
          <p>
            <textarea name="text" id="comment" placeholder="Comment" className="feedback-input" />
          </p>
          <input type="submit" value="Submit" className="button-submit" />
          <div className="ease" />
        </form>
      </main>
      <Footer />
    </>
  )
}

Contact.propTypes = {}

export default Contact
