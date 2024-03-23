import React from 'react'
import GetInTOuch from '../main_page/getInTouch'
import Header from './Header'

type Props = {
    children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
    return (
        <main className="mainpagemainwrp">
            <Header />
            {children}
            <GetInTOuch />
        </main>
    )
}

export default PageLayout
