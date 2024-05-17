import './header.scss'

export default function Header() {

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle('open');
        icon.classList.toggle('open');
      }

      function handleNavigationClick (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return(
        <>
        <header id='desktop-nav'>
            <div className="logo">
                <span>Bert</span>
                <span>dev</span>
            </div>
            <nav>
                <ul>
                    <li><a onClick={()=>handleNavigationClick("skills")}>Skills</a></li>
                    <li><a onClick={()=>handleNavigationClick("projects")}>Projetos</a></li>
                    <li><a onClick={()=>handleNavigationClick("contact")}>Fale comigo</a></li>
                </ul>
            </nav>
        </header>
        <header>
        <nav id="hamburger-nav">
        <div className="logo">Bert<br/>Dev</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={()=> toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a onClick={()=>handleNavigationClick("skills")}>Skills</a></li>
            <li><a onClick={()=>handleNavigationClick("projects")}>Projetos</a></li>
            <li><a onClick={()=>handleNavigationClick("contact")}>Fale Comigo</a></li>
          </div>
        </div>
      </nav>
      </header>
        </>
    )
  }