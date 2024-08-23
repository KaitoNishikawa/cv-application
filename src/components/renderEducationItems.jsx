export default function EducationItem({details, handleChange}){
    const list = details
    const listItems = list.map((item) => 
        <div className="items" key={item.id} onClick={handleChange()}>
            <div className="item-names" id={item.id}>{item.school}</div>
        </div>
    )

    return listItems
}