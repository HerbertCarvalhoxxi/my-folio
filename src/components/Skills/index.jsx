import Img from '../../assets/Code typing-bro (1).svg'
import './skills.scss'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Skills() {

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".img-side", {
            x: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".img-side",
                //markers: true,
                start: "top 520px",
                end: "bottom 600px",
                scrub: true
            }
        })
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".items-side", {
            x: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".items-side",
                //markers: true,
                start: "top 520px",
                end: "bottom 600px",
                scrub: true
            }
        })

        return () => 
        gsap.killTweensOf(".skills")

    },[])

    return(
        <section id="skills">
            <h2>Minhas Habilidades</h2>
                <div className="skills-box">
                    <div className="img-side">
                        <img src={Img} alt="imagem-programacao" />
                    </div>
                    <div className="items-side">
                        <h2 className='h2'>Tecnologias Usadas</h2>
                        <div className="little-container">
                            <ion-icon name="logo-javascript"></ion-icon>
                            <ion-icon name="logo-react"></ion-icon>
                            <ion-icon name="logo-angular"></ion-icon>
                        </div>            
                        <div className="little-container">
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-sass"></ion-icon>
                            <ion-icon name="logo-github"></ion-icon>
                        </div>                     
                    </div>
                </div>
        </section>
    )
}