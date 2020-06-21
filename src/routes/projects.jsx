import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>

      <p className="mb-3 mb-md-5">Here are some of the projects I&apos;ve worked on. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque magnam optio quo laboriosam maiores temporibus! Dignissimos eos molestias at!</p>

      {/* Project - Buy Some Thyme */}
      <div className="project-section mb-3 mb-md-5">
        <h2 className="mb-3">Buy Some Thyme</h2>

        <Carousel className="mb-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <p>Buy some thyme was cool because X, Y and Z. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure veniam soluta ad odit quia unde repellat doloribus, reiciendis necessitatibus! Fuga cum tenetur quasi aliquam. Consectetur nihil explicabo officia animi! Facere in aspernatur dicta odio repudiandae perspiciatis temporibus est ipsa nulla vel unde recusandae, veniam alias cum sequi totam quod.</p>

        <h3>Skills &amp; Experience</h3>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Ea, dolores non.</li>
              <li>Quia, nesciunt magnam?</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Minima harum modi eveniet.</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Project - Travel App (?) */}
      <div className="project-section mb-3 mb-md-5">
        <h2 className="mb-3">Travel App</h2>

        <Carousel className="mb-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <p>This project was cool because X, Y and Z. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure veniam soluta ad odit quia unde repellat doloribus, reiciendis necessitatibus! Fuga cum tenetur quasi aliquam. Consectetur nihil explicabo officia animi! Facere in aspernatur dicta odio repudiandae perspiciatis temporibus est ipsa nulla vel unde recusandae, veniam alias cum sequi totam quod.</p>

        <h3>Skills &amp; Experience</h3>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Ea, dolores non.</li>
              <li>Quia, nesciunt magnam?</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Minima harum modi eveniet.</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Project - NCOWNZ */}
      <div className="project-section mb-3 mb-md-5">
        <h2 className="mb-3">NCOWNZ</h2>

        <Carousel className="mb-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <p>This project was cool because X, Y and Z. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure veniam soluta ad odit quia unde repellat doloribus, reiciendis necessitatibus! Fuga cum tenetur quasi aliquam. Consectetur nihil explicabo officia animi! Facere in aspernatur dicta odio repudiandae perspiciatis temporibus est ipsa nulla vel unde recusandae, veniam alias cum sequi totam quod.</p>

        <h3>Skills &amp; Experience</h3>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Ea, dolores non.</li>
              <li>Quia, nesciunt magnam?</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Minima harum modi eveniet.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
