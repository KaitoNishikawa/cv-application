export default function EducationList(props){
    const list = props.details
    const listItems = list.map(item => 
        <div key={item.id} className="list-items">
            <div className="items-left">
                <div className="education-main-left-date">{item.startDate + ' - ' + item.endDate}</div>
                <div className="education-main-left-location">{item.location}</div>
            </div>
            <div className="items-right">
                <div className="education-main-right-university">{item.school}</div>
                <div className="education-main-right-degree">{item.degree}</div>
            </div>
        </div>
    )

    return listItems
}