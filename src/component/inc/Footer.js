import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h6>Company Information</h6>
                    <hr />
                    <p>
                    Explore is your premier travel companion in Sri Lanka, offering personalized itineraries, expertly guided tours, and sustainable adventures.
                    </p>
                </div>
                <div className="col-md-4">
                    <h6> Quick Link</h6>
                    <hr/>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/contact">Contact</Link></div>
                    <div><Link to="/">Home</Link></div>
                </div>
                <div className="col md-4">
                    <h6>Contact Information</h6>
                    <hr />
                    <div><p className="text-white mb-1">Y45,ghaop,kolp,frt</p></div>
                    <div><p className="text-white mb-1">+945690785</p></div>
                    <div><p className="text-white mb-1">+454555670</p></div>
                    <div><p className="text-white mb-1">jkl@gamil.com</p></div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
