import CommentApi from "../../apis/comment";
import UserApi from "../../apis/userApi";   
import ProductDetail from "../products/productDetail";

const Comment = {
  async render(id,productId) {
    const user = localStorage.getItem("username");
    const comments = await (await CommentApi.getComment(productId)).data.comments
    return `<div class="comment container">
            <div class="mb-5">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="comment-header-left">
                        <h3>REVIEWS CỦA KHÁCH HÀNG</h3>
                        <p class="m-0 color-star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>Dựa trên ${comments.length} reviews</span>
                        </p>
                    </div>
                    <div class="comment-header-right">
                        <button class="btn-comment">Xem tất cả</button>
                    </div>
                </div>
            </div>
            <div class="row">
                ${comments.map(comment => (
                    `<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="comment-item px-2">
                    <div class="commnet-content">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="color-star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="time">
                                <p class="m-0">${comment.createdAt.slice(0,10)}</p>
                            </div>
                        </div>
                        <h4 class="text-uppercase py-4 m-0">Restock</h4>
                        <div class="comment-content">
                            <p class="comment-text m-0">
                                ${comment.comment}
                            </p>
                        </div>
                        <div class="account d-flex align-items-center">
                            <div class="avatar">
                                <img class="w-100 h-100 rounded-circle" style="object-fit:cover" src="${comment.userId.avatar}" alt="">
                            </div>
                            <div class="account-user ms-4">
                                <h6 class="m-0">${comment.userId.username}</h6>
                                <p class="m-0">Đã xác thực</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>`
                )).join('')}
                
                
            </div>
            <div class="mt-5">
                    ${
                      user
                        ? `<form id="add-comment" data-name="${id}" data-id="${productId}">
                    <legend>Thêm đánh giá</legend>
                
                    <div class="form-group">
                        <textarea id="comment" type="text" class="form-control" placeholder="Thêm commnet"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Thêm đánh giá</button>
                </form>`
                        : `
                    <p>Hãy đăng nhập để bình luận !!!</p>
                `
                    }
                </div>
        </div>`;
  },
  async afterRender() {
    const username = localStorage.getItem("username");
    const idUser = await (await UserApi.getUserName(username)).data.user._id;
    const btn_commnet = document.querySelector("#add-comment");
    const productId = btn_commnet.getAttribute("data-id");
    const data_name = btn_commnet.getAttribute("data-name");
    btn_commnet.addEventListener("submit", async (e) => {
      e.preventDefault();
      const comment = {
        userId: idUser,
        productId: productId,
        comment: document.querySelector("#comment").value,
      };
      const result = await CommentApi.postComment(comment);
      if (result.status === 200) {
        Toastify({
          text: result.data.message,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
        document.querySelector('#root').innerHTML = await ProductDetail.render({id: data_name})
        await ProductDetail.afterRender()
      }
    });
  },
};
export default Comment;
