import React, { useEffect, useState } from 'react';
import Dog from '../Dog/Dog';

const Dogs = () => {
    const [dogs, setDogs] = useState([]);
    // console.log(dogs);
    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => setDogs(data));
    }, [])
    return (
        <div className='container mx-auto'>
            <h1>World Wide Dog's List</h1>
            <h2>Total Dogs: {dogs.length}</h2>
            <div className='row row-cols-lg-4 row-cols-md-3'>
                {dogs.map(dog => <Dog
                    dog={dog}
                    key={dog.id}
                ></Dog>)}
            </div>
        </div>
    );
};

export default Dogs;