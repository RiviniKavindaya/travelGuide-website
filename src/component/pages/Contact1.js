import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Contact1() {
  useEffect(() => {
    // Test for placeholder support
    $.support.placeholder = (function() {
      var i = document.createElement('input');
      return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
      $('.form-label').each(function() {
        $(this).addClass('js-hide-label');
      });

      // Code for adding/removing classes here
      $('.form-group').find('input, textarea').on('keyup blur focus', function(e) {
        // Cache our selectors
        var $this = $(this),
          $label = $this.parent().find("label");

        switch (e.type) {
          case 'keyup': {
            $label.toggleClass('js-hide-label', $this.val() == '');
            break;
          }
          case 'blur': {
            if ($this.val() == '') {
              $label.addClass('js-hide-label');
            } else {
              $label.removeClass('js-hide-label').addClass('js-unhighlight-label');
            }
            break;
          }
          case 'focus': {
            if ($this.val() !== '') {
              $label.removeClass('js-unhighlight-label');
            }
            break;
          }
          default: break;
        }
      });
    }
  }, []);

  return (
    <div>
      <h1>Contact</h1>
      <section className='section'>
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
                        <form id="contact-form" className="form" action="#" method="POST" role="form">
                          <div className="form-group">
                            <label className="form-label" htmlFor="name">Your Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Your name" tabIndex="1" required/>
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="email">Your Email</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" tabIndex="2" required/>
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" tabIndex="3"/>
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea rows="5" cols="50" name="message" className="form-control" id="message" placeholder="Message..." tabIndex="4" required></textarea>
                          </div>
                          <div className="text-center">
                            <button type="submit" className="btn btn-start-order">Send Message</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                    <h6>Our contact detail</h6>
                    <p>explore@gmail.com</p>
                    <p>455564655</p>
                    <p>566113132</p>
                    
                </div>
              </div>
              </div>
              </div>
              </div>
              </section>
              </div>
  )
}



