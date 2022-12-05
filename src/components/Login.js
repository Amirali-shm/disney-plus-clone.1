import React from 'react';
import styled from 'styled-components';
function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    The film is about an aging and lonely Chinese Canadian mother, suffering from empty nest syndrome.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    position:relative;    
    height: calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content: center;
    
    &:before {
        background-image:url("images/login-background.jpg");
        position:absolute;
        top:0;
        bottom:0;
        content:"";
        left:0;
        right:0;
        opacity:0.7;
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        z-index:-1;
        
    }
`
const CTA = styled.div`
    max-width:650px;
    padding:80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
    

`
const CTALogoOne = styled.img`
    
`
const CTALogoTwo = styled.img`
    width:95%;
`
const SignUp = styled.a`
    width:1005;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color: #f9f9f9;
    border-radius: 6px;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    transition: all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom: 12px;
    &:hover {
        background: #0483ee;

    }
`
const Description = styled.p`
    font-size:12px;
    letter-spacing:1.5px;
    line-height:1.5;
    text-align:center;
`