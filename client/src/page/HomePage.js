import ProductsNew from "../components/products/productnew";
import data from "../apis/datafake";
import Product from "../components/products/product";
const { products, categories } = data;
const product_list_page = products.slice(0, 8);
const HomePage = {
  render() {
    return `
            <div class="overlay2">
     
            </div>
            <div class="position_video">
                <video autoplay muted="true" id="player-vjs_html5_api" class="vjs-tech" loop preload="auto">
                    <source src="https://content.rolex.com/dam/new-watches-2020/new-datejust/videos/cover/new-datejust-cover-video.mp4" type="video/mp4" />
                </video>
                
                <div class="home-positions">
                    <h3 class="text-center text-white text-uppercase">Datejust</h3>
                    <p class="text-center text-white text-uppercase">Đồng hồ biểu tượng của phong cách cổ điển</p>
                    <a href="./product" class="d-block mx-auto view2"><span>XEM BỘ SƯU TẬP</span></a>
                </div>
            </div>
                <div class="container">
                    <h3 class="my-4" style="font-size: 26px; font-weight: bold">KHÁM PHÁ BỘ SƯU TẬP ĐỒNG HỒ UY TÍN CỦA ROLEX VỚI ĐỘ CHÍNH XÁC VƯỢT TRỘI.</h3>
                    <p class="my-4" >Rolex cung cấp đa dạng mẫu đồng hồ Oyster Perpetual và Cellini phù hợp với mọi cổ tay. Khám phá hàng loạt mẫu đồng hồ Rolex để tìm ra sự kết hợp hoàn hảo giữa phong cách và tính năng ưu việt.</p>
                    <div class="row">
                    <div class="row" ">
                        ${categories
                          .map(
                            (item) =>
                              `<div class="col-3 mb-4 category-item" key="${item.id}">
                                <a href='/category/${item.id}'>
                                    <div class="category-image"><img width="100%" src="${item.imageUrl}" alt=""></div>
                                    <p class="category-title pt-2 m-0">${item.title}</p>
                                    <p class="category-add m-0">Tìm hiểm thêm</p>
                                </a>
                            </div>`
                          )
                          .join("")}
                </div>
                    </div>
                    <h5 class="my-4">Đồng hồ Cổ điển</h5>
                    <div >
                        <div class="row">
                            ${product_list_page
                            .map((item) => Product.render(item))
                            .join("")}
                        </div>
                    </div>
                </div>
            `;
  },
  
};

export default HomePage;
