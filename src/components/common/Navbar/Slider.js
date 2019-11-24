import React, { useEffect, useState } from 'react'
import posed from 'react-pose';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Parallax } from 'react-scroll-parallax';

export default function Slider({ items, duration = 5000 }) {
    const [selected, setSelected, next, previous] = useSlider(items.length, duration);
    return (
        <div>
            <div style={{ width: '100%', height: '100vh', marginTop: 10, position: 'relative' }}>
                {items.map((item, i) => <SlideItem item={item} visible={i === selected} />)}
                <Button style={{ left: 5 }} onClick={previous}> {'<'} </Button>
                <Button style={{ right: 5 }} onClick={next}> {'>'} </Button>
            </div>
        </div>
    )
}

const SlideItem = ({ visible, item }) =>
    <Box pose={visible ? 'visible' : 'hidden'} style={{ height: '100vh', width: '100%', position: 'absolute' }}>
        <BoxImage style={{ width: '100%', height: '100%', position: 'relative', zIndex: -1 }}>
            <Img fadeIn fluid={item.fluid} style={{ height: '100%'}} imgStyle={{ objectFit: 'cover' }} />
        </BoxImage>

        <div style={{ position: 'absolute', top: 0, left:0, right: 0, padding: 30, borderRadius: 10, margin: 20, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <DescBoxAnimated style={{}} pose={visible ? 'visible' : 'hidden'} >

                <h2 style={{ color: item.color1 }}>{item.name}</h2>
                <p style={{ color: item.color2, fontSize: 40 }} className="sinhala-font">{item.description}</p>
            </DescBoxAnimated>
        </div>
    </Box >


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
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  border-radius: 10px;
  color: white;
  background-color: rgba(0, 0,0,0.2);
`;

const DescriptionBox = styled.div`
  top: 20;
  left: 3%;
  position: absolute;
  padding: 10px;
//   color: white;
  border-radius: 5px;
//   background-color: rgba(0,0,0,0.8);
`;
const Box = posed.div({
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 1000 }
    },
    hidden: {
        opacity: 0, x: 0,
        transition: { duration: 1000 }
    },

});

const BoxImage = posed.div({
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
});

const DescBoxAnimated = posed.div({
    visible: { opacity: 1, y: 0, delay: 300 },
    hidden: { opacity: 0, y: 100, delay: 300 }
});