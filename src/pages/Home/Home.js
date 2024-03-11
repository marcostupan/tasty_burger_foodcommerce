import React from 'react'

import Layout from '../../Components/Layouts/Layout'
import  '../../styles/HomeStyle.css';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';


function Home() {
  return (
    <>
      <Layout>
        {/* Home Section hero banner */}
        <Section1 />

        {/* Home section About */}

        <Section2 id="about" />

        {/* home section menu */}
        <Section3 id="menu" />

        {/* home section promotion  */}

        <Section4 id="shop" />

        {/* Home Section APP */}

        <Section5/>

        {/* Blog Section */}
        <Section6 to="blog" />

        {/* Section contact */}
        <Section7 to="contact" />

      </Layout>
    </>
  )
}

export default Home
