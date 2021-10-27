import convertToUrl from "../../common/convertToUrl";
import formatprice from "../../common/formatprice";

const Search = {
    render(listSearch) {
        const showList = () => {
            let html;
            if(listSearch.length > 0) {
                html = listSearch.map((item)=>(
                    `<a ${localStorage.setItem(`product${convertToUrl(item.title)}`,item._id)} href="/#/product/${convertToUrl(item.title)}">
                        <div class="d-flex product-search-item justify-content-between align-items-center">
                            <div class="product-search-img">
                                    <img class="w-100" src="${item.imageURL[0]}" alt="">
                            </div>
                        <div>
                                <h5>${item.title}</h5>
                                <p>${item.description}</p>
                        </div>
                            <div>
                                <p>${formatprice(item.price)}</p>
                            </div>
                        </div>
                    </a>`
                )).join('');
            }else{
                html = '<div class="searcherror text-center"><p>Không tìm thấy sản phẩm nào!!!</p></div'
            }
            return html;
        }
        
        return (
            `<div class="container">
                <div class="product-search-list">
                    ${showList()}
                </div>
            </div>`
        )
    }
}

export default Search;