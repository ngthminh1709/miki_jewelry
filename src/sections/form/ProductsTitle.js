// Import library
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from "recoil";
import { totalCart } from 'src/recoils/cartState';
// Import component, function, asset
import FormatPrice from 'src/utils/formatPrice';

export const ProductsTitle = () => {
    // Get state, action from storage recoil
    const totalPriceOfProducts = useRecoilValue(totalCart)
    const [totalPriceOfProduct, setSotalPriceOfProduct] = useState("")
    useEffect(() => { setSotalPriceOfProduct(totalPriceOfProducts) }, [totalPriceOfProducts])
    // UI
    return (
        <div className="pr-[26px]">
            <div className="border-t-[1px] mt-[44px] mobile:mt-[23px] border-solid border-[#272727]"></div>
            <div className="flex justify-between mt-[35px] mobile:mt-[20px]">
                <h1 className="text-base font-medium leading-6 text-black">Giá sản phẩm</h1>
                {/* Total Price Of Products */}
                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold"><FormatPrice price={totalPriceOfProduct} quantity={1} /></h1>
            </div>
            <div className="flex justify-between mt-[20px] mobile:mt-[12px]">
                <h1 className="text-base font-medium leading-6 text-black">Phí giao hàng</h1>
                {/* Delivery Fee */}
                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold"><FormatPrice price={20000} quantity={1} /></h1>
            </div>
            <div className="flex justify-between mt-[20px] mobile:mt-[12px]">
                <h1 className="text-base font-medium leading-6 text-black">Giảm giá</h1>
                {/* Disccount */}
                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold"><FormatPrice price={20000} quantity={1} /></h1>
            </div>
            <div className="border-t-[1px] mt-[33px] mobile:mt-[20px] border-solid border-[#272727]"></div>
            <div className="flex justify-between mt-[32px] mobile:mt-[9px]">
                <h1 className="text-base font-medium leading-6 text-black">Tổng</h1>
                {/* Last Price */}
                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold"><FormatPrice price={totalPriceOfProduct + 20000 - 20000} quantity={1} /></h1>
            </div>
        </div>
    )
}

