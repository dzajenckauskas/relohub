import HeaderPinkElementNew from "./hederpinkelement-new";
import Image from "next/image";
import Link from 'next/link'
import React from "react";

export default function Header() {
    return (
        <header
            style={{
                borderBottom: '1.5px solid #d8d8d8', backgroundColor: '#f1f1f1',
            }}>
            <div
                className="mainpageheaderwrp"
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 75

                }}>
                <Image
                    width={170}
                    height={30}
                    src={"/logo2.png"}
                    alt="logo"
                    style={{ objectFit: "contain" }}
                />
                <div style={{
                    display: 'flex', flexDirection: 'row',
                    gap: 80,
                    alignItems: 'center'
                }}>
                    <Link passHref href={'/'}
                        style={{ fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                        Home
                    </Link>
                    <Link passHref href={'/blog'}
                        style={{ fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                        Guides
                    </Link>
                    <Link passHref href={'/about-us'}
                        style={{ fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                        About us
                    </Link>
                </div>
                <div style={{
                    display: 'flex', flexDirection: 'row', gap: 15,
                    alignItems: 'center',
                }}>
                    <div style={{
                    }}>
                        <button style={{
                            border: '1px solid #ccc',
                            borderRadius: 2, fontWeight: 700,
                            fontSize: 12,
                            fontFamily: 'inherit'
                        }}>
                            CUSTOMER PORTAL
                        </button>
                    </div>
                    <HeaderPinkElementNew />
                </div>
            </div>
        </header>
    );
}
