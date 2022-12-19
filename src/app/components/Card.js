/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import javascript from "../images/js.jpeg";
import python from "../images/python.png";
import cplusplus from "../images/cplusplus.jpg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={javascript} />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              Javascript
            </h5>
            <p className="text-slate-500 text-lg mt-3">
              JavaScript, theo phiên bản hiện hành, là một ngôn ngữ lập trình
              thông dịch được phát triển từ các ý niệm nguyên mẫu. Ngôn ngữ này
              được dùng rộng rãi cho các trang web cũng như phía máy chủ.
            </p>
            <Link to="/coding" className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out ">
              Bắt đầu ngay
            </Link>
            <Link
              to="/coding"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Chạy thử ví dụ
            </Link>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={cplusplus}></img>
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">C++</h5>
            <p className="text-slate-500 text-lg mt-3">
              C++ là một ngôn ngữ lập trình bậc trung. Đây là ngôn ngữ lập
              trình được tạo ra bởi Bjarne Stroustrup như một phần mở rộng của
              ngôn ngữ lập trình C và C ++ có tính năng: lập trình tổng quát,
              hướng đối tượng, ...
            </p>
            <Link
              to="/coding"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Bắt đầu ngay
            </Link>
            <Link
              to="/coding"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Chạy thử ví dụ
            </Link>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={python}></img>
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">Python</h5>
            <p className="text-slate-500 text-lg mt-3">
              Python là một ngôn ngữ lập trình bậc cao cho các mục đích lập
              trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào
              năm 1991. Python được thiết kế với ưu điểm mạnh là dễ đọc, dễ học
              và dễ nhớ.
            </p>
            <Link
              to="/coding"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Bắt đầu ngay
            </Link>
            <Link
              to="/coding"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Chạy thử ví dụ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
