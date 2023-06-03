import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from "next/link";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Tullio Forneris <br />
        </SectionTitle>
        <h4 style={{ color: 'white', textAlign: 'flex-start', padding: '1rem' }}>Full Stack Developer, Milan (Italy)</h4>
        <SectionText>
          "You aren't writing code. You're solving problems. Coding is just the tool."
        </SectionText>
        <Button><Link href="mailto:tforneris94@gmail.com"><span style={{color: 'white'}}>Contact Me</span></Link></Button>
      </LeftSection>
    </Section>
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8rem' }}>
      <img src={'/images/programmer.png'} height={300} width={300} />
    </div>
  </>
);

export default Hero;