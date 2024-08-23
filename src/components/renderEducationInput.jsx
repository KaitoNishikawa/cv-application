import educationDetailsClass from "./educationClass"

export default function EducationInput({handleChange, details, cancelHandler, submitHandler, isEdit}){
    if(!details){
        details = new educationDetailsClass()
    }
    // console.log(details)
    return(
        <>
            <div className="input-containers">
                <label className="input-labels" htmlFor="school">School</label>
                <input required className="text-inputs" type="text" name="school" id="school" placeholder="Enter school / university" value={details.school} onChange={handleChange}/>
            </div>
            <div className="input-containers">
                <label className="input-labels" htmlFor="degree">Degree</label>
                <input className="text-inputs" type="text" name="degree" id="degree" placeholder="Enter degree / field of study" value={details.degree} onChange={handleChange}/>
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
            <div className="save-cancel-button-containers">
                {!isEdit && (
                    <button className="cancel-button buttons" onClick={(e) => cancelHandler(e, 'ed')}>Cancel</button>
                )}                
                <button type='submit' className="save-button buttons" onClick={(e) => submitHandler(e, 'ed')}>Save</button>
            </div>
        </>
    )
}