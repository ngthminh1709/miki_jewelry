import React from 'react'
import Page from 'src/components/Page';
import CartUser from 'src/sections/cartInfor/CartUser'
export default function cart() {
    return (
        <Page title="Cart">
            <div className="app mt-[24px] ">
                <div className="container mt-0">
                    <p>Breadcum</p>
                    <div className="mt-[48px]">
                        <CartUser />
                    </div>
                </div>
            </div>
        </Page>

    )
}
