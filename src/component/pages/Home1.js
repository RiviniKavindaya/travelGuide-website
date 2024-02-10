import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import Vmc from '../inc/Vmc';
import d1 from '../images/d1.jpg';
import d2 from '../images/d2.jpg';
import d3 from '../images/d3.jpg';
export default function Home1() {
  return (
    <div>
        <Slider/>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                  <h3 className='main-heading'>Our Company</h3>
                  <div className="underling mx-auto" ></div>
                    <p>Explore is your ultimate companion for unforgettable adventures in the stunning island paradise of Sri Lanka. With our expert guides and personalized itineraries, we unlock the hidden gems and iconic landmarks of this mesmerizing destination. From ancient temples to pristine beaches, lush tea plantations to wildlife safaris, we curate immersive experiences that cater to every traveler's wanderlust. Whether you're seeking cultural insights, adrenaline-fueled excursions, or simply moments of serenity amidst breathtaking landscapes, Explore ensures that every journey is filled with awe-inspiring discoveries and cherished memories. Let us guide you on a transformative voyage through the wonders of Sri Lanka.
                    </p>
                    <Link to="/about" className="btn btn-warning shadow">Read More</Link>
              </div>
            </div>

          </div>
        </section>
      
      {/* our vision, mission and value */}
      <Vmc/>
      {/* our services */}
      <section className="section bg-c-light border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                  <h3 className='main-heading'>Our services </h3>
                  <div className="underling mx-auto" ></div>
                </div>
                  <div className="col-md-4">
                    <div className="card shadow">
                      
                        <image src={d1} className="w-100 border-bottom" alt="d1"/>
                        <div className="card-body">
                          <h6>Tailored Itineraries</h6>
                          <p>Our personalized itinerary planning service ensures that every traveler's journey is uniquely crafted to match their interests, preferences, and travel style. Whether you seek adventure, relaxation, cultural immersion, or a combination of experiences, we design bespoke travel plans that cater to your desires and exceed your expectations. </p>
                    
                        </div>
                      

                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card shadow">
                      
                        <image src={d2} className="w-100 border-bottom" alt="d1"/>
                        <div className="card-body">
                          <h6>Guided Tours:</h6>
                          <p>Our expertly guided tours offer an insider's perspective on Sri Lanka's most captivating destinations, landmarks, and hidden gems. Led by knowledgeable local guides, our tours provide fascinating insights into the country's rich history, diverse cultures, and natural wonders, allowing you to explore with confidence and deepen your understanding of this enchanting island.

                          </p>
                    
                        </div>
                      

                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card shadow">
                      
                        <image src={d3} className="w-100 border-bottom" alt="d1"/>
                        <div className="card-body">
                          <h6>Sustainable Adventures</h6>
                          <div className="underlining"></div>
                          <p>As advocates for responsible tourism, we are committed to offering sustainable adventures that minimize environmental impact and support local communities. From eco-friendly accommodations and conservation initiatives to community-based tourism projects and ethical wildlife encounters, our sustainable adventures promote environmental stewardship,</p>
                    
                        </div>
                      

                    </div>
                  </div>
                
            </div>
          
          </div>
        </section>
    </div>
  )
}
