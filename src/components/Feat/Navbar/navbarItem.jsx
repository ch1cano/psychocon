import Link from "next/link";
import "./Navbar.css";
const NavItem = ({ text, href, active }) => {
	return (
		<Link href={href}>
			<p className={`nav__item ${active ? "active" : ""}`}>{text}</p>
		</Link>
	);
};

export default NavItem;
