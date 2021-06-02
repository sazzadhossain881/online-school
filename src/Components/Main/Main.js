import React from 'react';
import './Main.css'

const Main = (props) => {
    const{img,title,instructor,price}=props.course;
    return (
        <div className="main-course" >
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h3 className="course-name">Course Name:{title}</h3>
            <p>Instructor:{instructor}</p>
            <br />
            <p>Price:${price}</p>
            <button onClick={() => props.handleAddCourse(props.course)} className="main-button">Enroll Now</button>
            </div>
        </div>
    );
};

export default Main;