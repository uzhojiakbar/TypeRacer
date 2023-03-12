import React, { useState } from 'react'
import { Car, Container, InputText, Wail } from './style'
import Car1 from '../../Assets/cars/car1.svg'
import texts from '../../Mock'
import { defaoultText } from '../../Mock'

const Body = () => {
    const [inputData, setInputData] = useState('')
    const [sec, setSec] = useState(1)
    const getWordGap = (word = '') => {
        word = word.trim()
        let gap_count = 1
        if (word.length) {
            for (let index = 0; index < word.length; index++) {
                if (word[index] === ' ') {
                    gap_count += 1
                }
            }
        }
        if (word.length == 0) {
            gap_count = 0
        }
        return gap_count
    }
    const Render_Prasent = () => {
        const all = getWordGap(texts[defaoultText]?.text)
        const now = getWordGap(inputData)
        const Pr = now / (all / 100)
        return Pr <= 100 ? Pr : 100
    }
    let text = texts[defaoultText]?.text.split('')
    console.log(Render_Prasent());
    let setTimer = () => {
        if (inputData.length &&  Render_Prasent() < 98) {
            setTimeout(() => {
                setSec(sec + 1)
            }, 1000)
        }
    }
    setTimer()
    return (
        <Container>
            <Wail>
                <div className="info">
                    <div className="score">0</div>
                    <div className="name">Guest <br /> (You) </div>
                </div>
                <Car machineLoc={Render_Prasent} >
                    <img src={Car1} alt="" />
                </Car>
                <div className="second">
                    {sec}
                </div>
            </Wail>
            <InputText>
                <div className="text">
                    {text.map((s, i) => {
                        let color;
                        if (i < inputData.length) {
                            color = s === inputData[i] ? 'true' : 'false';
                        }
                        return <span className={color} key={i} >{s}</span>
                    })}
                </div>
                <div className='input'>
                    <input
                        onChange={(e) => setInputData(e.target.value)}
                        type="text" />
                </div>
            </InputText>
        </Container>
    )
}

export default Body