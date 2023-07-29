import React from 'react'

import TestimonialCard from "./TestimonialCard"
import data from "../../assets/data.json"

const Testimonials = () => {
  return (
    <div id='testimonials'>
        <h2>Testimonials</h2>

        <section>
        {
            data.testimonials.map((testimony) => (
                <TestimonialCard
                    key={testimony.id}
                    name={testimony.name}
                    feedback={testimony.feedback}
                />
            ))
        }
      </section>

    </div>
  )
}

export default Testimonials;