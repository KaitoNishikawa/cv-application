import { useState } from 'react'
import EducationInput from './renderEducationInput'
import ExperienceInput from './renderExperienceInput'
import personalDetailsClass from './personalDetailsClass'
import educationDetailsClass from './educationClass'
import experienceDetailsClass from './experienceClass'
import EducationItem from './renderEducationItems'
import ExperienceItem from './renderExperienceItems'
import EducationList from './renderEducationList'
import ExperienceList from './renderExperienceList'
import '../styles/App.css'
import '../styles/main-left.css'
import '../styles/main-right.css'

function App() {
  const [isActiveEducation, setIsActiveEducation] = useState(false)
  const [isActiveExperience, setIsActiveExperience] = useState(false)
  const [educationEditIndex, setEducationEditIndex] = useState(-1)
  const [experienceEditIndex, setExperienceEditIndex] = useState(-1)
  const [educationItems, setEducationItems] = useState([])
  const [experienceItems, setExperienceItems] = useState([])
  const [personalDetails, setPersonalDetails] = useState(new personalDetailsClass())
  const [educationDetails, setEducationDetails] = useState(null)
  const [experienceDetails, setExperienceDetails] = useState(null)

  const personalDetailsHandler = (e) => {
    let newDetails = new personalDetailsClass()

    Object.values(personalDetails).forEach((value, index) => {
        const key = Object.keys(personalDetails)[index]
        newDetails.setProperty(key, value)
    });    

    newDetails.setProperty(e.target.name, e.target.value)
    setPersonalDetails(newDetails)
  }

  const educationDetailsHandler = (e) => {
    let newDetails = new educationDetailsClass()

    if(educationDetails){
        Object.values(educationDetails).forEach((value, index) => {
            const key = Object.keys(educationDetails)[index]
            newDetails.setProperty(key, value)
        }); 
    }       

    newDetails.setProperty(e.target.name, e.target.value)
    setEducationDetails(newDetails)
  }

  const educationDetailsHandlerEdit = (e) => {
    educationItems[educationEditIndex].setProperty(e.target.name, e.target.value)

    let newItems = []

    for(let i = 0; i < educationItems.length; i++){
        newItems.push(educationItems[i])
    }
    
    setEducationItems(newItems)
  }

  const experienceDetailsHandler = (e) => {
    let newDetails = new experienceDetailsClass()

    if(experienceDetails){
        Object.values(experienceDetails).forEach((value, index) => {
            const key = Object.keys(experienceDetails)[index]
            newDetails.setProperty(key, value)
        });  
    }      

    newDetails.setProperty(e.target.name, e.target.value)
    setExperienceDetails(newDetails)
  }

  const experienceDetailsHandlerEdit = (e) => {
    experienceItems[experienceEditIndex].setProperty(e.target.name, e.target.value)

    let newItems = []

    for(let i = 0; i < experienceItems.length; i++){
        newItems.push(experienceItems[i])
    }
    
    setExperienceItems(newItems)
  }

  const educationDetailsEditHandler = (e) => {   
    let key = e.target.firstChild.id
    let index = -1

    for(let i = 0; i < educationItems.length; i++){
        console.log('target: ' + key)
        console.log('current: ' + educationItems[i].id)
        if(key == educationItems[i].id){
            index = i
            break
        }
    }
    console.log(index)
    setEducationEditIndex(index)
    setIsActiveEducation(true)
  }

  const experienceDetailsEditHandler = (e) => {    
    let key = e.target.firstChild.id
    let index = -1

    for(let i = 0; i < experienceItems.length; i++){
        console.log('target: ' + key)
        console.log('current: ' + experienceItems[i].id)
        if(key == experienceItems[i].id){
            index = i
            break
        }
    }
    console.log(index)
    setExperienceEditIndex(index)
    setIsActiveExperience(true)
  }

  const submitHandler = (e, x) => {
    e.preventDefault()
    if(x == 'ed'){
        if(educationDetails != null && educationDetails.school != '' && educationDetails.school[0] != ' '){
            let newItems = []
            for(let i = 0; i < educationItems.length; i++){
                newItems.push(educationItems[i])
            }
            newItems.push(educationDetails)

            setEducationItems(newItems)
            setIsActiveEducation(false)
            setEducationDetails(null)
        }
    }
    else{
        if(experienceDetails != null && experienceDetails.companyName != '' && experienceDetails.companyName[0] != ' '){
            let newItems = []
            for(let i = 0; i < experienceItems.length; i++){
                newItems.push(experienceItems[i])
            }
            newItems.push(experienceDetails)

            setExperienceItems(newItems)
            setIsActiveExperience(false)
            setExperienceDetails(null)
        }
    }
  }

  const submitHandlerEdit = (e, x) => {
    e.preventDefault()

    if(x == 'ed'){
        if(educationItems[educationEditIndex].school != '' && educationItems[educationEditIndex].school[0] != ' '){
            setEducationEditIndex(-1)
            setIsActiveEducation(false)
        }
    }
    else{
        if(experienceItems[experienceEditIndex].companyName != '' && experienceItems[experienceEditIndex].companyName[0] != ' '){
            setExperienceEditIndex(-1)
            setIsActiveExperience(false)
        }
    }
  }

  const cancelHandler = (e, x) => {
    e.preventDefault()
    if(x == 'ed'){
        setIsActiveEducation(false)
        setEducationDetails(null)
    }
    else{
        setIsActiveExperience(false)
        setExperienceDetails(null)
    }
  }

  const wrapperMouseOverHandler = (e, x) => {
    const xButton = e.target.previousSibling

    if(x == 'enter'){
        xButton.style.visibility = 'visible'
    }
    else{
        xButton.style.visibility = 'hidden';
    }
    
  }

  const xMouseOverHandler = (e, x) => {
    const xButton = e.target

    xButton.style.visibility = 'visible'  
  }

  const xButtonHandler = (e, x) => {
    let key = e.target.nextSibling.firstChild.id
    let newItems = []
    
    if(x == 'ed'){
        for(let i = 0; i < educationItems.length; i++){
            if(educationItems[i].id != key){
                newItems.push(educationItems[i])
            }
        }

        setEducationItems(newItems)
    }
    else{
        for(let i = 0; i < experienceItems.length; i++){
            if(experienceItems[i].id != key){
                newItems.push(experienceItems[i])
            }
        }

        setExperienceItems(newItems)
    }
  }

  return (
    <div className='main'>
      <div className='main-left'>
        <form className="personal-details-form input-forms">
            <h1>Personal Details</h1>
            <div className="input-containers">
                <label className="input-labels" htmlFor="full-name">Full name</label>
                <input className="text-inputs" type="text" name="fullName" id="full-name" placeholder="First and last name"  onChange={personalDetailsHandler} value = {personalDetails.fullName}/>
            </div>
            <div className="input-containers">
                <label className="input-labels" htmlFor="email">Email</label>
                <input className="text-inputs" type="text" name="email" id="email" placeholder="Enter email" onChange={personalDetailsHandler} value = {personalDetails.email}/>
            </div>
            <div className="input-containers">
                <label className="input-labels" htmlFor="phone-number">Phone Number</label>
                <input className="text-inputs" type="text" name="phoneNumber" id="phone-number" placeholder="Enter phone number" onChange={personalDetailsHandler} value = {personalDetails.phoneNumber}/>
            </div>
            <div className="input-containers">
                <label className="input-labels" htmlFor="address">Address</label>
                <input className="text-inputs" type="text" name="address" id="address" placeholder="City, State" onChange={personalDetailsHandler} value = {personalDetails.address}/>
            </div>
        </form>

        <form className="education-form input-forms">
          <h1>Education</h1>
          {!isActiveEducation ? (
              <>
                  <EducationItem details = {educationItems} handleChange={() => educationDetailsEditHandler} handleMouseOverWrapper={wrapperMouseOverHandler} handleMouseOverX={xMouseOverHandler} handleXButton={xButtonHandler}></EducationItem>
                  <div className="add-button-container">
                      <button className="add-button" onClick={() => setIsActiveEducation(true)}>+ Education</button>
                  </div>
              </>
          ) : (
              <>
                {educationEditIndex == -1 ? (
                    <EducationInput handleChange={educationDetailsHandler} details={educationDetails} cancelHandler={cancelHandler} submitHandler={submitHandler} isEdit={false}></EducationInput>
                ) : (
                    <EducationInput handleChange={educationDetailsHandlerEdit} details={educationItems[educationEditIndex]} cancelHandler={cancelHandler} submitHandler={submitHandlerEdit} isEdit={true}></EducationInput>
                )}
              </>
          )}                    
        </form>
        
        <form className="experience-form input-forms">
          <h1>Experience</h1>
          {!isActiveExperience ? (
            <>
                <ExperienceItem details = {experienceItems} handleChange={() => experienceDetailsEditHandler} handleMouseOverWrapper={wrapperMouseOverHandler} handleMouseOverX={xMouseOverHandler} handleXButton={xButtonHandler}></ExperienceItem>
                <div className="add-button-container">
                    <button className="add-button" onClick={() => setIsActiveExperience((prev) => !prev)}>+ Experience</button>
                </div>
            </>
          ) : (
            <>
                {experienceEditIndex == -1 ? (
                    <ExperienceInput handleChange={experienceDetailsHandler} details={experienceDetails} cancelHandler={cancelHandler} submitHandler={submitHandler} isEdit={false}></ExperienceInput>
                ) : (
                    <ExperienceInput handleChange={experienceDetailsHandlerEdit} details={experienceItems[experienceEditIndex]} cancelHandler={cancelHandler} submitHandler={submitHandlerEdit} isEdit={true}></ExperienceInput>
                )}
            </>
          )}                    
        </form>
      </div>

      <div className="main-right">
            <div className="resume-header">
                <div className="resume-header-name">{personalDetails.fullName}</div>
                <div className="resume-header-contacts-container">
                    <div className="resume-header-contacts">{personalDetails.email}</div>
                    <div className="resume-header-contacts">{personalDetails.phoneNumber}</div>
                    <div className="resume-header-contacts">{personalDetails.address}</div>
                </div>
            </div>
            <div className="resume-body">
                <div className="body-sections">
                    <div className="body-headers">Education</div>
                    <div className="body-sections-main">
                        <EducationList details = {educationItems}></EducationList>
                        {educationDetails && (
                            <>
                                <div className="list-items">
                                    <div className="items-left">
                                        <div className="education-main-left-date">{educationDetails.startDate + ' - ' + educationDetails.endDate}</div>
                                        <div className="education-main-left-location">{educationDetails.location}</div>
                                    </div>
                                    <div className="items-right">
                                        <div className="education-main-right-university">{educationDetails.school}</div>
                                        <div className="education-main-right-degree">{educationDetails.degree}</div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="body-sections">
                    <div className="body-headers">Experience</div>
                    <div className="body-sections-main">
                        <ExperienceList details = {experienceItems}></ExperienceList>
                        {experienceDetails && (
                            <>
                                <div className="list-items">
                                    <div className="items-left">
                                        <div className="experience-main-left-date">{experienceDetails.startDate + ' - ' + experienceDetails.endDate}</div>
                                        <div className="experience-main-left-location">{experienceDetails.location}</div>
                                    </div>
                                    <div className="items-right">
                                        <div className="experience-main-right-company">{experienceDetails.companyName}</div>
                                        <div className="experience-main-right-role">{experienceDetails.positionTitle}</div>
                                        <div className="experience-main-right-description">{experienceDetails.description}</div>
                                    </div>
                                </div>
                            </>
                        )}                        
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}



export default App
