import React from "react";
import javascript1 from "../../src/images/js1.png";
import javascript2 from "../../src/images/js2.jpg";

function BlogContent() {
  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2 gap-x-8 gap-y-8">
            <img className="h-56 w-full " src={javascript1} />
            <h1 className="font-bold text-2xl my-1 pt-5">
              Series tự học Javascript trong 10 tiếng
            </h1>
            <div className="pt-5 ">
              <p>
                Hầu hết mọi người khi bắt đầu học lập trình web đều nhận được
                lời khuyên là bắt đầu từ HTML. Tuy nhiên, bản thân HTML không có
                nhiều tương tác và logic để bạn có thể học. Có thể bạn không
                biết, phần lớn những tương tác giữa trang web với người dùng
                như: hiện popup, hiệu ứng, slideshows ảnh hay submit dữ liệu lên
                server… chủ yếu được thực hiện bằng Javascript. Để phát triển
                các trang web hay ứng dụng web tương tác với người dùng như vậy,
                bạn cần phải làm quen với các khái niệm cơ bản về Javascript.
                Việc tự học Javascript không hề khó, chỉ cần bạn hiểu được tư
                tưởng ban đầu của nó. Thì việc học sẽ cực dễ dàng.
              </p>{" "}
              <br />
              <strong className="text-red-500">
                Đọc trước khi bắt đầu: 7 sai lầm khiến việc học Javascript đổ bể
              </strong>
              <p>
                Để các bạn có thể dễ dàng làm chủ được ngôn ngữ Javascript, mình
                sẽ xây dựng một series tự học Javascript. Mình sẽ cố gắng trình
                bày thật cơ bản, dễ hiểu để những bạn mới học lập trình cũng có
                thể tiếp thu được.
              </p>
              <br />
              <h2 className="font-bold text-black">
                #Javascript là gì? Javascript dùng để làm gì?
              </h2>
              <br />
              <p>
                JavaScript (viết tắt là JS) là một ngôn ngữ chương trình thông
                dịch. Javascript được hỗ trợ bởi hầu hết các trình duyệt web như
                Chrome, Firefox, IE, Opera.v.v… Kể cả các trình duyệt trên điện
                thoại thì giờ cũng đã hỗ trợ đầy đủ Javascript. <br />
                <br />
                Thuở khai sinh, Javascript được sử dụng để phát triển front end,
                xây dựng các ứng dụng trên trình duyệt web. Nhưng nay, với sự ra
                đời của NodeJS, Javascript có thể sử dụng để xây dựng cả các ứng
                dụng phía back-end nữa.
                <br />
                <br />
                Theo đánh giá của nhiều chuyên gia, các máy chủ Nodejs hoạt động
                rất ổn định, có tính tin cậy cao. Đặc biệt là tốc độ cực nhanh.{" "}
                <br />
                <br />
                Có thể nói rằng, Javascript là ngôn ngữ lập trình có phổ biến
                nhất hiện nay. Với lập trình viên Javascript, giờ đây có thể xây
                dựng được ứng dụng từ client tới server. Hay nói cách khác là
                Full stack enginer với chỉ một ngôn ngữ.
                <br />
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-1 overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img className="p-2 w-32 h-32 rounded-full mx-auto" src={javascript2} />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
              Brendan Eich
              </h1>
              <p className="text-center text-gray-900 font-medium">
              American computer programmer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
