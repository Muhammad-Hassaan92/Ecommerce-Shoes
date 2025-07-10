import React from 'react'
import VCard from './inner/VCard'

const Products = () => {
    return (
        <div className='container-fluid'>
            <p className='display-5 px-4'>Shop Categories</p>
            <div><hr /></div>
            <div className='row'>
                <VCard title="MEN's Shoe" id={1} des="The bulk of card's content" price="50" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
                <VCard title="MEN's Shoe" id={2} des="The bulk of card's content" price="49" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
                <VCard title="MEN's Shoe" id={3} des="The bulk of card's content" price="48" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
                <VCard title="MEN's Shoe" id={4} des="The bulk of card's content" price="47" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
                <VCard title="MEN's Shoe" id={5} des="The bulk of card's content" price="46" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
                <VCard title="MEN's Shoe" id={6} des="The bulk of card's content" price="45" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
                <VCard title="MEN's Shoe" id={7} des="The bulk of card's content" price="44" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
                <VCard title="MEN's Shoe" id={8} des="The bulk of card's content" price="43" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
            </div>
        </div>
    )
}

export default Products