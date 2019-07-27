import React, { useEffect, useState } from 'react'
import posed from 'react-pose';
import styled from 'styled-components';
import Img from 'gatsby-image';

export default function Slider({ items, duration = 5000 }) {
    const [selected, setSelected, next, previous] = useSlider(items.length, duration);
    return (
        <div>
            <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
                {items.map((item, i) => <SlideItem item={item} visible={i === selected} />)}
                <Button style={{ left: 5 }} onClick={previous}> {'<'} </Button>
                <Button style={{ right: 5 }} onClick={next}> {'>'} </Button>
            </div>
        </div>
    )
}

const SlideItem = ({ visible, item }) =>
    <Box pose={visible ? 'visible' : 'hidden'} style={{ height: '80vh', width: '80vw', backgroundColor: 'white', position: 'absolute' }}>
        <div style={{ width: '80vw', height: '100%', position: 'relative' }}>
            <Img fadeIn fluid={item.fluid} style={{ height: '100%' }} imgStyle={{ objectFit: 'contain' }} />
        </div>
        <DescriptionBox>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </DescriptionBox>
    </Box>


const useSlider = (count, duration) => {
    const [selected, setSelected] = useState(0)
    const next = () => setSelected(v => (v + 1) % count)
    const previous = () => setSelected(v => (v - 1 + count) % count)

    useEffect(() => {
        const interval = setInterval(next, duration);
        return () => clearInterval(interval)
    }, [count, duration, selected])
    return [selected, setSelected, next, previous]
}

const Button = styled.button`
  top: 50%;
  padding: 10px;
  position: absolute;
  background-color: yellow;
`;

const DescriptionBox = styled.div`
  top: 5%;
  left: 3%;
  position: absolute;
  padding: 30px;
  border-radius: 10px;  
  background-color: rgba(0,0,0,0.1);
`;
const Box = posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
});