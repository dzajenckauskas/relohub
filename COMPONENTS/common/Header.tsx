import HeaderPinkElement from "./HeaderPinkElement";
import Image from "next/image";
import Link from 'next/link'
import React from "react";

export default function Header() {
    const links = [
        { id: 0, name: "Home", url: '/' },
        { id: 1, name: "Guides", url: '/guides' },
        { id: 2, name: "About us", url: '/about-us' }
    ]

    const renderLinks = links.map((link) => {
        return (
            <Link key={link.id} passHref href={link.url}
                style={{ fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>
                {link.name}
            </Link>
        )
    })
    return (
        <>
            <header
                style={{
                    borderBottom: '1px solid #d8d8d8', backgroundColor: '#f1f1f1',
                    position: 'fixed', top: 0, width: '100%', zIndex: 99
                }}>
                <div
                    className="mainpageheaderwrp"
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 75
                    }}>
                    <Image
                        width={180}
                        height={80}
                        src={"/logo2.png"}
                        alt="logo"
                        style={{ objectFit: "contain" }}
                    />
                    <div style={{
                        display: 'flex', flexDirection: 'row',
                        gap: 60,
                        alignItems: 'center'
                    }}>
                        {renderLinks}
                    </div>
                    <div style={{
                        display: 'flex', flexDirection: 'row', gap: 15,
                        alignItems: 'center',
                    }}>
                        <div style={{
                        }}>
                            <button style={{
                                border: '1px solid #ccc',
                                borderRadius: 3, fontWeight: 700,
                                fontSize: 14,
                                padding: '14px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                fontFamily: 'inherit',
                                cursor: 'pointer'
                            }}>
                                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginRight: 10 }} width="15" height="15" viewBox="0 0 569.16 569.16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="25.043039999999998"></g>
                                    <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M451.919,0h-122.4c-25.355,0-45.9,20.551-45.9,45.9s20.544,45.9,45.9,45.9h119.34V477.36h-119.34 c-25.355,0-45.9,20.545-45.9,45.899c0,25.355,20.544,45.9,45.9,45.9h122.4c48.93,0,88.74-39.811,88.74-88.74V88.74 C540.659,39.811,500.849,0,451.919,0z"></path>
                                        <path d="M401.216,258.209L215.797,72.792c-14.566-14.566-26.371-9.676-26.371,10.924v70.777H43.421 c-8.238,0-14.92,6.677-14.92,14.921v230.332c0,8.237,6.683,14.921,14.92,14.921h146.005v70.777 c0,20.594,11.805,25.49,26.371,10.925l185.418-185.418C415.78,296.386,415.78,272.774,401.216,258.209z"></path> </g> </g> </g></svg>
                                <span>
                                    CUSTOMER PORTAL
                                </span>
                            </button>
                        </div>
                        <HeaderPinkElement />
                    </div>
                </div>
            </header>
            <div style={{ height: 75, width: '100%', backgroundColor: '#ebebeb' }}>
            </div>
        </>

    );
}
