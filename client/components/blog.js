import React from 'react'
import Header from './common/header'
import Footer from './common/footer'

const Blog = () => {
  return (
    <>
      <Header />
      <main>
        <div className="blog-container">
          <div className="blog-header">
            <div className="blog-cover" />
          </div>
          <div className="blog-body">
            <div className="blog-title">
              <h2>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </h2>
            </div>
            <div className="blog-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aspernatur, asperiores
                repudiandae quidem aperiam, pariatur in molestias iste, expedita officiis doloribus
                porro earum non tempore. Id dolores ducimus aliquam. Dolorum, hic, natus. Voluptatem
                modi in necessitatibus ipsum, officia earum distinctio.
              </p>
            </div>
            <div className="blog-tags">
              <ul>
                <li>
                  <a href="#">necessitatibus</a>
                </li>
                <li>
                  <a href="#">voluptatem</a>
                </li>
                <li>
                  <a href="#">consectetur</a>
                </li>
                <li>
                  <a href="#">officiis</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-footer">
            <ul>
              <li className="publiszed-date"> 2 days ago</li>
            </ul>
          </div>
        </div>

        <div className="blog-container">
          <div className="blog-header">
            <div className="blog-cover" />
          </div>
          <div className="blog-body">
            <div className="blog-title">
              <h2>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </h2>
            </div>
            <div className="blog-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aspernatur, asperiores
                repudiandae quidem aperiam, pariatur in molestias iste, expedita officiis doloribus
                porro earum non tempore. Id dolores ducimus aliquam. Dolorum, hic, natus. Voluptatem
                modi in necessitatibus ipsum, officia earum distinctio.
              </p>
            </div>
            <div className="blog-tags">
              <ul>
                <li>
                  <a href="#">necessitatibus</a>
                </li>
                <li>
                  <a href="#">voluptatem</a>
                </li>
                <li>
                  <a href="#">consectetur</a>
                </li>
                <li>
                  <a href="#">officiis</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-footer">
            <ul>
              <li className="publiszed-date"> 3 days ago</li>
            </ul>
          </div>
        </div>

        <div className="blog-container">
          <div className="blog-header">
            <div className="blog-cover" />
          </div>
          <div className="blog-body">
            <div className="blog-title">
              <h2>
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </h2>
            </div>
            <div className="blog-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aspernatur, asperiores
                repudiandae quidem aperiam, pariatur in molestias iste, expedita officiis doloribus
                porro earum non tempore. Id dolores ducimus aliquam. Dolorum, hic, natus. Voluptatem
                modi in necessitatibus ipsum, officia earum distinctio.
              </p>
            </div>
            <div className="blog-tags">
              <ul>
                <li>
                  <a href="#">necessitatibus</a>
                </li>
                <li>
                  <a href="#">voluptatem</a>
                </li>
                <li>
                  <a href="#">consectetur</a>
                </li>
                <li>
                  <a href="#">officiis</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-footer">
            <ul>
              <li className="publiszed-date"> 4 days ago</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

Blog.propTypes = {}

export default Blog
