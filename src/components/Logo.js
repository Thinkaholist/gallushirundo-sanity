import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    height: 100%;
    max-height: 2rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    transform: scale(1.6);
  }

  span {
    font-weight: 700;
    font-size: 20px;
    margin-left: 0.5rem;
  }
`;

const Logo = () => (
  <LogoStyles>
    {/* Kiszedtem a logo-t, amíg nincs meg fehérben */}
    {/* <img src='/static/logo.png' alt='Gallus &amp; Hirundo logo' /> */}
    <span>Gallus &amp; Hirundo</span>
  </LogoStyles>
);

export default Logo;
