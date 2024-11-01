import React, { useState, useEffect } from 'react'
import './main.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slides = [
    ...Array.from({ length: totalSlides }, (_, index) => index),
    0,
    1
  ];

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
        <div className='container'>
            <div className='left-content'>
                <h3>Solutions and services</h3>
                <div className='left-content-text'>
                    <h1>
                        big data 2021
                    </h1>
                    <p>
                        Learn about the possibilities of digital platforms and scenarios for using Big Data, which are relevant for 95% of Russian and foreign companies
                    </p>
                    <button>
                        More
                    </button>
                </div>
            </div> 
            <div className='right-content'>
                <div className='cards-slider'>
                    <div 
                      className='cards'
                      style={{ 
                        transform: `translateX(-${currentSlide * 270}px)`
                      }}
                    >
                        {slides.map((index) => (
                            <div key={index} className='card'>
                                <img 
                                    className='card-img' 
                                    src={require(`../../assets/${(index % totalSlides) + 1}.jpeg`)} 
                                    alt={`card-${index + 1}`} 
                                />
                                {index % totalSlides === 2 && (
                                    <div className='play-button'>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='carousel-controls'>
                    <div className='arrow-buttons'>
                        <button className='arrow-button' onClick={prevSlide}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className='arrow-button' onClick={nextSlide}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                    <div className='progress-bar'>
                        <div 
                          className='progress'
                          style={{ 
                            width: `${((currentSlide + 1) / totalSlides) * 100}%` 
                          }}
                        ></div>
                    </div>
                    <span className='slide-number'>
                        {String(currentSlide + 1).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </div>
    </main>
  )
}
