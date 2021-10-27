import CategoryApi from "../../../../apis/categoryApi";
import ProductApi from "../../../../apis/productApi";
import { reRender } from "../../../../utils/rerender";
import navbarLeft from "../../components/navbarLeft";
import navbarTop from "../../components/navbarTop";
import Toastify from "toastify-js";
import "toastify-js/src/toastify-es"
import formatprice from "../../../../common/formatprice";
import { getRandomInt } from "../../../../common/getRanDom";
const ProductPageAdmin = {
  async render() {
    const listProducts = await ProductApi.getByCategory();
    const products = await listProducts.data.products;
    const content = () => {
      return `

            <div class="container">
            <a href="/#/productadd" class="btn btn-primary my-2">Thêm sản phẩm</a>
            <table class="table table-hover">
            <thead>
                <tr>
                    <th class="text-center">STT</th>
                    <th class="text-center">Tên sản phẩm</th>
                    <th class="text-center" style="width: 200px">Mô tả</th>
                    <th class="text-center">Ảnh</th>
                    <th class="text-center">Giá</th>
                    <th class="text-center">Danh mục</th>
                    <th class="text-center">Ngày thêm</th>
                    <th class="text-center">Chức năng</th>
                </tr>
            </thead>
            <tbody>
                ${products
                  .map(
                    (item, index) =>
                      `
                    <tr style="verticle-align: middle; vertical-align: middle;">
                        <td class="text-center">${index + 1}</td>
                        <td class="">${item.title}</td>
                        <td class="" style="width: 200px">${
                          item.description
                        }</td>
                        <td class="text-center">
                            <img width="100" src="${item.imageURL[getRandomInt(0, item.imageURL.length)]}" />
                        </td>
                        <td class="text-center">${formatprice(item.price)}</td>
                        <td class="text-center">${item.category.title}</td>
                        <td class="text-center">${item.createdAt}</td>
                        
                        <td class="text-center"> 
                            <button type="button" data-id="${
                              item._id
                            }" class="btn my-2 deleteBtn btn-danger">Xóa</button>
                            <a href="/#/productedit/${item._id}" data-id="${
                        item._id
                      }" class="btn btn-primary">Sửa</a>
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
    const deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteBtn.forEach((item) => {
      item.addEventListener("click", async () => {
        const id = item.getAttribute("data-id");
        if (window.confirm("Bạn có muốn xóa sản phẩm này không")) {
          const deleteSuccess = await ProductApi.delete(id);
          if (deleteSuccess.status === 200) {
            Toastify({
              text: deleteSuccess.data.message,
              className: "info",
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              }
            }).showToast();
            reRender(ProductPageAdmin, "#root");
          }
        }
      });
    });
  },
};

export default ProductPageAdmin;
