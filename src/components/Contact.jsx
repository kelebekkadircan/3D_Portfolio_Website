import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;

@media only screen and (max-width:768px){


}

`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;


`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media only screen and (max-width:768px){
        justify-content: center;

}
    
`
const Title = styled.h1`
font-weight: 200;

`
const Input = styled.input`
padding: 20px;
background-color: #e7e4e4;
border: none;
border-radius: 5px;

`
const TextArea = styled.textarea`
padding: 20px;
border: none;
background-color: #e7e4e4;
resize:none;

`
const Form = styled.form`
    width: 500px;
    display:flex;
    flex-direction: column;
    gap: 25px;
    @media only screen and (max-width:768px){
        width: 330px;

}

`
const Right = styled.div`
flex: 1;

@media only screen and (max-width:768px){
display: none;

}

`
const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px;

    `


const Contact = () => {
    const ref = useRef()
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()

        emailjs.sendForm('service_c3raniu', 'template_zrur62r', ref.current, 'aQi6i08i72z1SnFP8')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setSuccess(false)
            });
    }
    return (
        <Section>
            <Container>
                <Left>
                    <Form onSubmit={handleSubmit} ref={ref} >
                        <Title>Contact Us</Title>
                        <Input placeholder='Name' name='name' />
                        <Input placeholder='Email' name='email' />
                        <TextArea placeholder='Write Your Message' name='message' rows={12} />
                        <Button type="submit">
                            Send
                        </Button>
                        {success && 'Your message has been sent. We will get back to you soon :)'}
                    </Form>
                </Left>
                <Right>
                    <Map />
                </Right>
            </Container>
        </Section>
    )
}

export default Contact