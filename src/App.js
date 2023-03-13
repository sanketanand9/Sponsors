import React from "react";
import styled from "styled-components";
import spons from './spons';
import SponsorItem from "./SponsorItem";


function App() {
//-------

const renderSponsors = (spons, num) => {
  return spons.map((data, index) => {
    const { name, src, imgName, title, link } = data;
    return (
      
      <div className="sss" key={index}>
        <SponsorItem
          alt={imgName}
          name={name}
          src={src}
          title={title}
          link={link}
        />
      </div>
    );
  });
};


//-----

  return (
    <div>
      <div className='title'>
        <h1>Thank you to our sponsors</h1>
        <img src={require('./assets/Asset 3.png')} alt="Logo" className='kala'/>
      </div>
      <SponsorContainer className="row">
      {renderSponsors(spons, 6)}
      </SponsorContainer>

    </div>
  );
}

export default App;

const SponsorContainer = styled.div`
  background: rgb(14, 14, 14);
  background: linear-gradient(
    0deg,
    rgba(14, 14, 14, 1) 0%,
    rgba(11, 0, 16, 1) 15%,
   
  );
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  --bs-gutter-x: 0 !important;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 800;
  /* font-size: larger; */
  padding: 100px 100px;
  @media (max-width: 1000px) {
    margin: 100px 0;
  }
  @media (max-width: 500px) {
    margin: 67px 0;
    padding: 50px 50px;
  }
  .current {
    text-transform: uppercase;
  }
  h2 {
    text-align: center;
    margin: 2rem 0;
    font-weight: 900;
  }
  > .c {
    display: flex;
    justify-content: center;
  }
`;