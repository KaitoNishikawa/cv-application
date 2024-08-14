import { useState } from 'react';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import PersonalDetails from './PersonalDetails';

export default function MainLeft(isActiveEducation, isActiveExperience, handlePlusEducation, handlePlusExperience){
    console.log(isActiveEducation)
    return (
        <div className="main-left">
            <PersonalDetails></PersonalDetails>

            <EducationForm 
                isActive = {isActiveEducation}
                handlePlusEducation = {handlePlusEducation}
            ></EducationForm>

            <ExperienceForm
                isActive = {isActiveExperience}
                handlePlusExperience = {handlePlusExperience}
            ></ExperienceForm>
        </div>
    )
}
