import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <div>
      <Jumbotron className="home-jumbotron text-light" style={{
        "background-image": "url('https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80')"
      }}>
        <div className="home-jumbotron__content">
          <h1>Hi, I&apos;m Bella!</h1>

          <p>I do stuff and things, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam optio corrupti quis, tempore quidem earum soluta facilis numquam nulla?</p>

          <p>
            <LinkContainer to="/projects">
              <Button>See my work</Button>
            </LinkContainer>
          </p>
        </div>
        <div className="home-jumbotron__overlay"></div>
      </Jumbotron>

      <h2>About me</h2>

      <div className="row">
        <div className="col-md-6">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus laboriosam recusandae laudantium tenetur tempore officia veritatis repellendus. Explicabo possimus, aliquid et voluptate optio, hic officiis harum accusantium sequi, dolores pariatur. Nulla incidunt nisi quis qui quae accusantium, eum similique iste? Itaque optio, dignissimos culpa architecto atque quam quidem! Assumenda officiis explicabo quam quasi tenetur, vero quisquam autem culpa nam?</p>
        </div>
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero enim vitae illo. Deleniti consequuntur voluptate libero, nulla corporis alias expedita velit tempore, laudantium aliquid aut voluptatum suscipit atque numquam officiis neque quaerat quis error quam sint repellat. Non voluptates autem dolores cum illum architecto possimus quidem numquam hic ullam magni corrupti, ex laborum? Iste inventore tenetur quaerat aspernatur!</p>
        </div>
      </div>

      <h3>Some points</h3>

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
  );
};

export default Home;
