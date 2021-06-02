import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import data from '../Data/Data.json';
import Main from '../Main/Main';
import './Course.css'

const Course = () => {
    const [courses,setCourses]=useState([]);
    useEffect(() => {
        setCourses(data)
    },[])
    const [cart,setCart]=useState([]);
    const handleAddCourse=(course) => {
        const newCart=[...cart,course];
        setCart(newCart);
    }
    return (
        <div className="courses-container">
            <div className="course-container">
            {
                courses.map(course => <Main course={course} handleAddCourse={handleAddCourse}key={course.tile}></Main>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;