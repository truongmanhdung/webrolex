import navbarLeft from "../../components/navbarLeft";
import navbarTop from "../../components/navbarTop";
import "../../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes
} from "firebase/storage";
import { reRender } from "../../../../utils/rerender";
import CategoryApi from "../../../../apis/categoryApi";
import ProductApi from "../../../../apis/productApi";
import ProductPageAdmin from "./productPageAdmin";

const ProductEditForm = {
  async render({ id }) {
    const listcategoris = await CategoryApi.getAll();
    const categories = await listcategoris.data.categorys;
    const dataproduct = await (await ProductApi.getID(id)).data.product;
    const content = () => {
      return `
              <div class="container">
                <form enctype="multipart/form-data" id="form-add" data-id="${
                  dataproduct._id
                }">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tên sản phẩm</label>
                    <input type="text" id="title" value="${
                      dataproduct.title
                    }" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Mô tả</label>
                    <input type="text" id="desc" value="${
                      dataproduct.description
                    }" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Giá</label>
                    <input type="text" id="price" value="${
                      dataproduct.price
                    }" class="form-control">
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Danh mục</label>
                    
                    <select name="" id="category" class="form-control" required="required">
                        ${categories.map(
                          (category) =>
                            `<option value="${category._id}">${category.title}</option>`
                        ).join("")}
                        
                    </select>
                    
                  </div>
                  <div class="mb-3 align-items-center d-flex">
                    <img class="" width="100px" src="${
                      dataproduct.imageURL
                    }" alt="">
                    <img class="mx-4" width="100px" src="https://cdn.pixabay.com/photo/2012/04/05/01/58/arrow-25864_640.png" alt="">
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

    document.querySelector("#form-add").addEventListener("submit", async (e) => {
      e.preventDefault();
      const id = document.querySelector("#form-add").getAttribute("data-id");
      const storage = getStorage();
      const ImageList = document.querySelector(".imageadd").files;
      const listImage = [...ImageList];
      const listImageUrl = [];
      const uploadImagePromise = (image) => {
        return new Promise(function (resolve, reject) {
          const storageRef = ref(storage, `images/${image.name}`);
          const uploadTask = uploadBytesResumable(storageRef, image);
          uploadBytes(storageRef, image).then(async () => {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadUrl);
          });
        });
      };
      for (let i = 0; i < listImage.length; i++) {
        await uploadImagePromise(listImage[i]).then((response) => {
          listImageUrl.push(response)
        });
      }

      const product = {
        title: document.querySelector("#title").value,
        description: document.querySelector("#desc").value,
        price: document.querySelector("#price").value,
        category: document.querySelector("#category").value,
        imageURL: listImageUrl,
      };
      const success =  await ProductApi.put(id,product);
      if(success.status === 200) {
        reRender(ProductPageAdmin, "#showBody");
        window.location.hash = "/adminproduct";
        Toastify({
          text: success.data.message,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
      }else{
        Toastify({
            text: 'edit product not success',
            className: "danger",
            style: {
                background: "linear-gradient(to right, #ff0011, #bb321f)",
            }
          }).showToast();
          reRender(ProductEditForm, '#root')
      };
    });
  },
};

export default ProductEditForm;
