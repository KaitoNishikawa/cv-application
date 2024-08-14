export default function ExperienceForm({isActive, handlePlusExperience}){
    if(!isActive){
        return(
            <form className="experience-form input-forms">
                <h1>Personal Details</h1>
                <div className="items">
                    <div className="item-names">Microsoft</div>
                </div>
                <div className="add-button-container">
                    <button className="add-button" onClick={handlePlusExperience}>+ Experience</button>
                </div>
            </form>
        )
    }
    else{
        return(
            <form className="experience-form input-forms">
                <h1>Personal Details</h1>
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
                    <button className="cancel-button buttons">Cancel</button>
                    <button type="submit" className="save-button buttons">Save</button>
                </div>
            </form>
        )
    }
    
}