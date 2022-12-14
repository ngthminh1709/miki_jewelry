import React, { useState } from 'react';
import { RatingReview } from 'src/components/Rating';
import RatingProduct from './RatingProduct';
import FeedbackContainer from '../../components/Feedbacks/FeedbackContainer';

export default function MoreDetail({ product, feedbacks }) {
  const Tabs = ['Mô tả', 'Bảo hành và Hoàn trả', 'Vận chuyển', `Đánh giá`];
  const Rates = ['Tất cả', `5 Sao`, `4 Sao`, `3 Sao`, `2 Sao`, `1 Sao`];
  const [tabIndex, setTabIndex] = useState(3);
  const [tabRateIndex, setTabRateIndex] = useState(0);

  return (
    <div>
      <div className="mt-[70px]">
        {Tabs.map((tab, index) => (
          <span
            onClick={() => {
              setTabIndex(index);
            }}
            key={tab}
            className={
              tabIndex == index
                ? 'text-xl font-bold text-primary/1 underline underline-offset-8 mr-[120px] cursor-not-allowed'
                : 'text-xl font-bold text-Neutral/3 mr-[120px] cursor-pointer'
            }
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="mt-[44px]  relative">
        <div className={tabIndex == 0 ? 'block' : 'hidden'}>
          <h3 className="text-xl font-bold mb-2">Sản phẩm:</h3>
          <p className="text-lg text-justify">{product.description}</p>
        </div>
        <div className={tabIndex == 1 ? 'block' : 'hidden'}>
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Chính sách bảo hành:</h3>
              <p>(Áp dụng cho vàng 18k) </p>
            </div>
            <table className="table-fixed border-collapse border-primary-text border">
              <thead>
                <tr className="border-collapse border-primary-text border">
                  <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                    Nội dung
                  </th>
                  <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                    Thời gian
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-collapse border-primary-text border p-3">Làm sạch sản phẩm</td>
                  <td className="border-collapse border-primary-text border p-3">Trọn đời</td>
                </tr>
                <tr>
                  <td className="border-collapse border-primary-text border p-3">Đánh bóng và xi mới</td>
                  <td className="border-collapse border-primary-text border p-3">05 lần</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-[32px]">
            <div>
              <h3 className="text-xl font-bold mb-2">Phí bảo hành:</h3>
            </div>
            <table className="table-fixed border-collapse border-primary-text border">
              <thead>
                <tr>
                  <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                    Nội dung bảo hành
                  </th>
                  <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                    Chi phí bảo hành (/lần)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-collapse border-primary-text border p-3">Sửa độ rung với sản phẩm Ladanse</td>
                  <td className="border-collapse border-primary-text border p-3">Làm mới sản phẩm</td>
                </tr>
                <tr>
                  <td className="border-collapse border-primary-text border p-3">200.000 đ</td>
                  <td className="border-collapse border-primary-text border p-3">50.000 đ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Lưu ý: </h3>
            <p className="text-red-500 text-lg">
              Sản pẩm không còn nguyên vẹn hoặc mất hóa đơn, Miki sẽ thâu mua lại với 80% giá trị sản phẩm.
            </p>
            <p className="mt-3 text-red-500 text-lg">
              Các sản pẩm trang sức bạc, mạ vàng, vòng đá, dây da các loại, chuỗi ngọc trai: Miki không mua lại!
            </p>
          </div>
        </div>
        <div className={tabIndex == 2 ? 'block' : 'hidden'}>
          <h3 className="text-xl font-bold mb-2">Chính sách vận chuyển</h3>
          <p>Với đối tác giao hàng uy tín, có mua bảo hiểm hàng hóa, thời gian giao hàng nhanh và đúng hẹn:</p>
          <table className="table-fixed border-collapse border-primary-text border ml-[90px] mt-6">
            <thead>
              <tr>
                <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[200px] p-3">
                  Khu vực
                </th>
                <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[300px] p-3">
                  Nội thành Hà Nội/TP Hồ Chí Minh
                </th>
                <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[200px] p-3">
                  Các tỉnh khác
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-collapse border-primary-text border p-3">Thời gian giao hàng</td>
                <td className="border-collapse border-primary-text border p-3">2 ngày</td>
                <td className="border-collapse border-primary-text border p-3">3-5 ngày</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-xl text-[#D2311B] font-bold mb-2 mt-[30px]">***Lưu ý: </h3>
          <p>Với sản phẩm giảm giá khuyến mãi từ 20% trở lên khách hàng sẽ chịu hoàn toàn phí giao hàng.</p>
        </div>
        <div className={tabIndex == 3 ? 'block' : 'hidden'}>
          <div className="flex justify-between">
            <div className="w-[200px]">
              <h3 className="text-xl font-bold mb-2">Đánh giá sản phẩm</h3>
              <div className="flex">
                {!product.rating.rate ? (
                  <span>Chưa có đánh giá</span>
                ) : (
                  <div>
                    <RatingReview size={'h-[20px]'} value={product.rating.rate} />
                    <span className="font-bold text-xl ml-5">{product.rating.rate} sao</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap w-[800px]">
              {Rates.map((rate, index) => (
                <span
                  onClick={() => {
                    setTabRateIndex(index);
                  }}
                  key={rate}
                  className={
                    tabRateIndex == index
                      ? 'px-6 py-2 bg-white border rounded-8 border-primary/1 text-primary/1 mr-6 mb-6 cursor-not-allowed'
                      : 'px-6 py-2 bg-white border rounded-8 text-Neutral/3 border-Neutral/3 mr-6 mb-6 cursor-pointer'
                  }
                >
                  {rate}
                </span>
              ))}
            </div>
          </div>
          {/* tab rating star */}
          <FeedbackContainer feedbacks={feedbacks} tabRateIndex={tabRateIndex}  />
          <RatingProduct product={product} />
        </div>
      </div>
    </div>
  );
}
