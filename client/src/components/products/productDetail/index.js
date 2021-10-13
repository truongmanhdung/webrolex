import AccessoryApi from "../../../apis/accessoryApi";
import data from "../../../apis/datafake";
import ProductApi from "../../../apis/productApi";
import convertToUrl from "../../../common/convertToUrl";
import Footer from "../../footer";
import Header from "../../header";

const ProductDetail = {
  async render({ id }) {
    const idproduct = localStorage.getItem(`product${id}`);
    const product = await (await ProductApi.getID(idproduct)).data.product;
    const listDataImage = product.imageURL;
    const imageActive = listDataImage[0];
    listDataImage.shift();
    const accessory = await AccessoryApi.getAll();
    return `
            ${await Header.render()}
            <div class="backgroud-image">
                    
            <div class="backgroud-ovelay"></div>
         </div>
            <div class="container pt-5">
            <div class="row">
            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <div class="tabs row">
              <div class="item-wrap col-2">
                <div class="active-img item-image">
                  <img
                    class="w-100"
                    src="${imageActive}"
                    alt=""
                  />
                </div>
                ${listDataImage.map(
                  (image) =>
                    `<div class="item-image">
                  <img
                    class="w-100"
                    src="${image}"
                    alt=""
                  />
                </div>`
                )}
              </div>
              <div class="content-wrap col-10">
                <div class="content-img active-img">
                  <img
                  class="w-100"
                  src="${imageActive}"
                  alt=""
                />
                </div>
                ${listDataImage.map(
                  (image) =>
                    `<div class="content-img">
                  <img
                    class="w-100"
                    src="${image}"
                    alt=""
                  />
                </div>`
                )}
              </div>
            </div>
          </div>
      
              <div class="col-5 p-4 bg-light product-detail-right">
                <div class="border-bottom">
                  <div class="text-center">
                    <h6>${product.description}</h6>
                    <h5>${product.title}</h5>
                  </div>
                  <div class="d-flex justify-content-between px-2">
                    <p style="font-size: 16px">${product.price} ₫</p>
                    <p><span class="text-decoration-line-through" style="font-size: 14px">2.299.000</span> ₫</p>
                    <p style="font-size: 12px; color: yellow">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <span style="color: black">(25)</span>
                    </p>
                    
                  </div>
                  <p class="text-center my-2">hoặc 613.000 ₫ x 3 kỳ với Fundiin</p>
                    <p class="text-center mb-3"><span class="border-end">Tình trạng: <span class="text-green me-2">Còn hàng</span></span><span class="ms-2">Size guide</span></p>
                </div>
                <p class="text-center my-3">
                  CHỌN PHỤ KIỆN MUA KÈM:
                </p>
                <div class="d-flex px-5 justify-content-around">
                  <div class="border-image col-6 px-2  mx-3">
                    <img width="100%" src="https://curnonwatch.com/_next/image?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fc%2Fu%2Fcuff-jackie-sil-shadow.png&w=1920&q=75" alt="">
                    <p class="text-center text-uppercase" style="font-size: 14px">Jackie Rosegold</p>
                    <p class="text-center" style="font-size: 12px">+ 239.000 ₫</p>
                    <p class="text-center submit-btn my-2" style="font-size: 14px">HẾT HÀNG</p>
                  </div>
                  <div class="border-image col-6 px-2  mx-3">
                    <img width="100%" src="https://curnonwatch.com/_next/image?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fc%2Fu%2Fcuff-stella-sil-3-shadow_1.png&w=1920&q=75" alt="">
                    <p class="text-center text-uppercase" style="font-size: 14px">Dây da black</p>
                    <p class="text-center" style="font-size: 12px">+ 239.000 ₫</p>
                    <p class="text-center submit-btn my-2" style="font-size: 14px">HẾT HÀNG</p>
                  </div>
                </div>
                <div class="thanh-toan my-4 px-4 mx-2">
                  <div class="add-card d-flex align-items-center justify-content-between">
                      <div class="d-flex">
                        <button type="button" class="btn btn-danger btn-add1"><i class="fas fa-minus"></i></button>
                        <input class="form-control mx-2" style="width: 50px" type="number" value="1" id="number" min="1">
                        <button type="button" class="btn btn-success btn-add2"><i class="fas fa-plus"></i></button>
                      </div>
                      <a href="/#/product" class="btn btn-primary"><span>THÊM GIỎ HÀNG</span></a>
                  </div>
                  <a href="/#/product" class="muangay" ><span>MUA NGAY</span></a>
                </div>
              </div>
            </div>
          </div>
          
        <div class="container-fluid py-3" style="background-color:#f8f7f4">
          <div class="d-flex footer justify-content-between container border-bottom ">
              <div class="fs-5 tablink active-tab" id="defaultOpen">
                  <span>THÔNG TIN SẢN PHẨM</span>
              </div>
              <div class="fs-5 tablink">
                  <span>CHÍNH SÁCH VẬN CHUYỂN</span>
              </div>
              <div class="fs-5 tablink" >
                  <span>ĐỔI TRẢ & BẢO HÀNH</span>
              </div>
              <div class="fs-5 tablink">
                  <span>HÌNH THỨC THANH TOÁN </span>
              </div>
          </div>
            <div class="footer-link active-footer tab pb-5 mt-4"  id="link">
              <div class="" style="max-width: 570px;">
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">Kích thước mặt</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.kichthuoc
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">Độ dày</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.doday
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">Màu mặt</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">Navy</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">Loại máy</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.loaimay
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">Kích cỡ dây</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.kichcoday
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">Chống nước</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.chongnuoc
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">Mặt kính</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.matkinh
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between">
                      <p class="productInfo_name m-0 py-2">Chất liệu dây</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.chatlieuday
                      }</p>
                  </div>
              </div>
          </div>
        <div class="footer-link tab mb-5 mt-4" id="link1">
            <p style="display:list-item">Phí vận chuyển:</p>
            <p>- <span class="fw-bold">MIỄN PHÍ VẬN CHUYỂN</span> với đơn hàng từ 700,000đ trở lê</p>
            <p>- <span class="fw-bold">30,000đ</span> với đơn hàng có giá trị thấp hơn 700,000đ</p>
            <p style="display:list-item">Thời gian vận chuyển:</p>
            <p>- Nội thành Hà Nội: 1-2 ngày</p>
            <p>- Miền Trung: 3-5 ngày</p>
            <p>- Miền Nam: 5-7 ngày</p>
        </div>
        <div class="footer-link tab mb-5 mt-4" id="link2">
            <p style="display: list-item">Chính sách đổi trả:</p>
            <p>- <span class="fw-bold">1 ĐỔI 1</span> trong vòng 3 ngày kể từ khi nhận hàng (kèm theo các điều kiện)</p>
            <p style="display: list-item">Chính sách bảo hành:</p>
            <p>- <span class="fw-bold">BẢO HÀNH 10 NĂM</span> đối với những lỗi từ nhà sản xuất</p>
            <p>- <span class="fw-bold">BẢO HÀNH MIỄN PHÍ(1 năm đầu)</span> với những lỗi người dùng như: vỡ, nứt kính, hấp hơi nước, va đập mạnh, rơi linh kiện bên trong mặt đồng hồ...</p>
            <p>- <span class="fw-bold">THAY PIN MIỄN PHÍ TRỌN ĐỜI</span></p>
        </div>
        <div class="footer-link tab mb-5 mt-4" id="link3">
            <p>Curnon chấp nhận các hình thức thanh toán sau:</p>
            <p class="fw-bold">Trả tiền mặt khi nhận hàng, Ví điện tử Momo, Ví điện tử VNPay, Trả góp theo kỳ hạn qua Fundiin</p>
            <div class="mb-3 d-flex">
                <img width="50px" class="me-1" src="https://curnonwatch.com/_next/static/image/assets/images/icons/cod.a04c67da9d3edece51e24c08592d20ec.png" alt="">
                <img width="50px" class="me-1" src="https://curnonwatch.com/_next/static/image/assets/images/icons/fundiin.0788fcd82b33f7ae4d33f7ee38841806.png" alt="">
                <img width="50px" class="me-1" src="https://curnonwatch.com/_next/static/image/assets/images/icons/momo.e7977f80729f86e583f88468e7a823d4.png" alt="">
                <img width="50px" src="https://curnonwatch.com/_next/static/image/assets/images/icons/vnpay.2cbf7ebaf4988a49059e72c54e22b62e.png" alt="">
            </div>
            <p class="fw-bold">Hoặc chuyển khoản ngân hàng qua tài khoản:</p>
            <p>Số tài khoản: 123100001000000</p>
            <p>Chủ tài khoản: Trương Mạnh Dũng</p>
            <p>Tên ngân hàng:</p>
            <p>BIDV Chi nhánh: BIDV chi nhánh Ba Vì, Hà Nội</p>
        </div>
    </div>
    
    ${Footer.render()}
    `;
  },
  afterRender() {
    Header.afterRender();
    const itemsImgs = document.querySelectorAll(".item-image");
    const contentImgs = document.querySelectorAll(".content-img");
    itemsImgs.forEach((item, index) => {
      item.addEventListener("click", () => {
        itemsImgs.forEach((item, index) => {
          itemsImgs[index].classList.remove("active-img");
          contentImgs[index].classList.remove("active-img");
        });
        itemsImgs[index].classList.add("active-img");
        contentImgs[index].classList.add("active-img");
      });
    });

    const tablink = document.querySelectorAll(".tablink");
    const footerlink = document.querySelectorAll(".footer-link");
    tablink.forEach((item, index) => {
      item.addEventListener("click", () => {
        tablink.forEach((item, index) => {
          tablink[index].classList.remove("active-tab");
          footerlink[index].classList.remove("active-footer");
        });
        tablink[index].classList.add("active-tab");
        footerlink[index].classList.add("active-footer");
      });
    });
    function increaseValue() {
      var value = parseInt(document.getElementById("number").value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById("number").value = value;
    }

    function decreaseValue() {
      var value = parseInt(document.getElementById("number").value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? (value = 1) : "";
      value--;
      document.getElementById("number").value = value;
    }
    document.querySelector('.btn-add1').addEventListener("click", () => {
      decreaseValue()
    })
    document.querySelector('.btn-add2').addEventListener("click", () => {
      increaseValue()
    })
  },
};

export default ProductDetail;
