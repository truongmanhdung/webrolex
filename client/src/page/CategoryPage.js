
import CategoryApi from '../apis/categoryApi';
import ProductApi from '../apis/productApi';
import Product from '../components/products/product';

const CategoryPage = {
    async render({id}) {
        const idCategory = await localStorage.getItem(id);
        const dataProduct = await ProductApi.getAll();
        const productFilter = await dataProduct.data.products.filter((product) => (product.category === idCategory));
        const category = await CategoryApi.getID(idCategory)
        return (
            `
                <div class="overlay2">
        
                </div>
                <div class="position_video">
                    <video autoplay muted="true" id="player-vjs_html5_api" class="vjs-tech" loop preload="auto">
                        <source src="${category.data.category.videoURL}" type="video/mp4" />
                    </video>
                    
                    <div class="home-positions123">
                        <h3 class="text-center text-white text-uppercase">Datejust</h3>
                        
                    </div>
                </div>
                <div class="my-5 container">
                    <h3 class="container-title my-3 mb-4"></h3>
                    <div class="row">
                        ${productFilter.map((item) => (
                            Product.render(item)
                        )).join("")}
                    </div>
                </div>
            `
        )
    }
}
export default CategoryPage