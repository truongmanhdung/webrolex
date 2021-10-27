import OrderApi from "../../../../apis/orderApi";
import formatprice from "../../../../common/formatprice";
import { reRender } from "../../../../utils/rerender";
import navbarLeft from "../../components/navbarLeft";
import navbarTop from "../../components/navbarTop";

const OrderPageAdmin = {
  async render() {
    const orders = await (await OrderApi.getAll()).data.orders;
    const showStatus = (status, id) => {
      let html = null;
      if(status == 0) {
        html =
            `<button type="button" data-id="${id}" disabled="true" class="btn btn-default">
                Đã hủy
            </button>`
      }else if(status === 1){
        html = `<button type="button" data-id="${id}" disabled="true" class="btn btn-danger">
            Chưa xác nhận
      </button>`
      }else if(status === 2){
        html = `<button type="button" data-id="${id}" data-status="${status}" class="btn btn-primary btnStatus">
        Đã xác nhận, chưa thanh toán
      </button>`
      }else if(status === 3){
        html = `<button type="button" data-id="${id}" data-status="${status}" class="btn btn-success btnStatus">
        Đã thanh toán, Xác nhận hoàn thành
      </button>`
      }else if(status === 4){
        html = `<button type="button" disabled="true" class="btn btn-success btnStatus">
        Hoàn thành
      </button>`
      }
      return html;
    };
    const content = () => { 
      return `
            <div class="container">
            <table class="table table-hover">
            <thead>
                <tr>
                    <th class="text-center">STT</th>
                    <th class="text-center">Tên</th>    
                    <th class="text-center">Email</th>
                    <th class="text-center">Địa chỉ</th>
                    <th class="text-center">Số ĐT</th>
                    <th class="text-center">Tổng tiền</th>
                    <th class="text-center">Trạng thái</th>
                    <th class="text-center">Chi tiết</th>
                </tr>
            </thead>
            <tbody>
                ${orders
                  .map(
                    (item, index) =>
                      `
                    <tr style="verticle-align: middle; vertical-align: middle;">
                        <td class="text-center">${index + 1}</td>
                        <td class="text-center">${item.username}</td>
                        <td class="text-center" style="width: 200px">${
                          item.email
                        }</td>
                        <td class="text-center">
                            <img width="100" src="${item.userId.avatar}">
                        </td>
                        <td class="text-center" style="width: 200px">${
                          item.phone
                        }</td>
                        <td class="text-center">${formatprice(item.total)}</td>
                        <td class="text-center">
                            ${showStatus(item.status, item._id)}
                        </td>
                        <td class="text-center">
                            <a type="button" href="/#/adminorder/${item._id}" class="btn btn-success">Chi tiết</a>
                        </td>
                    </tr>
                    `
                  )
                  .join("")}
                
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
  afterRender() {
    const btnStatus = document.querySelectorAll('.btnStatus');
    btnStatus.forEach((btn) => {
      const status = Number(btn.getAttribute('data-status'));
      const id = btn.getAttribute('data-id');
      btn.addEventListener('click', async () => {
        const order = {
          status: status + 1
        };
        const result = await OrderApi.updateStatus(id, order);
        console.log(result)
        if(result.status === 200){
          reRender(OrderPageAdmin, '#root');
          Toastify({
            text: 'Updated Order Status Success',
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
        }
      })
     
      
    })
  },
};

export default OrderPageAdmin;
