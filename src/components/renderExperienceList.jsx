export default function ExperienceList(props){
    const list = props.details
    const listItems = list.map(item => 
        <div key={item.id} className="list-items">
            <div className="items-left">
                <div className="experience-main-left-date">{item.startDate + ' - ' + item.endDate}</div>
                <div className="experience-main-left-location">{item.location}</div>
            </div>
            <div className="items-right">
                <div className="experience-main-right-company">{item.companyName}</div>
                <div className="experience-main-right-role">{item.positionTitle}</div>
                <div className="experience-main-right-description">{item.description}</div>
            </div>
        </div>
    )

    return listItems
}