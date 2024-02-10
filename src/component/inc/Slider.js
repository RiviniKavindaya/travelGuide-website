import React from 'react'
import photo1 from '../images/d1.jpg';
import photo2 from '../images/d2.jpg';
import photo3 from '../images/d3.jpg';
import photo4 from '../images/photo4.avif';

export default function Slider() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={photo1} class="d-block w-100" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={photo2} class="d-block w-100" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={photo3} class="d-block w-100" alt="..."/>
      
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
