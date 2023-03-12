import styled from 'styled-components'

const Container = styled.div`
    width: 1366px;
    min-height: 100vh;
    background-color: #222222;
    margin: 0 auto;
    color: white;
    font-family:cursive;
    padding: 20px 40px;
`
const Wail = styled.div`
    width: 70%;
    border-bottom: 10px dotted white;
    padding: 15px 5px;
    
    display: flex;
    align-items: flex-end;
    
    position: relative;
    .info{
        min-width: 7%;
    }
    .second{
        position: absolute;
        right: 10px;
        top: 0;
        font-size: 18px;
    }
`
const Car = styled.div`
    width: 85%;
    box-sizing: content-box;
    img{
        width: 90px;
        height: 100%;
        margin-left: ${({ machineLoc }) => machineLoc}%;
    }
`

const InputText = styled.div`
    max-width: 70%;
    background-color: #444444;
    margin-top: 20px;
    min-height: 150px;
    padding: 25px 15px;
    border-radius: 15px;

    display: grid;
    gap: 50px;
    .text{
        font-family:  sans-serif;
        font-weight: 900;
        font-size: 25px;

        .true{
            color: #dfffa0;
        }
        .false{
            color: #fcbea4;
        }
    }
    .input{
        width: 100%;
        input{
            width: 100%;
            padding: 5px;
            background-color: #222222;
            color: white;
            border: none;
            outline: none;

            font-family:  sans-serif;
            font-weight: 900;
            font-size: 25px;
            border-radius: 5px;
        }
    }
`

export { Container, Wail, Car, InputText }