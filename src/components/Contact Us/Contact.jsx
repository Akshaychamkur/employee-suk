import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div class="Concontainer">
      <div class="content">
        <div class="left-side">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="topic">Address</div>
            <div class="text-one">Vidya nagar</div>
            <div class="text-two">Kalaburagi 585103</div>
          </div>
          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">Phone</div>
            <div class="text-one">+91 9857143545</div>
            <div class="text-two">+91 7848925486</div>
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div class="topic">Email</div>
            <div class="text-one">sukemployee@gmail.com</div>
            <div class="text-two">info.sukemployee@gmail.com</div>
          </div>
        </div>
        <div class="right-side">
          <div class="topic-text">Get In Touch With Us.</div>
          <p>If you want to cantact us or have a query regarding our work, then feel free to contact us. Send us your name and email, we will get in touch with you as soon as possible.</p>
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div class="input-box message-box">

            </div>
            <div class="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>)
}

export default Contact