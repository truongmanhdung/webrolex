import Header from "../../components/header";
import Footer from "../../components/footer";
import { getCartItems, removeCartItems } from "../../utils/addToCart";
import formatprice from "../../common/formatprice";
import { reRender } from "../../utils/rerender";
import HomePage from "../HomePage";
import UserApi from "../../apis/userApi";
import OrderApi from "../../apis/orderApi";

const CartPage = {
  async render() {
    const carts = getCartItems();
    const username = localStorage.getItem('username');
    const user = await (await UserApi.getUserName(username)).data.user;
    return `
            ${await Header.render()}
            <div class="" style="height: 80px; background-color: rgba(0, 0, 0, 0.5)"> 

            </div>
           <div class="container pt-5">
           
           <div class="card">
           <h3 class="text-center my-4">Giỏ hàng</h3>
             <table class="table table-hover shopping-cart-wrap m-0">
               <thead class="text-muted">
                 <tr>
                   <th scope="col">Product</th>
                   <th class="text-center" scope="col" width="120">Quantity</th>
                   <th class="text-center" scope="col" width="120">Price</th>
                   <th class="text-center" scope="col" width="200" class="">Action</th>
                 </tr>
               </thead>
               <tbody class="order-view">
                    ${carts.map(
                      (cart) =>
                        `
                            <tr>
                            <td >
                            <figure class="media m-0">
                                <div class="img-wrap">
                                <img
                                    src="${cart.imageURL}"
                                    class="img-thumbnail img-sm"
                                />
                                </div>
                                <figcaption class="media-body">
                                <h6 class="title text-truncate">${
                                  cart.title
                                }</h6>
                                <dl class="param param-inline small">
                                    <dt>Loại đồng hồ</dt>
                                    <dd>Đồng hồ rolex</dd>
                                </dl>
                                <dl class="param param-inline small">
                                    <dt>Color:</dt>
                                    <dd>Orange color</dd>
                                </dl>
                                </figcaption>
                            </figure>
                            </td>
                            <td class="text-center">
                            <div class="d-flex">
                                <span class="addnewQuantity d-none"></span>
                                <button type="button" class="btn btn-danger btn-add1"><i class="fas fa-minus"></i></button>
                                <input class="form-control quantity mx-2" data-id="${
                                  cart.id
                                }" style="width: 80px" type="number" value="${
                                  cart.quantity
                                }" id="number" min="1">
                                        <span class="d-none add-total"></span>
                                        <button type="button" class="btn btn-success btn-add2 "><i class="fas fa-plus"></i></button>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="price-wrap">
                                <var class="price">${formatprice(cart.price)}</var>
                            </div>
                            <!-- price-wrap .// -->
                            </td>
                            <td class="text-center">
                            <a
                                title=""
                                href=""
                                class="btn btn-outline-success"
                                data-toggle="tooltip"
                                data-original-title="Save to Wishlist"
                            >
                                <i class="fa fa-heart"></i
                            ></a>
                            <a href="" class="btn btn-outline-danger removeItem"> × Remove</a>
                            </td>
                        </tr>
                        `
                    )}
                    <tr>
                        <td>Tổng tiền: </td>
                        <td></td>
                        <td></td>
                        <td>
                            <div class="price-wrap">
                                <var class="price price-total">15000000đ</var>
                            </div>
                        </td>
                    </tr>
                    
               </tbody>
             </table>
             <div class="profile-pay container py-3">
                <h3>Thông tin khách hàng</h3>
                
                <form action="" method="POST" role="form" id="addSubmitPay" class="row" data-id="${user._id}">
                  <div class="form-group col-6">
                    <label for="">Tên khách hàng</label>
                    <input type="text" class="form-control" required id="name" value="${user.username}" placeholder="Tên khách hàng">
                  </div>
                  <div class="form-group col-6">
                    <label for="">Email</label>
                    <input type="email" class="form-control" required value="${user.email}" id="email" placeholder="email">
                  </div> 
                  <div class="form-group col-6">
                    <label for="">Số điện thoại</label>
                    <input type="number" class="form-control" required value="" id="phone" placeholder="Số điện thoại">
                  </div>  
                  <div class="form-group col-6">
                    <label for="">Địa chỉ</label>
                    <input type="text" class="form-control" required value="" id="address" placeholder="Địa chỉ">
                  </div>     
                  <div class="d-flex justify-content-between">
                      <a href="/#/product" class="btn btn-primary">Tiếp tục mua hàng</a>   
                      <button type="submit" class="btn  btn-success">Thanh toán</button>
                  </div>
                </form>
                
            </div>
           </div>
           
         </div>
         
         ${Footer.render()}
         `;
  },
  afterRender() {
    Header.afterRender()
    const carts = getCartItems();
    if(carts.length  === 0){
        reRender(HomePage, '#root');
        window.location.hash = '/'
    }
    $("html, body").animate({ scrollTop: 0 }, "slow");
    const btn_add1s = document.querySelectorAll(".btn-add1");
    const btn_add2s = document.querySelectorAll(".btn-add2");
    const inputquantity = document.querySelectorAll(".quantity");
    const showPrice = document.querySelectorAll(".price");
    const add_total = document.querySelectorAll(".add-total");
    const removeItem = document.querySelectorAll(".removeItem");
    const addnewQuantity = document.querySelectorAll(".addnewQuantity");
    for (let i = 0; i < removeItem.length; i++) {
        removeItem[i].addEventListener("click", (e) => {
            e.preventDefault();
            if(window.confirm("Bạn có muốn xóa sản phẩm này trong giỏ hàng không")){
                const id = inputquantity[i].getAttribute("data-id");
                removeCartItems(id);
                reRender(CartPage, "#root");
            }
        })
    }
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      addnewQuantity[i].innerHTML = carts[i].quantity;
      add_total[i].innerHTML = carts[i].price * carts[i].quantity;
      // showPrice[i].innerHTML = formatprice(carts[i].price * carts[i].quantity);
      total += carts[i].price * carts[i].quantity;
    }

    for (let i = 0; i < btn_add1s.length; i++) {
      btn_add1s[i].addEventListener("click", () => {
        var value = parseInt(inputquantity[i].value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? (value = 1) : "";
        value--;
        if (value === 0) {
          const id = inputquantity[i].getAttribute("data-id");
          removeCartItems(id);
          reRender(CartPage, "#root");
        }
        inputquantity[i].value = value;
        addnewQuantity[i].innerHTML = value;
        const priceProduct = value * carts[i].price;
        // showPrice[i].innerHTML = formatprice(priceProduct);
        add_total[i].innerHTML = priceProduct;
        total = 0;
        for (let j = 0; j < add_total.length; j++) {
          total += Number(add_total[j].innerHTML);
        }
        document.querySelector(".price-total").innerHTML = formatprice(total);
      });
    }

    for (let i = 0; i < btn_add2s.length; i++) {
      btn_add2s[i].addEventListener("click", () => {
        var value = parseInt(inputquantity[i].value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        inputquantity[i].value = value;
        addnewQuantity[i].innerHTML = value;
        const priceProduct = value * carts[i].price;
        // showPrice[i].innerHTML = formatprice(priceProduct);
        add_total[i].innerHTML = priceProduct;
        total = 0;
        for (let j = 0; j < add_total.length; j++) {
          console.log(add_total[j].innerHTML);
          total += Number(add_total[j].innerHTML);
        }
        document.querySelector(".price-total").innerHTML = formatprice(total);
      });
    }

    document.querySelector(".price-total").innerHTML = formatprice(total);

    
    const formAddPay = document.querySelector('#addSubmitPay');
    const userId = formAddPay.getAttribute('data-id');
    formAddPay.addEventListener('submit', async (e) =>{
        e.preventDefault();
        const listorder = [];
        carts.forEach((cart, index) => {
          const newOrder = {
            idProduct: cart.id,
            quantity: Number(addnewQuantity[index].innerHTML),
          }
          listorder.push(newOrder)
        });
        const datacart = {
          userId: userId,
          username: document.querySelector('#name').value,
          email: document.querySelector('#email').value,
          phone: document.querySelector('#phone').value,
          address: document.querySelector('#address').value,
          total: total,
          listorder: listorder,
        }
        const addorder = await OrderApi.post(datacart);
        if(addorder.status === 200){
          reRender(HomePage, "#root");
          window.location.hash = "/";
          Toastify({
            text: "Mua hàng thành công, vui lòng kiểm tra tại lịch sử mua hàng",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
          localStorage.removeItem('cart')
        }
    })

  },
};

export default CartPage;
