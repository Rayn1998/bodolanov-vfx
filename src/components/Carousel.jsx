import React from 'react'
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


const Carousel = () => {
    const posters = [
        bomba, 
        konek,
        mira,
        obitel,
        optimisty2,
        parma,
        polyarniy2,
        rescue_day,
        sobor,
        vezet
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
                        300: {
                            spaceBetween: 0,
                            slidesPerView: 1
                        }
                    }}
                >
                    {posters.map(poster => {
                        return(
                            <SwiperSlide>
                                <img src={poster} className='carousel-element' alt={poster} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default Carousel