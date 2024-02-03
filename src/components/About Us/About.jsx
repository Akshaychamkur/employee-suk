import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <div class="section black">
        <a href="#" class="about-link"></a>
        <h1>About Us</h1>

        <div class="white-content">
          <h2>Our Mission:</h2>
          <p>Clearly articulate the company's mission statement, outlining its purpose and the impact it seeks to make.
            Share the company's vision for the future and how it aspires to contribute to its industry or community.</p>
        </div>
        <div class="white-content">
          <h2>Company Values:</h2>
          <p>Enumerate the core values that guide the company's decisions and actions.
            Describe the company culture, emphasizing the principles that define the work environment..</p>
        </div>

        <div class="white-content">
          <h2>Continuous Improvement</h2>
          <p>
            Foster a culture of continuous improvement. Encourage teams to learn from both successes and failures, adapting their approach to become more effective over time.</p>
        </div>
      </div>
      <div class="section white">
        <div class="white-image">
          <div class="white-content">
            <h2>Our Story</h2>
            <p>From our humble beginnings, we envisioned more than a workplace,a thriving community where every individual's growth and fulfillment mattered. Our culture, rooted in collaboration and innovation, has been the cornerstone of our success, evident in the journeys of our employees who have grown with us. Challenges became opportunities; we crafted unique solutions, fostering a culture of adaptability and open dialogue. Our unwavering commitment lies in nurturing a holistic ecosystem, supporting employee well-being, growth, and personal development. Looking ahead, our focus remains steadfast on empowering a community of thriving, innovative individuals shaping our shared future.</p>
          </div>
          <img src="https://itsm.tools/wp-content/uploads/2020/07/successful-employees-1024x512.png" alt="Company Image" />
        </div>
      </div>
    </div>
  )
}

export default About