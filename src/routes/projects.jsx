import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>

      <p className="mb-3 mb-md-5">Here are some of the projects I&apos;ve worked on.</p>

      {/* Project - Buy Some Thyme */}
      <div className="project-section mb-3 mb-md-5">
        <h2 className="mb-3">Buy Some Thyme</h2>

        <Carousel className="mb-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/project_buysomethyme-01.png"
              alt="Mobile screenshots of different pages of the BuySomeThyme website"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/project_buysomethyme-02.png"
              alt="Storefront page at desktop size for BuySomeThyme website"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>

        <p>This projects brief was to make a custom theme in Wordpress for a made up business. Introduction: ‘Buy Some Thyme’ is a family-owned produce delivery business. They operate from their farm on Moonshine Rd, Upper Hutt. Their farm services the wider Wellington region by selling and delivering to suppliers and now they want to increase their business by directly selling and delivering to consumers. Home delivered grocery sales have exploded in recent months due to quarantine restrictions, ‘Buy Some Thyme’ wants to increase their sales and grow their business by offering convenience to consumers through an effective online presence. Providing quality healthy and affordable produce to NZ families is a key motivator to them, so they also want their site to showcase who they are, their farming practices, and their strong relationships with their customers.  </p>

        <h3>Skills &amp; Experience</h3>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Wordpress Customizer API</li>
              <li>PHP</li>
              <li>Deployment hosting</li>
              <li>Sociological and cultural implications in design</li>
              <li>Typographic principles</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Acceptance testing</li>
              <li>Compatibility testing</li>
              <li>Client engagement</li>
              <li>Contract formulation</li>
              <li>Training documentation and user over</li>

            </ul>
          </div>
        </div>
      </div>


      {/* Project - Transport App (?) */}
      <div className="project-section mb-3 mb-md-5">
        <h2 className="mb-3">Transport App</h2>

        <Carousel className="mb-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/project_transport-01.png"
              alt="Mobile screenshots of different steps from Transport App. A cute kiwi helps you along the way"
            />
            <Carousel.Caption>
              <h3>This is the final design (mobile first)</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/project_transport-02.png"
              alt="Mobile screenshots of different steps from Transport App. A cute kiwi helps you along the way"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/project_transport-03.png"
              alt="Mobile screenshots of different steps from Transport App. A date picker lets the user specify a date range"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>

        <p>Project brief - Tourism New Zealand is a Crown Entity funded by the New Zealand Government. Their task is to market NZ as a tourist destination to the world. They want to expand their brand to a single page application for transport. Focused on visitors staying for short periods, allowing them to book their own transport and plan their routes.
</p>

        <h3>Skills &amp; Experience</h3>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Hi-fi prototype building and design</li>
              <li>Integration of jQuery plugins (datepicker)</li>
              <li></li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Mobile first design</li>
              <li>User testing and research</li>
              <li>Form validation</li>
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
              src="/assets/images/project_ncownz-01.png"
              alt="Screenshot of existing NCOWNZ website on mobile and desktop, the mobile website is very hard to read"
            />
            <Carousel.Caption>
              <h3>NCOW&apos;s existing website</h3>
              <p>Assumptions (confirmed through user testing): From the home page you can’t understand what the organization is or what it does. Finding this information requires multiple page jumps and clicks, which is a lot of effort on behalf of the user. Their call to action buttons aren’t recognisable and are vague.Their layout and lack of images make the site lack visual appeal. The long twitter scroll is disorienting.
</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/project_ncownz-02.png"
              alt="Mobile screenshots of the redesigned NCOWNZ website"
            />

            <Carousel.Caption>
              <h3>My redesign of their website</h3>
              <p>This end product was the result of comprehensive UX process: user testing of existing site, survey, target audience, card sorts, wire frame feedback, user testing on final design</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <p>This project was a redesign of an existing website for National Council of Women. <br></br>Their goals are to: Increase awareness of gender equality issues in NZ, their priorities, and what they do as an organization. Call to action to join their organization through becoming a member, donating, staying informed via newsletter/social media/news on the site. Maintaining engagement of existing members through staying informed via newsletter/social media/news on the site.
</p>

        <h3>Skills &amp; Experience</h3>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>html</li>
              <li>CSS</li>
              <li>Treaty of Waitangi implication in website design</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Integrating bootstrap</li>
              <li>Requirements gathering</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
