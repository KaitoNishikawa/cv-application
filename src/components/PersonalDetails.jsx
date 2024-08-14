export default function PersonalDetails(){
    return(
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
    )    
}