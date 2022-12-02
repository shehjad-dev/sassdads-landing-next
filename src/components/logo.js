/** @jsx jsx */
import Image from "next/image";
import { jsx } from "theme-ui";
import { Link } from "components/link";
import LogoSvg from "components/icons/logo";
import MainLogo from "../assets/images/sassdads-logo.svg";

export default function Logo({ isWhite, ...props }) {
    return (
        <Link path="/" sx={styles.logo} {...props}>
            {/* <LogoSvg isWhite={isWhite} /> */}

            <Image
                src={MainLogo}
                alt="Picture of the author"
                width={60}
                height={70}
            />
            <span>SassDads</span>
        </Link>
    );
}
const styles = {
    logo: {
        alignItems: "center",
        cursor: "pointer",
        display: "inline-flex",
        svg: {
            height: "auto",
            width: [128, null, "100%"],
        },
        span: {
            fontWeight: "bolder",
            fontSize: "1.5rem",
            marginLeft: "0.6rem",
        },
    },
};
