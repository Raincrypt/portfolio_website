import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import data from "../../assets/data.json"
import WorkTab from './WorkTab';

const Work = () => {
    const {experience} = data;
    return (
        <div id='work'>
            <section>
                <h3>EXPERIENCE</h3>
                {
                    experience.map((job) => {
                        return (
                            <WorkTab
                                key={job.companyName}
                                companyName={job.companyName}
                                jt={job.jobTitle}
                                jd={job.jobDescription}
                                startDate={job.startDate}
                                endDate={job.endDate}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Work