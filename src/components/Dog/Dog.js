import React from 'react';
import './Dog.css'

const Dog = (props) => {
    const { bred_for, breed_group, image, weight, name,height } = props.dog;
    return (
        <div className='dog border p-4'>
            <img className='img-fluid' src={image.url} alt="" />
            <h4>{bred_for}</h4>
            <h4>Name: {name}</h4>
            <h5>Breed Group:{breed_group}</h5>
            <p>Weight: {weight.imperial}</p>
            <p>Height: {height.imperial}</p>
        </div>
    );
};

export default Dog;