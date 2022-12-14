import Link from "next/link";
import style from "../styles/menu.module.css"

export default function Menu(){
    return (
    <nav className= {style.menu}>
        <div >
            <Link href="/"> <p className={style.link}>HOME</p></Link>
            <Link href="/store"> <p className={style.link}>STORE</p></Link>
            <Link href="/faq"> <p className={style.link}>FAQ</p></Link>
        </div>

        <div>
            <a href="#" className={style.link}> Cart (0)</a>
        </div>



    </nav>
    
    )
}