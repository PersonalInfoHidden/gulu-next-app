import React from "react";

const NavBar = () => {
    const navElements = [
        ["Home", "/"],
        ["About", "/about"],
        ["Products", "/products"],
    ];
    return (
        <nav className="flex justify-center items-center py-8">
            <div className="flex justify-between w-4/6 ">
                <ul className="list-none flex gap-x-12">
                    {navElements.map((value, index) => (
                        <NavElement
                            key={index}
                            name={value[0]}
                            url={value[1]}
                        />
                    ))}
                </ul>
                <div className="">
                    <div className="rounded px-5 py-3 text-xl font-medium bg-neutral-800 text-white hover:bg-neutral-200 hover:text-neutral-800">
                        <a href="/sign-in">Sign In</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavElement = ({ name, url }: { name: string; url: string }) => {
    return (
        <li className="text-2xl">
            <a href={url}>{name}</a>
        </li>
    );
};

export default NavBar;
