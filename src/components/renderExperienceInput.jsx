import experienceDetailsClass from "./experienceClass"

export default function ExperienceInput({handleChange, details, cancelHandler, submitHandler, isEdit}){
    if(!details){
        details = new experienceDetailsClass()
    }
    // console.log(details)
    return(
        <>
           <div className="input-containers">
                <label className="input-labels" htmlFor="company-name">Company name</label>
                <input className="text-inputs" type="text" name="companyName" id="company-name" placeholder="Enter company name" value={details.companyName} onChange={handleChange}/>
            </div>
            <div className="input-containers">
                <label className="input-labels" htmlFor="position-title">Position title</label>
                <input className="text-inputs" type="text" name="positionTitle" id="position-title" placeholder="Enter position title" value={details.positionTitle} onChange={handleChange}/>
            </div>
            <div className="start-end-date-containers">
                <div className="input-containers">
                    <label className="input-labels" htmlFor="start-date">Start Date</label>
                    <input className="text-inputs" type="text" name="startDate" id="start-date" placeholder="Enter start date" value={details.startDate} onChange={handleChange}/>
                </div>
                <div className="input-containers">
                    <label className="input-labels" htmlFor="end-date">End date</label>
                    <input className="text-inputs" type="text" name="endDate" id="end-date" placeholder="Enter end date" value={details.endDate} onChange={handleChange}/>
                </div>
            </div>                
            <div className="input-containers">
                <label className="input-labels" htmlFor="location">Location</label>
                <input className="text-inputs" type="text" name="location" id="location" placeholder="Enter location" value={details.location} onChange={handleChange}/>
            </div>
            <div className="input-containers">
                <label className="input-labels" htmlFor="description">Description</label>
                <input className="text-inputs" type="text" name="description" id="description" placeholder="Enter description" value={details.description} onChange={handleChange}/>
            </div>
            <div className="save-cancel-button-containers">
                {!isEdit && (
                    <button className="cancel-button buttons" onClick={(e) => cancelHandler(e, 'ex')}>Cancel</button>
                )}                
                <button type="submit" className="save-button buttons" onClick={(e) => submitHandler(e, 'ex')}>Save</button>
            </div>
        </>
    )
}