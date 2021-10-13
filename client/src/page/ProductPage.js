import CategoryApi from "../apis/categoryApi";
import ProductApi from "../apis/productApi";
import Footer from "../components/footer";
import Header from "../components/header";
import Product from "../components/products/product";

const ProductPage = {
  async render() {
    const dataProduct = await (await ProductApi.getAll()).data.products;
    return `
            ${await Header.render()}
            <div class="overlay2">
        
                </div>
                <div class="position_video" style="height: 100vh; overflow: hidden;">
                    <video style="width: 100%;" autoplay muted="true" id="player-vjs_html5_api" class="vjs-tech" loop preload="auto">
                        <source src="https://content.rolex.com/dam/homepage/hss/watches/professional-watches/yacht-master/homepage-yacht-master-42_m226659-0002.mp4" type="video/mp4" />
                    </video>
                    
                    <div class="home-positions pt-5">
                        <h3 class="text-center text-white text-uppercase mb-5">Yacht-Master</h3>
                        <h5 class="text-center text-white text-uppercase">The watch of the open seas</h5>
                    </div>
                </div>
                
                <div class="my-5 container">
                    <div class="d-flex justify-content-between">
                        <div class="mb-3 mt-3">
                            <h3>${dataProduct.length} sản phẩm</h3>
                        </div>
                        <div class="mb-3 mt-3">
                        <form>
                            <select class="form-select" name="select_search" onchange="this.form.submit()" aria-label="Default select example">
                            <option selected>Sắp xếp phù hợp nhất</option>
                            <option value="tangdan">Giá tăng dần</option>
                            <option value="giamdan">Giá giảm dần</option>
                            </select>
                        </form>
                        </div>
                    </div>
                    <div class="row product-list">
                        ${dataProduct
                          .map((item) => Product.render(item))
                          .join("")}
                    </div>
                </div>
                <div id="pagination"></div>
                ${Footer.render()}
            `;
  },

  afterRender() {
    Header.afterRender();
    const listPagination = [];
    ProductApi.getAll().then((response) => {
      const data = response.data.products;
      for (let i = 0; i < data.length; i++) {
        listPagination.push(i);
      }
      $("#pagination").pagination({
        dataSource: listPagination,
        pageSize: 8,
        afterRender: async () => {
          const page = document
            .querySelector(".active")
            .getAttribute("data-num");
          const dataProduct = await (
            await ProductApi.getPage(page)
          ).data.products;
          document.querySelector(".product-list").innerHTML = dataProduct
            .map((product) => Product.render(product))
            .join("");
        },
      });
    });
  },
};
export default ProductPage;
