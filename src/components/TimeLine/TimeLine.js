import React, {useState, useRef, useEffect} from 'react';

import {
    CarouselButton,
    CarouselButtonDot,
    CarouselButtons,
    CarouselContainer,
    CarouselItem,
    CarouselItemImg,
    CarouselItemText,
    CarouselItemTitle,
    CarouselMobileScrollNode
} from './TimeLineStyles';
import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {TimeLineData} from '../../utils/utils';

const Timeline = () => {
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef();

    const scroll = (node, left) => {
        return node.scrollTo({left, behavior: 'smooth'});
    };

    const handleClick = (e, i) => {
        e.preventDefault();

        if (carouselRef.current) {
            const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

            scroll(carouselRef.current, scrollLeft);
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

            setActiveItem(index);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            scroll(carouselRef.current, 0);
        };
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <Section id='above'>
            <SectionTitle>Sobre mi</SectionTitle>
            <SectionText>
                <p>
                    Mi nombre es Martí, vivo en Sant Celoni, un pueblecito al lado de Granollers.
                </p>
                <p>
                    Siempre me he considerado una persona muy curiosa, me gusta aprender cosas nuevas. Esto me ha
                    permitido expandir mis conocimientos y explorar nuevas tecnologías.
                </p>
                <p>
                    Soy una persona muy sociable, me gusta compartir mi conocimiento con otros, y que ellos hagan lo
                    mismo conmigo.
                </p>
                <p>
                    Si crees que podemos encajar, tienes mis redes <a style={{color: "white", fontWeight: 'bold'}}
                                                                      href='#nav'>arriba</a> a la derecha. Si quieres
                    contactar directamente conmigo, aquí <a style={{color: "white", fontWeight: 'bold'}}
                                                            href='#above'>abajo</a>, también a la derecha, tienes mis
                    datos de contacto.
                </p>
            </SectionText>
            <br/>
            <br/>
            <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
                <>
                    {TimeLineData.map((item, i) => (
                        <CarouselMobileScrollNode key={i}>
                            <CarouselItem
                                index={i}
                                id={`carousel_item` - {i}}
                                active={activeItem}
                                onClick={(e) => handleClick(e, i)}
                            >
                                <CarouselItemTitle>{item.year}
                                    <CarouselItemImg
                                        width="208"
                                        height="6"
                                        viewBox="0 0 208 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                                            fill="url(#paint0_linear)"
                                            fill-opacity="0.33"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="-4.30412e-10"
                                                y1="0.5"
                                                x2="208"
                                                y2="0.500295"
                                                gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop
                                                    offset="0.79478"
                                                    stop-color="white"
                                                    stop-opacity="0"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </CarouselItemImg>
                                </CarouselItemTitle>
                                <CarouselItemText>{item.text}</CarouselItemText>
                            </CarouselItem>
                        </CarouselMobileScrollNode>
                    ))}
                </>
            </CarouselContainer>
            <CarouselButtons>
                {TimeLineData.map((item, i) => (
                    <CarouselButton
                        key={i}
                        index={i}
                        id={`carousel_button` - {i}}
                        active={activeItem}
                        onClick={(e) => handleClick(e, i)}
                        type="button"
                    >
                        <CarouselButtonDot active={activeItem}/>
                    </CarouselButton>
                ))}
            </CarouselButtons>
        </Section>
    );
};

export default Timeline;
