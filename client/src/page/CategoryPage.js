
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
                    
                    <div class="home-positions123">
                        <h3 class="text-center text-white text-uppercase">Datejust</h3>
                        
                    </div>
                </div>
                <div class="my-5 container">
                    <h3 class="container-title my-3 mb-4">${category.data.category.title}</h3>
                    <div class="row product-list">
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
        const listPagination = [];
        ProductApi.getAll().then((response) => {
            const data = response.data.products;
            for (let i = 0; i < data.length; i++) {
                listPagination.push(i);
            }
            $('#pagination').pagination({
                dataSource: listPagination,
                pageSize: 8,
                afterRender : async () => {
                    const page = document.querySelector(".active").getAttribute('data-num')
                    const dataProduct = await (await ProductApi.getPage(page)).data.products
                    document.querySelector(".product-list").innerHTML = dataProduct.map((product)=> (Product.render(product))).join("")
                },

            })
            
        })
    }
}
export default CategoryPage