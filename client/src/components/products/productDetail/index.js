import ProductApi from "../../../apis/productApi";
import formatprice from "../../../common/formatprice";
import CartPage from "../../../page/cart/CartPage";
import { addToCart } from "../../../utils/addToCart";
import { reRender } from "../../../utils/rerender";
import Comment from "../../comment/comment";
import Footer from "../../footer";
import Header from "../../header";

const ProductDetail = {
  async render({ id }) {
    const idproduct = localStorage.getItem(`product${id}`);
    const product = await (await ProductApi.getID(idproduct)).data.product;
    const listDataImage = product.imageURL;
    const imageActive = listDataImage[0];
    listDataImage.shift();
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
                ).join('')}
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
                ).join("")}
              </div>
            </div>
          </div>
      
              <div class="col-5 p-4 bg-light product-detail-right">
                <div class="border-bottom">
                  <div class="text-center">
                    <h6>${product.description}</h6>
                    <h5>${product.title}</h5>
                  </div>
                  <div class="d-flex justify-content-between px-5">
                    <p style="font-size: 16px; font-weight: bold; color: black">${formatprice(product.price)}</p>
                    <p style="font-size: 12px; color: yellow">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <span style="color: black">(25)</span>
                    </p>
                    
                  </div>
                  <p class="text-center my-2">ho???c 613.000 ??? x 3 k??? v???i Fundiin</p>
                    <p class="text-center mb-3"><span class="border-end">T??nh tr???ng: <span class="text-green me-2">C??n h??ng</span></span><span class="ms-2">Size guide</span></p>
                </div>
                <p class="text-center my-3">
                  CH???N PH??? KI???N MUA K??M:
                </p>
                <div class="d-flex px-5 justify-content-around">
                  <div class="border-image col-6 px-2  mx-3">
                    <img width="100%" src="https://curnonwatch.com/_next/image?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fc%2Fu%2Fcuff-jackie-sil-shadow.png&w=1920&q=75" alt="">
                    <p class="text-center text-uppercase" style="font-size: 14px">Jackie Rosegold</p>
                    <p class="text-center" style="font-size: 12px">+ 239.000 ???</p>
                    <p class="text-center submit-btn my-2" style="font-size: 14px">H???T H??NG</p>
                  </div>
                  <div class="border-image col-6 px-2  mx-3">
                    <img width="100%" src="https://curnonwatch.com/_next/image?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fc%2Fu%2Fcuff-stella-sil-3-shadow_1.png&w=1920&q=75" alt="">
                    <p class="text-center text-uppercase" style="font-size: 14px">D??y da black</p>
                    <p class="text-center" style="font-size: 12px">+ 239.000 ???</p>
                    <p class="text-center submit-btn my-2" style="font-size: 14px">H???T H??NG</p>
                  </div>
                </div>
                <div class="thanh-toan my-4 px-4 mx-2">
                  <div class="add-card d-flex align-items-center justify-content-between">
                      <div class="d-flex">
                        <button type="button" class="btn btn-danger btn-add1"><i class="fas fa-minus"></i></button>
                        <input class="form-control quantity mx-2" style="width: 50px" type="number" value="1" id="number" min="1">
                        <button type="button" class="btn btn-success btn-add2 "><i class="fas fa-plus"></i></button>
                      </div>
                      <a data-id="${product._id}" href="/#/product" class="btn-add-cart muangay addtocart"><span>TH??M GI??? H??NG</span></a>
                  </div>
                  <a href="/#/cart" class="muangay addngay" ><span>MUA NGAY</span></a>
                </div>
              </div>
            </div>
          </div>
          
        <div class="container-fluid py-3" style="background-color:#f8f7f4">
          <div class="d-flex footer justify-content-between container border-bottom ">
              <div class="fs-5 tablink active-tab" id="defaultOpen">
                  <span>TH??NG TIN S???N PH???M</span>
              </div>
              <div class="fs-5 tablink">
                  <span>CH??NH S??CH V???N CHUY???N</span>
              </div>
              <div class="fs-5 tablink" >
                  <span>?????I TR??? & B???O H??NH</span>
              </div>
              <div class="fs-5 tablink">
                  <span>H??NH TH???C THANH TO??N </span>
              </div>
          </div>
            <div class="footer-link active-footer tab pb-5 mt-4"  id="link">
              <div class="" style="max-width: 570px;">
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">K??ch th?????c m???t</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.kichthuoc
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">????? d??y</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.doday
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">M??u m???t</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">Navy</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">Lo???i m??y</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.loaimay
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">K??ch c??? d??y</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.kichcoday
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">Ch???ng n?????c</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.chongnuoc
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between border-bottom">
                      <p class="productInfo_name m-0 py-2">M???t k??nh</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.matkinh
                      }</p>
                  </div>
                  <div class="d-flex justify-content-between">
                      <p class="productInfo_name m-0 py-2">Ch???t li???u d??y</p>
                      <p class="productInfo_value text-uppercase m-0 py-2">${
                        product.information.chatlieuday
                      }</p>
                  </div>
              </div>
          </div>
        <div class="footer-link tab mb-5 mt-4" id="link1">
            <p style="display:list-item">Ph?? v???n chuy???n:</p>
            <p>- <span class="fw-bold">MI???N PH?? V???N CHUY???N</span> v???i ????n h??ng t??? 700,000?? tr??? l??</p>
            <p>- <span class="fw-bold">30,000??</span> v???i ????n h??ng c?? gi?? tr??? th???p h??n 700,000??</p>
            <p style="display:list-item">Th???i gian v???n chuy???n:</p>
            <p>- N???i th??nh H?? N???i: 1-2 ng??y</p>
            <p>- Mi???n Trung: 3-5 ng??y</p>
            <p>- Mi???n Nam: 5-7 ng??y</p>
        </div>
        <div class="footer-link tab mb-5 mt-4" id="link2">
            <p style="display: list-item">Ch??nh s??ch ?????i tr???:</p>
            <p>- <span class="fw-bold">1 ?????I 1</span> trong v??ng 3 ng??y k??? t??? khi nh???n h??ng (k??m theo c??c ??i???u ki???n)</p>
            <p style="display: list-item">Ch??nh s??ch b???o h??nh:</p>
            <p>- <span class="fw-bold">B???O H??NH 10 N??M</span> ?????i v???i nh???ng l???i t??? nh?? s???n xu???t</p>
            <p>- <span class="fw-bold">B???O H??NH MI???N PH??(1 n??m ?????u)</span> v???i nh???ng l???i ng?????i d??ng nh??: v???, n???t k??nh, h???p h??i n?????c, va ?????p m???nh, r??i linh ki???n b??n trong m???t ?????ng h???...</p>
            <p>- <span class="fw-bold">THAY PIN MI???N PH?? TR???N ?????I</span></p>
        </div>
        <div class="footer-link tab mb-5 mt-4" id="link3">
            <p>Curnon ch???p nh???n c??c h??nh th???c thanh to??n sau:</p>
            <p class="fw-bold">Tr??? ti???n m???t khi nh???n h??ng, V?? ??i???n t??? Momo, V?? ??i???n t??? VNPay, Tr??? g??p theo k??? h???n qua Fundiin</p>
            <div class="mb-3 d-flex">
                <img width="50px" class="me-1" src="https://curnonwatch.com/_next/static/image/assets/images/icons/cod.a04c67da9d3edece51e24c08592d20ec.png" alt="">
                <img width="50px" class="me-1" src="https://curnonwatch.com/_next/static/image/assets/images/icons/fundiin.0788fcd82b33f7ae4d33f7ee38841806.png" alt="">
                <img width="50px" class="me-1" src="https://curnonwatch.com/_next/static/image/assets/images/icons/momo.e7977f80729f86e583f88468e7a823d4.png" alt="">
                <img width="50px" src="https://curnonwatch.com/_next/static/image/assets/images/icons/vnpay.2cbf7ebaf4988a49059e72c54e22b62e.png" alt="">
            </div>
            <p class="fw-bold">Ho???c chuy???n kho???n ng??n h??ng qua t??i kho???n:</p>
            <p>S??? t??i kho???n: 123100001000000</p>
            <p>Ch??? t??i kho???n: Tr????ng M???nh D??ng</p>
            <p>T??n ng??n h??ng:</p>
            <p>BIDV Chi nh??nh: BIDV chi nh??nh Ba V??, H?? N???i</p>
        </div>
        ${await Comment.render(id,product._id)}
    </div>
    
    ${Footer.render()}
    `;
  },
  afterRender() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    Header.afterRender();
    Comment.afterRender()
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

    const addtocart = document.querySelector('.addtocart');
    const quantity = document.querySelector('.quantity');
    const idProduct = addtocart.getAttribute('data-id');
    const addngay = document.querySelector('.addngay');
    addtocart.addEventListener("click", async (e) =>{
      e.preventDefault();
      const product = await (await ProductApi.getID(idProduct)).data.product;
      const cart = {
        id: idProduct,
        title: product.title,
        price: product.price,
        imageURL: product.imageURL[0],
        quantity: Number(quantity.value),
      }
      addToCart(cart);
      Toastify({  
        text: '???? th??m v??o gi??? h??ng th??nh c??ng',
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    })
    addngay.addEventListener("click", async (e) => {
      e.preventDefault();
      const product = await (await ProductApi.getID(idProduct)).data.product;
      const cart = {
        id: idProduct,
        title: product.title,
        price: product.price,
        imageURL: product.imageURL[0],
        quantity: Number(quantity.value),
      }
      addToCart(cart);
      Toastify({
        text: '???? th??m v??o gi??? h??ng th??nh c??ng',
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
      reRender(CartPage, '#root')
      window.location.hash = '/cart'
    })
  },
};

export default ProductDetail;
