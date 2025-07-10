import React from 'react'
import VCard from './inner/VCard'
import Title from './inner/Title'
import Header from './inner/Header'

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <Header/>
                <Title heading="NEW ARRIVALS" subheading="Trending from new and modern mens style collection" />
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
                <Title heading="FEATURED" subheading="Trending from mens and womens style collection" />
            </div>
        </>
    )
}

export default Home