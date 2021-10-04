export const reRender = async (component, position = "") => {
    // position = #list-products 
    // component = ListProduct -> #lit-product
    if (position) {
        document.querySelector(position).innerHTML = await component.render();
    } else {
        document.querySelector("#content").innerHTML = await component.render();
    }
    await component.afterRender();
}