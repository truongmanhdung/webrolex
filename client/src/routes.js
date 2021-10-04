import Navigo from "navigo";
import ProductDetail from "./components/products/productDetail";
import CategoryAddForm from "./page/Admin/pageAdmin/category/categoryAddForm";
import CategoryEditForm from "./page/Admin/pageAdmin/category/categoryEditForm";
import CategoryPageAdmin from "./page/Admin/pageAdmin/category/categoryPageAdmin";
import HomePageAdmin from "./page/Admin/pageAdmin/homePageAdmin";
import ProductPageAdmin from "./page/Admin/pageAdmin/products/productPageAdmin";
import UserPageAdmin from "./page/Admin/pageAdmin/uses/userPageAdmin";
import Login from "./page/auth/login";
import Register from "./page/auth/register";
import CategoryPage from "./page/CategoryPage";
import HomePage from "./page/HomePage";
const router = new Navigo("/", { hash: true, linksSelector: "a" });

const display = async (page, afterRender) => {
    document.querySelector('#root').innerHTML = await page;
    if(afterRender){
        await afterRender()
    }
}

const displayShow = async (page, afterRender) => {
    document.querySelector('#showBody').innerHTML = await page;
    if(afterRender){
        await afterRender()
    }
}

const routes = () => {
    router
        .on("/", () => display(HomePage.render(), HomePage.afterRender))
        .on("/category/:id", ({data}) => {
            display(CategoryPage.render(data))
        })
        .on("/product/:id", ({data}) => {
            display(ProductDetail.render(data), ProductDetail.afterRender)
        })
        .on("/admin", () => {
            displayShow(HomePageAdmin.render())
        })
        .on("/adminuser", () => {
            displayShow(UserPageAdmin.render())
        })
        .on("/admincategory", () => {
            displayShow(CategoryPageAdmin.render(), CategoryPageAdmin.afterRender)
        })
        .on("/adminproduct", () => {
            displayShow(ProductPageAdmin.render())
        })
        .on("/categoryadd", () => {
            displayShow(CategoryAddForm.render(), CategoryAddForm.afterRender)
        })
        .on("/categoryedit/:id", ({data}) => {
            displayShow(CategoryEditForm.render(data), CategoryEditForm.afterRender)
        })
        .on("/login", () => {
            displayShow(Login.render(), Login.afterRender)
        })
        .on("/register", () => {
            displayShow(Register.render(), Register.afterRender)
        })
        .notFound(() => {
            console.log("Not Found Page");
        })
        .resolve();
}
export default routes;
