import convertToUrl from "../../../common/convertToUrl"
import formatprice from "../../../common/formatprice"

const Product = {
    
    render(item) {
        
        return (
            `<div class="col-xs-6 col-sm-6 col-md-6 col-6 col-lg-3 my-4">
                <div class="product-item">
                    <input
                        type="checkbox"
                        hidden
                        id="1"
                        class="input_focus"
                    />
                    <img
                        src="${item.imageURL[0]}"
                        alt=""
                    />
                    <a href="" class="title px-2 d-block"><span class="text-uppercase">${item.title}</span></a>
                    <a href="" class="name d-block px-2"><span>${item.description}</span></a>
                    <p class="text-center">${formatprice(item.price)}</p>
                    <a ${localStorage.setItem(`product${convertToUrl(item.title)}`,item._id)} href="/#/product/${convertToUrl(item.title)}" class="view view1"><span>XEM SẢN PHẨM</span></a>
                </div>
          </div>`
        )
    }
}
export default Product