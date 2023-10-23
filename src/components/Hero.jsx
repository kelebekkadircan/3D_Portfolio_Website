import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;

@media only screen and (max-width:768px){

height: 200vh;


}

`
const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1100px;
display: flex;
justify-content: space-between;

@media only screen and (max-width:768px){

display: flex;
flex-direction: column;
align-items: center;
width: 100%;
justify-content: center;

}


`
const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media only screen and (max-width:768px){

flex: 1;
align-items: center;


}

`
const Right = styled.div`
flex: 3;
position: relative;

@media only screen and (max-width:768px){

flex: 1;
width: 100%;


}


`
const Title = styled.h1`
font-size: 74px;
@media only screen and (max-width:768px){

text-align:center;


}

`
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;


`
const Line = styled.img`
height: 5px;


`
const SubTitle = styled.div`
    color: #da4ea2;


`
const Desc = styled.div`
font-size: 24px;
color: lightgray;

@media only screen and (max-width:768px){

padding:20px;


}


`
const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;

cursor: pointer;
&:hover{
    color: #da4ea2;
    background-color: white;
}
transition: all 0.4s ease-in-out;


`
const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
 right: -67px;
/* left: 100px;  */
margin: auto;
animation: animate 1.7s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(20px);
    }
}

@media only screen and (max-width:768px){

left: 0;
right: 0;

width: 350px;
height: 350px;


}

`



const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Solve</Title>
                    <WhatWeDo>
                        <Line src='./img/line.png' />
                        <SubTitle>
                            What we Do
                        </SubTitle>
                    </WhatWeDo>
                    <Desc>we enjoy creating delightful , human-centered digital experiences.</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    <Canvas >
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2.5} >
                            <MeshDistortMaterial color='#3d1c57' attach="material" distort={0.5} speed={1.6} />

                        </Sphere>
                    </Canvas>
                    <Img src='./img/moon.png' />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero