import React from 'react'
import Header from './common/header'
import Footer from './common/footer'

const Location = () => {
  return (
    <>
      <Header />
      <main className="mapInfo">
        <pre>
          <strong>Adress:</strong> Lorem ipsum Street Lorem, ipsum, dolor 45.
          <strong>
            <br />
            Phone:
          </strong>{' '}
          880055535
        </pre>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="My Daily Marathon Tracker"
              width="1080"
              height="511"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
            <a href="https://embedgooglemap.net/maps/67">embedgooglemap.net</a>

            <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

Location.propTypes = {}

export default Location
