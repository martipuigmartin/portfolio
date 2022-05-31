import React, {useEffect, useState} from 'react';

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Img,
    Tag,
    TagList,
    TitleContent,
    UtilityList
} from './ProjectsStyles';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {projectImage} from "../../constants/constants";

import axios from "axios";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const response = await axios.get('https://api.github.com/users/martipuigmartin/repos');
        setProjects(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <Section noppading id='projects'>
            <SectionDivider/>
            <SectionTitle main>Proyectos</SectionTitle>
            <GridContainer>
                {projects.map((project, index) => (
                    <BlogCard key={index}>
                        <Img src={projectImage[index].image}/>
                        <TitleContent>
                            <HeaderThree>{project.name}</HeaderThree>
                            <Hr/>
                        </TitleContent>
                        <CardInfo>{project.description}</CardInfo>
                        <Hr/>
                        <div>
                            <TagList>
                                {project.topics.map((topic, index) => (
                                    <Tag key={index}>{topic}</Tag>
                                ))}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={project.html_url}>Ver código</ExternalLinks>
                        </UtilityList>
                    </BlogCard>))
                }
            </GridContainer>
        </Section>
    )
};

export default Projects;
