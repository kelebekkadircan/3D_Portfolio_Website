import styled from 'styled-components'
import React from 'react';
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;

`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1100px;
display: flex;
justify-content: space-between;

@media  only screen and (max-width: 768px) {
    
}


`
const Left = styled.div`
flex: 1;

@media  only screen and (max-width: 768px) {
 
    display: none;
}


`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
@media  only screen and (max-width: 768px) {
  
    align-items: center;
    text-align: center;
}


`
const Title = styled.h1`
font-size: 74px;

@media  only screen and (max-width: 768px) {
    font-size: 60px ;
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


`
const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 500;
width: 120px;
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




const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Cube />
                    </Canvas>
                </Left>
                <Right>
                    {/* 3d model */}
                    <Title>Think outside the square space</Title>
                    <WhatWeDo>
                        <Line src='./img/line.png' />
                        <SubTitle>
                            Who we Are
                        </SubTitle>
                    </WhatWeDo>
                    <Desc>a creative group of designers and developers with a passion for the arts. </Desc>
                    <Button>See our works</Button>
                </Right>
            </Container>
        </Section>
    )
}

export default Who