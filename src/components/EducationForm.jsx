export default function EducationForm({isActive, handlePlusEducation}){
    console.log(isActive)
    return(
        <form className="education-form input-forms">
            <h1>Education</h1>
            {!isActive ? (
                <>
                    <div className="items">
                        <div className="item-names">Texas A&M</div>
                    </div>
                    <div className="add-button-container">
                        <button className="add-button" onClick={handlePlusEducation}>+ Education</button>
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
                        <button className="cancel-button buttons" onClick={handlePlusEducation}>Cancel</button>
                        <button type="submit" className="save-button buttons" onClick={handlePlusEducation}>Save</button>
                    </div>
                </>
            )}                    
        </form>
    )
}

    