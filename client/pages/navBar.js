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
                            {formData.map((link) =>{
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
                    
                </div>
            </div>
        </nav>

    )
}

export default NavBar