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
            <Button>¿Quieres saber más?
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
