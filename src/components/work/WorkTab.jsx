import React from 'react'

const WorkTab = ({companyName, jt, jd, startDate, endDate}) => {
    return (
        <article className='experience-container'>
            <div className='experience-tab'>
                <div>
                    <h4>{companyName}</h4>
                    <span>{jt}</span>
                </div>
                <span>{startDate} - {endDate}</span>
            </div>
            <div className='experience-tab-extend'>
                <p>{jd}</p>
                
            </div>
        </article>
    )
}

export default WorkTab