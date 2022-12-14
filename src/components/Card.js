import React from "react";
import javascript from "../../src/images/js.jpeg";
import python from "../../src/images/python.png";
import cplusplus from "../../src/images/cplusplus.jpg";
import shell from "../../src/images/shell.png";
import java from "../../src/images/java.png";
function Card() {
  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={javascript}></img>
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              Javascript
            </h5>
            <p className="text-slate-500 text-lg mt-3">
              JavaScript, theo phiên bản hiện hành, là một ngôn ngữ lập trình
              thông dịch được phát triển từ các ý niệm nguyên mẫu. Ngôn ngữ này
              được dùng rộng rãi cho các trang web cũng như phía máy chủ.
            </p>
            <a
              href="#"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Bắt đầu ngay
            </a>
            <a
              href="#"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Chạy thử ví dụ
            </a>
          </div>
        </div>
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={cplusplus}></img>
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">C++</h5>
            <p className="text-slate-500 text-lg mt-3">
              C++ là một ngôn ngữ lập trình bậc trung. Đây là ngôn ngữ lập trình
              được tạo ra bởi Bjarne Stroustrup như một phần mở rộng của ngôn
              ngữ lập trình C và C ++ có tính năng: lập trình tổng quát, hướng
              đối tượng, ...
            </p>
            <a
              href="#"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Bắt đầu ngay
            </a>
            <a
              href="#"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Chạy thử ví dụ
            </a>
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
            <a
              href="#"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Bắt đầu ngay
            </a>
            <a
              href="#"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Chạy thử ví dụ
            </a>
          </div>
        </div>

        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={shell}></img>
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">Shell</h5>
            <p className="text-slate-500 text-lg mt-3">
            Trong điện toán, shell là một chương trình máy tính hiển thị các dịch vụ của hệ điều hành cho người dùng hoặc các chương trình khác. Nói chung, shell của hệ điều hành sử dụng giao diện dòng lệnh hoặc giao diện người dùng đồ họa, tùy thuộc vào vai trò và hoạt động cụ thể của máy tính.
            </p>
            <a
              href="#"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Bắt đầu ngay
            </a>
            <a
              href="#"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Chạy thử ví dụ
            </a>
          </div>
        </div>

        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={java}></img>
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">Java</h5>
            <p className="text-slate-500 text-lg mt-3">
              Java là một ngôn ngữ lập trình hướng đối tượng, dựa trên lớp được
              thiết kế để có càng ít phụ thuộc thực thi càng tốt.
            </p>
            <a
              href="#"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Bắt đầu ngay
            </a>
            <a
              href="#"
              className="text-center bg-blue-400 text-fuchsia-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-out "
            >
              Chạy thử ví dụ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
