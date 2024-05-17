import "./contact.scss";
import LinkImg from "../../assets/minhafoto.jpg";
import { toast } from "react-toastify";

export default function Contact() {

  function copyLink() {
    navigator.clipboard.writeText("herbertcarvalhoxxi@gmail.com");
    toast.success("Copiado");
  }

  return (
    <section id="contact">
      <div className="about-container">
        <p className="section__text__p1">Se interessou?</p>
        <h1 className="title">Fale Comigo</h1>
        <img src={LinkImg} alt="imagem de perfil" />
        <p>@herbert_cs</p>
        <div className="links-container">
          <div className="email">
            <a onClick={() => copyLink()}>
              Gmail<ion-icon name="mail-outline"></ion-icon>
            </a>
          </div>
          <div className="github">
            <a
              onClick={() =>
                window.open("https://github.com/HerbertCarvalhoxxi/")
              }
            >
              GitHub <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
          <div className="linkedin">
            <a
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/herbert-carvalho-78581422b/"
                )
              }
            >
              LinkedIn <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
          <div className="insta">
            <a
              onClick={() =>
                window.open("https://www.instagram.com/herbert_cs/")
              }
            >
              Instagram<ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
