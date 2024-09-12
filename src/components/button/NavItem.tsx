import Link from "next/link";
import { FC } from "react";

interface NavItemProps {
    name: string,
    link: string
}

const NavItem: FC<NavItemProps> = props => (
    <Link className="px-4 py-2 font-semibold rounded-full  hover:bg-gray-300" href={props.link}>{props.name}</Link>
)
 
export default NavItem;