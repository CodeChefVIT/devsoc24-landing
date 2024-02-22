import styles from "@/styles/navButton.module.css"
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import arrow from "@/assets/images/arrow_icon.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const NavButton = (props: {link: string; name: string}) => {
    return (
        <>
            <div className="w-100 h-100">
                <Link
                    href={props.link}
                    className= {`${styles.navBtn} font-disket text-3xl`}
                >
                    {props.name}
                </Link>
                <Image src={arrow as StaticImport} alt="arrow" className="inline-block p-1 pb-3 pl-0 m-1 w-8 h-8" />
            </div>
        </>
    );
}
 
export default NavButton;