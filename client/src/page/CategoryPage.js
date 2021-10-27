import CategoryApi from '../apis/categoryApi';
import ProductApi from '../apis/productApi';
import Footer from '../components/footer';
import Header from '../components/header';
import Product from '../components/products/product';

const CategoryPage = {
    async render({id}) {
        const idCategory = localStorage.getItem(id);
        const dataProduct = await ProductApi.getAll();
        const productFilter = await dataProduct.data.products.filter((product) => (product.category === idCategory));
        const category = await CategoryApi.getID(idCategory)
        return (
            
            `
            ${await Header.render()}
                <div class="overlay2">
        
                </div>
                <div class="position_video" style="height: 100vh; overflow: hidden;">
                    <video style="width: 100%;" autoplay muted="true" id="player-vjs_html5_api" class="vjs-tech" loop preload="auto">
                        <source src="${category.data.category.videoURL}" type="video/mp4" />
                    </video>
                    <span class="d-none idCategory" data-id="${idCategory}"></span>
                    <div class="position-absolute mt-5 mx-auto container" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" style=" z-index: 12; top: 6%; left: 4%; right: 5%;">
                        <div class="d-flex row align-items-center justify-content-around">
                            <div class="col-6">
                                <h3 class="text-center text-white text-uppercase">${category.data.category.title}</h3>
                                <h4 class="text-center my-4 text-white text-uppercase">The Rolex Yacht-Master and Yacht-Master II models embody the spirit of the sailor.</h4>
                            </div>
                            <div class="col-6">
                                <p class=" text-align-justify text-white ">Explore the Rolex collection of prestigious, high-precision timepieces. Rolex offers a wide assortment of Oyster Perpetual and Cellini watches to suit any wrist. Discover the broad selection of Rolex watches to find a perfect combination of style and functionality.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                <div class="my-5 container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3 class="container-title my-3 mb-4">${category.data.category.title}</h3>
                        <select name="" id="submitform" class="form-control" style="width: 200px">
                            <option >Tất cả</option>
                            <option value="1">Giá tăng dần</option>
                            <option value="-1">Giá giảm dần</option>
                        </select>
                    </div>
                    <div class="row product-list" data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                        ${productFilter.map((item) => (
                            Product.render(item)
                        )).join("")}
                    </div>
                </div>
                <div id="pagination"></div>
                ${Footer.render()}
            `
        )
    },

    afterRender(){
        Header.afterRender()
        $("html, body").animate({ scrollTop: 0 }, "slow");
        const listPagination = [];
        const idCategory = document.querySelector(".idCategory").getAttribute('data-id');

        ProductApi.getCategory(idCategory).then((response) => {
            const data = response.data.products;
            for (let i = 0; i < data.length; i++) {
                listPagination.push(i);
            }
            $('#pagination').pagination({
                dataSource: listPagination,
                pageSize: 8,
                afterRender : async () => {
                    const page = document.querySelector(".active").getAttribute('data-num')
                    const dataProduct = await (await ProductApi.getCategoryPages(idCategory,page)).data.products
                    document.querySelector(".product-list").innerHTML = dataProduct.map((product)=> (Product.render(product))).join("")
                    $("html, body").animate({ scrollTop: 0 }, "slow");  
                },
            })
            
        })
        const submitform = document.querySelector('#submitform');
        submitform.addEventListener('change', async (e) => {
            e.preventDefault()
            const sort = submitform.value;
            const productSort = await (await ProductApi.getCategorySort(idCategory, sort)).data.products;
            document.querySelector(".product-list").innerHTML = productSort.map((product)=> (Product.render(product))).join("")
            $("html, body").animate({ scrollTop: 0 }, "slow");
        })
    }
}
export default CategoryPage


