import React, { useEffect, useState } from 'react';
import Dog from '../Dog/Dog';

const Dogs = () => {
    const [dogs, setDogs] = useState([]);
    console.log(dogs);
    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => setDogs(data));
    }, [])
    return (
        <div>
            <h1>Dog List</h1>
            {dogs.map(dog => <Dog
                dog={dog}
            ></Dog>)}
        </div>
    );
};

export default Dogs;