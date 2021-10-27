import OrderApi from "../../../../apis/orderApi";
import formatprice from "../../../../common/formatprice";
import navbarLeft from "../../components/navbarLeft";
import navbarTop from "../../components/navbarTop";

const OrderDetailPageAdmin = {
  async render({id}) {
    const order = await (await OrderApi.getID(id)).data.order;
    const listorder = order.listorder;
    console.log(listorder)
    const content = () => {
      return `
            <div class="container">
            <table class="table table-hover shopping-cart-wrap m-0">
               <thead class="text-muted">
                 <tr>
                   <th scope="col">Product</th>
                   <th class="text-center" scope="col" width="120">Quantity</th>
                   <th class="text-center" scope="col" width="120">Price</th>
                 </tr>
               </thead>
               <tbody class="order-view">

                    ${listorder.map(
                      (cart) =>
                        `
                            <tr>
                            <td >
                            <figure class="media m-0">
                                <div class="img-wrap">
                                <img
                                    src="${cart.idProduct.imageURL[0]}"
                                    class="img-thumbnail img-sm"
                                />
                                </div>
                                <figcaption class="media-body">
                                <h6 class="title text-truncate">${
                                  cart.idProduct.title
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
                                ${cart.quantity}
                            </td>
                            <td class="text-center">
                            <div class="price-wrap">
                                <var class="price">${formatprice(cart.quantity*cart.idProduct.price)}</var>
                            </div>
                            <!-- price-wrap .// -->
                            </td>
                            
                        </tr>
                        `
                    )}
                    <tr>
                        <td>Tổng tiền: </td>
                        <td></td>
                        
                        <td>
                            <div class="price-wrap">
                                <var class="price price-total">${formatprice(order.total)}</var>
                            </div>
                        </td>
                    </tr>
                    
               </tbody>
             </table>
        
        </div>
        `;
    };
    return `<div class="adminroot">
            <div id="wrapper">
              <!-- Sidebar -->
                 ${navbarLeft.render()}
              <!-- End of Sidebar -->
      
              <!-- Content Wrapper -->
              <div id="content-wrapper" class="d-flex flex-column">
                <!-- Main Content -->
                <div id="content">
                  <!-- Topbar -->
                     ${navbarTop.render()}
                  <!-- End of Topbar -->
      
                  <!-- Begin Page Content -->
                  <div id="body-content-admin">
                    ${content()}
                  </div>
                  <!-- /.container-fluid -->
                </div>
              </div>
            </div>
            <a class="scroll-to-top rounded" href="#page-top">
              <i class="fas fa-angle-up"></i>
            </a>
          </div>`;
  },
  afterRender() {},
};

export default OrderDetailPageAdmin;
