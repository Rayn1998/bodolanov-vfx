import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import {Autoplay, FreeMode, Scrollbar, EffectCoverflow} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import bomba from '../images/posters/bomba.jpeg'
import konek from '../images/posters/konek.jpeg'
import mira from '../images/posters/mira.jpeg'
import obitel from '../images/posters/obitel.jpeg'
import optimisty2 from '../images/posters/optimisty2.jpeg'
import parma from '../images/posters/parma.jpeg'
import polyarniy2 from '../images/posters/polyarniy2.jpeg'
import rescue_day from '../images/posters/rescue_day.jpeg'
import sobor from '../images/posters/sobor.jpeg'
import vezet from '../images/posters/vezet.jpeg'
import niletto from '../images/posters/niletto.jpeg'
import polo from '../images/posters/polo.jpeg'
import vici from '../images/posters/vici.jpeg'
import kukuruza from '../images/posters/kukuruza.jpg'
import empireV from '../images/posters/empireV.jpg'
import led3 from '../images/posters/led3.jpeg'
import hockey_dads from '../images/posters/hockey_dads.jpeg'
import slow_dancing from '../images/posters/slow_dancing.jpeg'


const Carousel = () => {
    const posters = [
        niletto, 
        konek,
        mira,
        obitel,
        empireV,
        optimisty2,
        parma,
        polyarniy2,
        rescue_day,
        sobor,
        vezet,
        bomba,
        polo,
        vici,
        kukuruza,
        led3,
        slow_dancing,
        hockey_dads,
    ]
    return (
        <>
            <div style={{
                margin: '100px 50px'
            }}>
                <Swiper 
                    modules={[Autoplay, FreeMode, Scrollbar, EffectCoverflow]}
                    effect='coverflow'
                    coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 200,
                    }}
                    grabCursor='true'
                    centeredSlides='true'
                    loop='true'
                    scrollbar={{
                        draggable: true,
                    }}
                    autoplay={{
                        autoplay: false,
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        1400: {
                            slidesPerView: 4
                        },
                        800: {
                            slidesPerView: 3
                        },
                        500: {
                            spaceBetween: 0,
                            slidesPerView: 2,
                            overflowEffect: {
                                stretch: 200,
                                depth: 200,
                            }
                        },
                        400: {
                            spaceBetween: 0,
                            slidesPerView: 2
                        }
                    }}
                >
                    {posters.map((poster, i) => {
                        return(
                            <SwiperSlide key={i} >
                                <LazyLoadImage src={poster} 
                                    // key={i} 
                                    effect='opacity'
                                    className='carousel-element' 
                                    alt={poster} 
                                    loading='lazy'
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default Carousel