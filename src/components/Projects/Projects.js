import React, {useEffect, useState} from 'react';

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList
} from './ProjectsStyles';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';

import axios from "axios";
import {reformatString} from "../../utils/utils";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const response = await axios.get('https://api.github.com/users/martipuigmartin/repos');
        setProjects(response.data);
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
                        <TitleContent>
                            <HeaderThree>{reformatString(project.name)}</HeaderThree>
                            <Hr/>
                        </TitleContent>
                        <CardInfo>{project.description}</CardInfo>
                        <Hr/>
                        <div>
                            <TagList>
                                {project.topics.map((topic, index) => (
                                    <Tag key={index}>{reformatString(topic)}</Tag>
                                ))}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={project.html_url}>Ver proyecto</ExternalLinks>
                        </UtilityList>
                    </BlogCard>))
                }
            </GridContainer>
        </Section>
    )
};

export default Projects;
