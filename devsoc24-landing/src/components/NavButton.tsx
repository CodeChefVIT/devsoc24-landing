import styles from "@/styles/NavButton.module.css"
import Link from "next/link";

const NavButton = (props: {link: string; name: string}) => {
    return (
        <>
            <div className={`${styles.navLink} float-left text-center overflow-hidden`}>
                <Link
                    href={props.link}
                    className= {`${styles.navBtn} font-disket text-2xl`}
                >
                    {props.name}
                </Link>
                
                <svg className="inline-block mb-2 pl-0 m-1 w-7 h-7" viewBox="0 -10 68 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ArrowIcon">
                        <path id={styles.HighBox} fillRule="evenodd" clipRule="evenodd" d="M14 4H54V44H43V48H54H58V44V4V0H54H14H10V4V13H14V4Z" fill="black"/>
                        <path id={styles.LowBox} fillRule="evenodd" clipRule="evenodd" d="M22 11H4H0V15V54V58H4H43H47V54V38H43V54H4V15H22V11Z" fill="black"/>
                        <path id={styles.Arrow} d="M25.5876 34.0722L25.6568 34.1385L25.726 34.0723L43.1214 17.4296V29.1058V29.2058H43.2214H47H47.1V29.1058V11V10.9H47H28.107H28.007V11V14.6212V14.7212H28.107H40.2865L22.9307 31.3817L22.8555 31.4539L22.9308 31.5261L25.5876 34.0722Z" fill="black" stroke="black" strokeWidth="0.2"/>
                    </g>
                </svg>

            </div>
        </>
    );
}
 
export default NavButton;