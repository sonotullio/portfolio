import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { LeftSection } from '../Hero/HeroStyles';

const Technologies = () =>  (
  <>
    <Section id="tech">
      <SectionDivider divider />
      <LeftSection>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
          I've worked with a range of technologies in the web development world.
          From Back-end To Design
        </SectionText>
        <List>
          <ListItem>
            <picture>
              <DiFirebase size="3rem" />
            </picture>
            <ListContainer>
              <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                Java | Spring | MySql
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <picture>
              <DiReact size="3rem" />
            </picture>
            <ListContainer>
              <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                Experiece with <br />
                React | Angular
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem>
            <picture>
              <DiZend size="3rem" />
            </picture>
            <ListContainer>
              <ListTitle>UI/UX</ListTitle>
              <ListParagraph>
                Experience with <br />
                tools like Figma
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
      </LeftSection>
      <SectionDivider colorAlt />
    </Section>
  </>
);

export default Technologies;
