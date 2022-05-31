import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Bienvenido a mi <br/>
                Portafolio Personal
            </SectionTitle>
            <SectionText>
                <p>
                    Soy un desarrollador web con experiencia en el desarrollo de aplicaciones web.
                </p>
                <p>
                    He creado este sitio web para que nos podamos conocer un poco más en profundidad.
                </p>
            </SectionText>
            {/*TODO: Add cv download*/}
            <Button><a style={{color: "white"}} href="cv.pdf" download target="_blank">¿Quieres saber más?</a>
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
