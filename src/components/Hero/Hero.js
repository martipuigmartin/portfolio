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
            <Button><a style={{color: "white"}} href={'https://www.getmanfred.com/es/perfil/martipuigmartin'}>¿Quieres
                saber más?</a>
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
