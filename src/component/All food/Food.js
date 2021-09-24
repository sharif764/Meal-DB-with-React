import React from 'react';
import Cart from '../Food Cart/Cart';

const Food = (props) => {

    const foods = props.foods.meals;
    console.log(foods);
    if (typeof (foods) === "object") {
        console.log('object')
    }
    else {
        console.log('noo')
    }
    // { foods.map(food => console.log(food)) }
    // console.log(props);

    return (
        <div>
            <Cart></Cart>
        </div>

    );
};

export default Food;