import styled from 'styled-components'
import Codebg from '../../../../assets/imgs/codebg.jpg'

export const LoginSection = styled.section`
    display: flex;
    min-height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background: radial-gradient(rgb(26,26,26), rgb(10,10,10));
    z-index: 2;
    
    &::after {
        background: url(${Codebg});
        opacity: 0.03;
        background-size: cover;
        height: 100%;
        width: 100%;
        content: '';
        position: absolute;
        z-index: 3;
    }
`

export const LoginContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    background: #0e0e0e;
    border-radius: 10px;
    padding: 12px 40px;
    gap: 20px;
    z-index: 5;
    box-shadow: 0px 0px 10px 0px rgb(250,250,250,0.05);
`

export const LoginHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
`

export const LoginHeader = styled.p`
    margin: 0;
    font-size: 35px;
    color: white;
    font-weight: bold;
`

export const LoginFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
`

export const LoginSubmit = styled.button`
    background: none;
    width: 100%;
    padding: 15px 40px;
    border-radius: 50px;
    color: white;
    border: 2px solid #00b800;
    position: relative;
    z-index: 0;
    overflow: hidden;
    cursor: pointer;
    background: #141414;
    font-family: Inter;
    font-size: 14px;

    &::after {
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background: #00b800;
        top: 100%;
        left: 100%;
        z-index: -1;
        border-radius: 20px;
    }

    &:hover {
        &::after {
            top: 0;
            left: 0;
            transition: all ease-in-out 0.2s;
        }
    }
`

export const LoginRedirect = styled.p`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: white;
    font-weight: 300;
    gap: 10px;
`