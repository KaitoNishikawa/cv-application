import { useState } from 'react'
import personalDetailsClass from './personalDetailsClass'
import educationClass from './educationClass'
import experienceClass from './experienceClass'
import '../styles/App.css'
import '../styles/main-left.css'
import '../styles/main-right.css'

function App() {
  const [isActiveEducation, setIsActiveEducation] = useState(false)
  const [isActiveExperience, setIsActiveExperience] = useState(false)
  const [personalDetails, setPersonalDetails] = useState(new personalDetailsClass())
  const [educationDetails, setEducationDetails] = useState(new educationClass())
  const [experienceDetails, setExperienceDetails] = useState(new experienceClass())

  return (
    <div className='main'>
      <div className='main-left'>
        <form className="personal-details-form input-forms">
            <h1>Personal Details</h1>
            <div className="input-containers">
                <label className="input-labels" htmlFor="full-name">Full name</label>
                <input className="text-inputs" type="text" name="full-name" id="full-name" placeholder="First and last name" />
            </div>
            <div className="input-containers">
                <label className="input-labels" htmlFor="email">Email</label>
                <input className="text-inputs" type="text" name="email" id="email" placeholder="Enter email" />
            </div>
            <div className="input-containers">
                <label className="input-labels" htmlFor="phone-number">Phone Number</label>
                <input className="text-inputs" type="text" name="phone-number" id="phone-number" placeholder="Enter phone number" />
            </div>
            <div className="input-containers">
                <label className="input-labels" htmlFor="address">Address</label>
                <input className="text-inputs" type="text" name="address" id="address" placeholder="City, State" />
            </div>
        </form>

        <form className="education-form input-forms">
          <h1>Education</h1>
          {!isActiveEducation ? (
              <>
                  <div className="items">
                      <div className="item-names">Texas A&M</div>
                  </div>
                  <div className="add-button-container">
                      <button className="add-button" onClick={() => setIsActiveEducation((prev) => !prev)}>+ Education</button>
                  </div>
              </>
          ) : (
              <>
                  <div className="input-containers">
                      <label className="input-labels" htmlFor="school">School</label>
                      <input className="text-inputs" type="text" name="school" id="school" placeholder="Enter school / university" />
                  </div>
                  <div className="input-containers">
                      <label className="input-labels" htmlFor="degree">Degree</label>
                      <input className="text-inputs" type="text" name="degree" id="degree" placeholder="Enter degree / field of study" />
                  </div>
                  <div className="start-end-date-containers">
                      <div className="input-containers">
                          <label className="input-labels" htmlFor="start-date">Start Date</label>
                          <input className="text-inputs" type="text" name="start-date" id="start-date" placeholder="Enter start date"/>
                      </div>
                      <div className="input-containers">
                          <label className="input-labels" htmlFor="end-date">End date</label>
                          <input className="text-inputs" type="text" name="end-date" id="end-date" placeholder="Enter end date"/>
                      </div>
                  </div>                
                  <div className="input-containers">
                      <label className="input-labels" htmlFor="location">Location</label>
                      <input className="text-inputs" type="text" name="location" id="location" placeholder="Enter location"/>
                  </div>
                  <div className="save-cancel-button-containers">
                      <button className="cancel-button buttons" onClick={() => setIsActiveEducation((prev) => !prev)}>Cancel</button>
                      <button type="submit" className="save-button buttons" onClick={() => setIsActiveEducation((prev) => !prev)}>Save</button>
                  </div>
              </>
          )}                    
        </form>
        
        <form className="experience-form input-forms">
          <h1>Personal Details</h1>
          {!isActiveExperience ? (
            <>
                <div className="items">
                    <div className="item-names">Microsoft</div>
                </div>
                <div className="add-button-container">
                    <button className="add-button" onClick={() => setIsActiveExperience((prev) => !prev)}>+ Experience</button>
                </div>
            </>
          ) : (
            <>
                <div className="input-containers">
                    <label className="input-labels" htmlFor="company-name">Company name</label>
                    <input className="text-inputs" type="text" name="company-name" id="company-name" placeholder="Enter company name"/>
                </div>
                <div className="input-containers">
                    <label className="input-labels" htmlFor="position-title">Position title</label>
                    <input className="text-inputs" type="text" name="position-title" id="position-title" placeholder="Enter position title"/>
                </div>
                <div className="start-end-date-containers">
                    <div className="input-containers">
                        <label className="input-labels" htmlFor="start-date">Start Date</label>
                        <input className="text-inputs" type="text" name="start-date" id="start-date" placeholder="Enter start date"/>
                    </div>
                    <div className="input-containers">
                        <label className="input-labels" htmlFor="end-date">End date</label>
                        <input className="text-inputs" type="text" name="end-date" id="end-date" placeholder="Enter end date"/>
                    </div>
                </div>                
                <div className="input-containers">
                    <label className="input-labels" htmlFor="location">Location</label>
                    <input className="text-inputs" type="text" name="location" id="location" placeholder="Enter location" />
                </div>
                <div className="input-containers">
                    <label className="input-labels" htmlFor="description">Description</label>
                    <input className="text-inputs" type="text" name="description" id="description" placeholder="Enter description"/>
                </div>
                <div className="save-cancel-button-containers">
                    <button className="cancel-button buttons" onClick={() => setIsActiveExperience((prev) => !prev)}>Cancel</button>
                    <button type="submit" className="save-button buttons" onClick={() => setIsActiveExperience((prev) => !prev)}>Save</button>
                </div>
            </>
          )}                    
        </form>
      </div>

      <div className="main-right">
            <div className="resume-header">
                <div className="resume-header-name">Kai Nishikawa</div>
                <div className="resume-header-contacts">
                    <div className="resume-header-email">kai.nishikawa808@gmail.com</div>
                    <div className="resume-header-phone">206-939-7680</div>
                    <div className="resume-header-location">Seattle, WA</div>
                </div>
            </div>
            <div className="resume-body">
                <div className="body-sections">
                    <div className="body-headers">Education</div>
                    <div className="body-sections-main">
                        <div className="first-items">
                            <div className="items-left">
                                <div className="education-main-left-date">08/2024 - present</div>
                                <div className="education-main-left-location">College Station, TX</div>
                            </div>
                            <div className="items-right">
                                <div className="education-main-right-university">Texas A&M Univerity</div>
                                <div className="education-main-right-degree">Bachelors in Computer Science</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="body-sections">
                    <div className="body-headers">Experience</div>
                    <div className="body-sections-main">
                        <div className="first-items">
                            <div className="items-left">
                                <div className="experience-main-left-date">06/2024 - present</div>
                                <div className="experience-main-left-location">Bellevue, WA</div>
                            </div>
                            <div className="items-right">
                                <div className="experience-main-right-company">MOD Pizza</div>
                                <div className="experience-main-right-role">Crew Member</div>
                                <div className="experience-main-right-description">Cheffed TF up. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci rem nemo quaerat temporibus voluptates, tenetur provident velit similique voluptatem deleniti.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}


export default App
