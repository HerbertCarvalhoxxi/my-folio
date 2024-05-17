import './about.scss'
import Img from '../../assets/Website Creator-bro.svg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

export default function About(){

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".emojis-container", {
            x: 0,
            opacity: 1,
        })

        return () => 
        gsap.killTweensOf(".emojis-container")

    },[])

    return(
        <section id="about">
        <div className="emojis-container">
            <img src={Img} alt='' />
            <h1>Herbert Carvalho</h1>
            <h2>Desenvolvedor Front-end</h2>
            <div className="bubble-pc">💻</div>
            <div className="bubble-rocket">🚀</div>
            <div className="bubble-dev">👨‍💻</div>
            <div className="bubble-alien">👾</div>
        </div>
        </section>
        
    )
}