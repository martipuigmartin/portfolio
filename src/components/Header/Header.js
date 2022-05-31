import React from 'react';
import Link from 'next/link';

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';

import {Container, IconNavBar, NavBarItems, NavLink, SocialIcons, Span, SocialMediaCol} from './HeaderStyles';

const Header = () => (
    <Container id='nav'>
        <IconNavBar>
            <Link href="/">
                <a style={{display: 'flex', alignItems: 'center', color: 'white'}}>
                    <DiCssdeck size={30}/> <Span>Portafolio</Span>
                </a>
            </Link>
        </IconNavBar>
        <NavBarItems>
            <li>
                <Link href="#projects">
                    <NavLink>Proyectos</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Tecnologías</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#above">
                    <NavLink>Sobre mi</NavLink>
                </Link>
            </li>
        </NavBarItems>
        <SocialMediaCol>
            <SocialIcons href='https://github.com/martipuigmartin'>
                <AiFillGithub size={30}/>
            </SocialIcons>
            <SocialIcons href='https://www.linkedin.com/in/martipuigmartin'>
                <AiFillLinkedin size={30}/>
            </SocialIcons>
        </SocialMediaCol>
    </Container>
);

export default Header;
