import CategoryApi from "../../../../apis/categoryApi";
import navbarLeft from "../../components/navbarLeft";
import navbarTop from "../../components/navbarTop";
import "../../../../firebase";
import { getStorage, ref,uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import { reRender } from "../../../../utils/rerender";
import CategoryPageAdmin from "./categoryPageAdmin";
const CategoryAddForm = {
  async render() {
    const content = () => {
      return `
              <div class="container">
                <form enctype="multipart/form-data" id="form-add">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tên danh mục</label>
                    <input type="text" id="categoryTitle" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Url Video</label>
                    <input type="text" id="categoryUrlVideo" class="form-control" >
                  </div>
                  <div class="mb-3 align-items-center d-flex">
                        <label for="imgInp" class="form-label me-3">Thêm ảnh</label>
                        <label for="imgInp">
                            <img class="" width="100px" src="./src/publics/image/add.png" alt="" id="blah2">
                        </label>
                        <input type="file" name="image_category" class="imageadd" id="imgInp" hidden>
                    </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            `;
    };

    return `<div class="adminroot">
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
          </div>`;
  },

  afterRender() {
    imgInp.onchange = (evt) => {
      const [file] = imgInp.files;
      if (file) {
        blah2.src = URL.createObjectURL(file);
      }
    };

    document.querySelector("#form-add").addEventListener("submit", (e) => {
      e.preventDefault();
      const storage = getStorage();
      const categoryImage = document.querySelector(".imageadd").files[0];
      const storageRef = ref(storage, `images/${categoryImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, categoryImage);
      uploadTask.on('state_changed',
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
              const category = {
                title: document.querySelector("#categoryTitle").value,
                imageURL: downloadURL,
                videoURL: document.querySelector("#categoryUrlVideo").value
              }
              const data = await CategoryApi.put(id,category);
              if(data.status === 200){
                reRender(CategoryPageAdmin, '#showBody')
                window.location.hash = '/admincategory'
                Toastify({
                  text: data.data.message,
                  className: "info",
                  style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                  }
                }).showToast();
              }
              else{
                Toastify({
                    text: 'add category not success',
                    className: "danger",
                    style: {
                        background: "linear-gradient(to right, #ff0011, #bb321f)",
                    }
                  }).showToast();
                  reRender(CategoryAddForm, '#root')
              };
          });
        }
      );
    });
  },
};

export default CategoryAddForm;
