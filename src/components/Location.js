import React from 'react';

const Location = (/*props*/{ city }) => (
    //Destructuring
    
    //const city = props.city;
    //const {city} = props;
    //return (<div><h1>{city}</h1></div>);
    <div>
        <h1>
            {city}
        </h1>
    </div>
);

export default Location;