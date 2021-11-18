import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            leftbutton="Custom Order"
            rightbutton="Existing Inventory"
            backgroundImg="model-s.jpg"
            />
            <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            leftbutton="Custom Order"
            rightbutton="Existing Inventory"
            backgroundImg="model-y.jpg"
            />
            <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            leftbutton="Custom Order"
            rightbutton="Existing Inventory"
            backgroundImg="model-3.jpg"
            />
            <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            leftbutton="Custom Order"
            rightbutton="Existing Inventory"
            backgroundImg="model-x.jpg"
            />
            <Section
            title="Lowest Cost solar panels in America"
            description="Money-back guarantee"
            leftbutton="Order Now"
            rightbutton="Learn More"
            backgroundImg="solar-panel.jpg"
            />
            <Section
            title="Solar for New Roofs"
            description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
            leftbutton="Order Now"
            rightbutton="Learn More"
            backgroundImg="solar-roof.jpg"
            />
            <Section
            title="Accessories"
            description=""
            leftbutton="Order Now"
            backgroundImg="accessories.jpg"
            />

        </Container>
    )
}

export default Home

const Container=styled.div`
height :100vh;
`
