import CategoryApi from "../../../../apis/categoryApi";
import ProductApi from "../../../../apis/productApi";
import navbarLeft from "../../components/navbarLeft";
import navbarTop from "../../components/navbarTop";

const ProductPageAdmin = {
  async render() {
    const listProducts = await ProductApi.getAll();
    const products = await listProducts.data.products;
    const content = () =>  {
      return `

            <div class="container">
            <a href="/#/categoryadd" class="btn btn-primary my-2">Thêm sản phẩm</a>
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
                        <td class="text-center">${item.title}</td>
                        <td class="text-justify" style="width: 200px">${
                          item.description}</td>
                        <td class="text-center">
                            <img width="100" src="${item.imageURL}" />
                        </td>
                        <td class="text-center">${item.price}</td>
                        <td class="text-center">${ showCategory(item.category)}</td>
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
    const showCategory =  async (id) => {
      const category = await (await CategoryApi.getID(id)).data.category.title
      return category
    }
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
};

export default ProductPageAdmin;
