import { FC } from "react";
import LoginButton from "../button/LoginButton";
import NavItem from "../button/NavItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import async from './../../utils/federatedLogout';
import LogoutButton from "../button/LogoutButton";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/16/solid";
import Link from "next/link";


interface NavbarProps {
    title: string
}


const Navbar: FC<NavbarProps> = async (props) => {
    const session = await getServerSession(authOptions);
    console.log(session)

    return (
        <nav className="px-5 flex justify-between content-center align-middle py-4 w-full shadow-md border-b">

            <p className="text-2xl font-semibold">{props.title}</p>
            <div className="flex justify-around align-middle items-center text-sm">
            
                <NavItem name={"Find Event"} link="#"/>
                <NavItem name={"Create Event"} link="#"/>
                <NavItem name={"Help Center"} link="#"/>    
                <NavItem name={"Find my tickets"} link="#"/>

                <Menu>
                    <MenuButton className="inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-full  hover:bg-gray-300">
                        {session?.user?.name}

                        <ChevronDownIcon className="size-5 fill-black" />
                    </MenuButton>
                    <MenuItems 
                        transition
                        modal={false}
                        anchor="bottom"
                        className="w-52 origin-top-right bg-white text-base text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 shadow-lg"
                    >
                        <MenuItem>
                            <Link href={'#'} className="block w-full py-3 px-5 data-[focus]:bg-black/10">
                                Edit
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/support">
                                Support
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/license">
                                License
                            </a>
                        </MenuItem>
                    </MenuItems>
                </Menu>

                {session ? <LogoutButton/> :<LoginButton/>}
                
            

            

            </div>
        </nav>
    )
}
export default Navbar;