import Navigo from "navigo";
import ProductDetail from "./components/products/productDetail";
import CategoryAddForm from "./page/Admin/pageAdmin/category/categoryAddForm";
import CategoryEditForm from "./page/Admin/pageAdmin/category/categoryEditForm";
import CategoryPageAdmin from "./page/Admin/pageAdmin/category/categoryPageAdmin";
import HomePageAdmin from "./page/Admin/pageAdmin/homePageAdmin";
import ProductAddForm from "./page/Admin/pageAdmin/products/productAddForm";
import ProductEditForm from "./page/Admin/pageAdmin/products/productEditForm";
import ProductPageAdmin from "./page/Admin/pageAdmin/products/productPageAdmin";
import UserPageAdmin from "./page/Admin/pageAdmin/uses/userPageAdmin";
import Login from "./page/auth/login";
import Register from "./page/auth/register";
import CategoryPage from "./page/CategoryPage";
import HomePage from "./page/HomePage";
import ProductPage from "./page/ProductPage";
const router = new Navigo("/", { hash: true, linksSelector: "a" });

const display = async (page, afterRender) => {
    document.querySelector('#root').innerHTML = await page;
    if(afterRender){
        await afterRender()
    }
}

const routes = () => {
    router
        .on("/", () => display(HomePage.render(), HomePage.afterRender))
        .on("/category/:id", ({data}) => {
            display(CategoryPage.render(data), CategoryPage.afterRender)
        })
        .on("/product/:id", ({data}) => {
            display(ProductDetail.render(data), ProductDetail.afterRender)
        })
        .on("/product", () => {
            display(ProductPage.render(), ProductPage.afterRender)
        })
        .on("/admin", () => {
            display(HomePageAdmin.render())
        })
        .on("/adminuser", () => {
            display(UserPageAdmin.render())
        })
        .on("/admincategory", () => {
            display(CategoryPageAdmin.render(), CategoryPageAdmin.afterRender)
        })
        .on("/adminproduct", () => {
            display(ProductPageAdmin.render(), ProductPageAdmin.afterRender)
        })
        .on("/categoryadd", () => {
            display(CategoryAddForm.render(), CategoryAddForm.afterRender)
        })
        .on("/categoryedit/:id", ({data}) => {
            display(CategoryEditForm.render(data), CategoryEditForm.afterRender)
        })
        .on("/productadd", () => {
            display(ProductAddForm.render(), ProductAddForm.afterRender)
        })
        .on("/productedit/:id", ({data}) => {
            display(ProductEditForm.render(data), ProductEditForm.afterRender)
        })
        .on("/login", () => {
            display(Login.render(), Login.afterRender)
        })
        .on("/register", () => {
            display(Register.render(), Register.afterRender)
        })
        .notFound(() => {
            console.log("Not Found Page");
        })
        .resolve();
}
export default routes;
