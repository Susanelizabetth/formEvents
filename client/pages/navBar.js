import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function NavBar({ formData }) {
    return(
        <nav className="navbar is-transparent is-fixed-top">
            <div className="navbar-brand pl-6 py-2">
                
                    <Image src="/utp.jpg"
                           width={70}
                           height={70}
                           className={styles.imagen}/>
                    <a className="navbar-item title is-3">DICOMES</a>
              
                
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link href='/'>
                        
                        <a className="navbar-item" href="/">Inicio</a>
                    </Link>
                    
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        Formularios de Servicios
                        </a>
                        <div className="navbar-dropdown is-boxed">
                            {formData.map((link, index) =>{
                                return(
                                    <Link href={link.path}>
                                        <a key={link.id} className="navbar-item">{link.name}</a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                    <span className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                    <span>
                                        Tweet
                                    </span>
                                </a>
                            </p>
                            <p className="control">
                                <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                                    <span className="icon">
                                        <i className="fas fa-download"></i>
                                    </span>
                                    <span>Download</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar