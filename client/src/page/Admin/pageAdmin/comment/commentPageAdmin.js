import CommentApi from "../../../../apis/comment"
import { reRender } from "../../../../utils/rerender";
import navbarLeft from "../../components/navbarLeft"
import navbarTop from "../../components/navbarTop"

const CommentPageAdmin = {
    async render() {
        
        const comments = await (await CommentApi.getAll()).data.comments;
        console.log(comments)
        const showBtn = (status, id) => {
          if(status === true){
            return `
              <button type="button" data-id="${id}" data-status="${status}" id="btnupdate" class="btn btn-large btn-block btn-danger">Ẩn comment</button>
            `
          }else{
            return `
              <button type="button" data-id="${id}" data-status="${status}" id="btnupdate" class="btn btn-large btn-block btn-primary">Hiện comment</button>
            `
          }
        }
        const content = () => {
            return `
            
            <div class="container">
            <h3 class="text-center my-4">Tất cả comment</h3>
            <table class="table table-hover">
            <thead>
                <tr>
                    <th class="text-center">STT</th>
                    <th class="text-center">Tên sản phẩm</th>
                    <th class="text-center" >Tên user</th>
                    <th class="text-center" >Nội dung</th>
                    <th class="text-center" >Thời gian comment</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                ${comments.map((comment, index) =>(
                  `
                    <tr>
                      <td class="text-center">${index+1}</td>
                      <td class="text-center">${comment.productId.title}</td>
                      <td class="text-center">${comment.userId.username}</td>
                      <td class="text-center">${comment.comment}</td>
                      <td class="text-center">${comment.createdAt}</td>
                      <td class="text-center">
                        ${showBtn(comment.status, comment._id)}
                      </td>
                    </tr>
                  `
                )).join('')}
                
            </tbody>
        </table>
        
        </div>
        `
        }
        
        return (
            `<div class="adminroot">
            <div id="wrapper">
              <!-- Sidebar -->
                 ${navbarLeft.render()}
              <!-- End of Sidebar -->
      
              <!-- Content Wrapper -->
              <div id="content-wrapper" class="d-flex flex-column">
                <!-- Main Content -->
                <div id="content">
                  <!-- Topbar -->
                     ${navbarTop.render()}
                  <!-- End of Topbar -->
      
                  <!-- Begin Page Content -->
                  <div id="body-content-admin">
                        ${content()}
                  </div>
                  <!-- /.container-fluid -->
                </div>
              </div>
            </div>
            <a class="scroll-to-top rounded" href="#page-top">
              <i class="fas fa-angle-up"></i>
            </a>
          </div>`
        )
    },
    afterRender(){
        const btnActive = document.querySelectorAll('#btnupdate');
        btnActive.forEach(btn =>{
          btn.addEventListener('click', async () => {
            const id = btn.getAttribute('data-id');
            const status = btn.getAttribute('data-status') === 'true' ? true : false;
            if(status === true) {
              if(window.confirm("bạn có muốn ẩn bình luận này không?")){
                const comment = {
                  status: !status
                }
                const result = await CommentApi.updateStatus(id, comment);
                if(result.status === 200){
                  Toastify({
                    text: result.data.message,
                    className: "danger",
                    style: {
                        background: "linear-gradient(to right, #ff0011, #bb321f)",
                    }
                  }).showToast();
                  reRender(CommentPageAdmin, '#root')
                }
              }
            }else{
              console.log('adsadsadsa')
              if(window.confirm("bạn có muốn hiện bình luận này không?")){
                const comment = {
                  status: !status
                }
                const result = await CommentApi.updateStatus(id, comment);
                if(result.status === 200){
                  Toastify({
                    text: result.data.message,
                    className: "danger",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                  }).showToast();
                  reRender(CommentPageAdmin, '#root')
                }
              }
            }
          })
        })

    }
}

export default CommentPageAdmin