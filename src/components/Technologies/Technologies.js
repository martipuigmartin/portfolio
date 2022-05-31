import React from 'react';

import {
    DiBootstrap,
    DiJava,
    DiJavascript1,
    DiJqueryLogo,
    DiLaravel, DiMongodb, DiMysql,
    DiNodejsSmall,
    DiPhp,
    DiReact, DiSass,
} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';

const Technologies = () => (
    <Section id='tech'>
        <SectionDivider/>
        <SectionTitle main>Tecnologías</SectionTitle>
        <SectionText>
            En esta sección se muestran las tecnologías que he utilizado en mis proyectos.
        </SectionText>
        <br/>
        <br/>
        <ListContainer>
            <List>
                <ListTitle>Frontend</ListTitle>
                <ListItem>
                    <ListParagraph>
                        <DiJavascript1 size={50}/>
                    </ListParagraph>
                </ListItem>
            </List>
            <List>
                <ListTitle>Backend</ListTitle>
                <ListItem>
                    <ListParagraph>
                        <DiPhp size={50}/>
                    </ListParagraph>
                </ListItem>
                <ListItem>
                    <ListParagraph>
                        <DiJava size={50}/>
                    </ListParagraph>
                </ListItem>
                <ListItem>
                    <ListParagraph>
                        <span>Solidity</span>
                    </ListParagraph>
                </ListItem>
            </List>
            <List>
                <ListTitle>Frameworks</ListTitle>
                <ListItem>
                    <ListParagraph>
                        <DiReact size={50}/>
                    </ListParagraph>
                </ListItem>
                <ListItem>
                    <ListParagraph>
                        <DiNodejsSmall size={50}/>
                    </ListParagraph>
                </ListItem>
                <ListItem>
                    <ListParagraph>
                        <DiLaravel size={50}/>
                    </ListParagraph>
                </ListItem>
                <ListItem>
                    <ListParagraph>
                        <DiJqueryLogo size={50}/>
                    </ListParagraph>
                </ListItem>
            </List>
            <List>
                <ListTitle>BBDD</ListTitle>
                <ListItem>
                    <ListParagraph>
                        <DiMongodb size={50}/>
                    </ListParagraph>
                </ListItem>
                <ListItem>
                    <ListParagraph>
                        <DiMysql size={50}/>
                    </ListParagraph>
                </ListItem>
            </List>
            <List>
                <ListTitle>Maquetación</ListTitle>
                <ListItem>
                    <ListParagraph>
                        <DiBootstrap size={50}/>
                    </ListParagraph>
                </ListItem>
                <ListItem>
                    <ListParagraph>
                        <span>Tailwind</span>
                    </ListParagraph>
                </ListItem>
                <ListItem>
                    <ListParagraph>
                        <DiSass size={50}/>
                    </ListParagraph>
                </ListItem>
            </List>
        </ListContainer>
    </Section>
);

export default Technologies;
