export default function ExperienceItem({details, handleChange, handleMouseOverWrapper, handleMouseOverX, handleXButton}){
    const list = details
    let isPhone = window.innerWidth < 500
    const listItems = list.map((item) => 
        <div key={item.id} className="items-wrapper" onMouseEnter={(e) => handleMouseOverWrapper(e, 'enter')} onMouseOut={(e) => handleMouseOverWrapper(e, 'out')}>
            {isPhone ? (
                <button className="items-x" style={{visibility: 'visible'}} onMouseEnter={(e) => handleMouseOverX(e, 'enter')} onMouseOut={(e) => handleMouseOverX(e, 'out')} onClick={(e) => handleXButton(e, 'ex')}>x</button>
            ) : (
                <button className="items-x" style={{visibility: 'hidden'}} onMouseEnter={(e) => handleMouseOverX(e, 'enter')} onMouseOut={(e) => handleMouseOverX(e, 'out')} onClick={(e) => handleXButton(e, 'ex')}>x</button>
            )}
            
            <div className="items" key={item.id} onClick={handleChange()}>                
                <div className="item-names" id={item.id}>{item.companyName}</div>
            </div>
        </div>       
    )

    return listItems
}