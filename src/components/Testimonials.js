import React from 'react';
import './Testimonials.css';


const Testimonials = ({ Persons }) => {

    return (
        <>
            <section className="testimonial">
            <img src={Persons}  alt="person"/>
            <p>
                Lorem ipsum dolor sit amet, vis omnis dolore at, id nam nullam intellegam. 
                Vis nobis numquam mediocritatem id, erat tollit cu vix. Ut has utamur deleniti adipiscing, has ei prima dignissim.
            </p>
            <h4> John Paul </h4>
        </section>
        </>
    )
}

export default Testimonials;