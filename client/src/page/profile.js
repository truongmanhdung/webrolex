import UserApi from "../apis/userApi"
import Footer from "../components/footer";
import Header from "../components/header";

const ProfilePage = {
    
    async render() {
        const username = localStorage.getItem('username');
        const user = await (await UserApi.getUserName(username)).data.user;
        console.log(user)
        return (
            `
            ${await Header.render()}
            <div class="" style="height: 80px; background-color: rgba(0, 0, 0, 0.5)"> 

            </div>
            
            <div class="container">
                <h3 class="text-center my-4">Thông tin cá nhân</h3>
                <div class="container">
        <div class="user_name">
            <div class="mb-3">
                <div class="">
                    <h4 class="form-label">User name</h4>
                </div>
                <input type="checkbox" hidden id="username" class="user_name">
                <div class="d-flex justify-content-between align-items-center border-bottom">
                    <p class=" pb-2">${user.username}</p>
                    <p><label class="test" for="username"><i class="fas fa-edit"></i></label> </p>
                </div>
    
                <div class="hover_form_infor p-5 bg-light">
                    <form action="" method="post">
                        <div class="d-flex align-items-center text-center">
                            <label class="d-block" style="width: 226px;" for="">User Name</label>
                            <input required style="width: 200px" value="${user.username}" type="text" class="form-control" name="name">
                        </div>
                        <button type="submit" name="update_name" class="btn d-block mx-auto mt-4 btn-primary">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="user_name">
            <div class="mb-3">
                <div class="">
                    <h4 class="form-label">Email</h4>
                </div>
                <input type="checkbox" hidden id="email" class="user_name">
                <div class="d-flex justify-content-between align-items-center border-bottom">
                    <p class=" pb-2">${user.email}</p>
                    <p><label for="email"><i class="fas fa-edit"></i></label> </p>
                </div>
    
                <div class="hover_form_infor p-5 bg-light">
                    <form action="" method="post">
                        <div class="d-flex align-items-center text-center">
                            <label class="d-block" style="width: 226px;" for="">Email</label>
                            <input style="width: 200px" value="${user.email}" type="text" class="form-control" name="email">
                        </div>
                        <button type="submit" name="update_email" class="btn d-block mx-auto mt-4 btn-primary">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="user_name">
            <div class="mb-3">
                <div class="">
                    <h4 class="form-label">Password</h4>
                </div>
                <input type="checkbox" hidden id="password" class="user_name">
                <div class="d-flex justify-content-between align-items-center border-bottom">
                    <p class=" pb-2">**************</p>
                    <p><label for="password"><i class="fas fa-edit"></i></label> </p>
                </div>
    
                <div class="hover_form_infor p-5 bg-light">
                    <form action="" method="post">
                        <div class="d-flex align-items-center text-center m-3">
                            <label class="d-block" style="width: 210px;" for="">Nhập password cũ</label>
                            <input style="width: 200px" type="password" class="form-control" name="password_old">
                        </div>
                        <div class="d-flex align-items-center text-center m-3">
                            <label class="d-block" style="width: 210px;" for="">Nhập password mới</label>
                            <input style="width: 200px" type="password" class="form-control" name="password_new">
                        </div>
                        <div class="d-flex align-items-center text-center m-3">
                            <label class="d-block" style="width: 210px;" for="">Nhập lại password</label>
                            <input style="width: 200px" type="password" class="form-control" name="password_new1">
                        </div>
                        <button type="submit" name="update_password" class="btn d-block mx-auto mt-4 btn-primary">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="user_name">
            <div class="mb-3">
                <div class="">
                    <h4 class="form-label">Address</h4>
                </div>
                <input type="checkbox" hidden id="address" class="user_name">
                <div class="d-flex justify-content-between align-items-center border-bottom">
                    <p class=" pb-2">${user.address}</p>
                    <p><label for="address"><i class="fas fa-edit"></i></label> </p>
                </div>
    
                <div class="hover_form_infor p-5 bg-light">
                    <form action="" method="post">
                        <div class="d-flex align-items-center text-center">
                            <label class="d-block" style="width: 226px;" for="">Address</label>
                            <input style="width: 200px" value="${user.address}" type="text" class="form-control" name="address">
                        </div>
                        <button type="submit" name="update_address" class="btn d-block mx-auto mt-4 btn-primary">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="user_name">
            <div class="mb-3">
                <div class="">
                    <h4 class="form-label">Phone</h4>
                </div>
                <input type="checkbox" hidden id="phone" class="user_name">
                <div class="d-flex justify-content-between align-items-center border-bottom">
                    <p class=" pb-2">+84${user.phone}</p>
                    <p><label for="phone"><i class="fas fa-edit"></i></label> </p>
                </div>
    
                <div class="hover_form_infor p-5 bg-light">
                    <form action="" method="post" enctype="multipart/form-data">
                        <div class="d-flex align-items-center text-center">
                            <label class="d-block" style="width: 226px;" for="">Phone</label>
                            <input style="width: 200px" value="0${user.phone}" type="number" class="form-control" name="phone">
                        </div>
                        <button type="submit" name="update_phone" class="btn d-block mx-auto mt-4 btn-primary">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div><div class="user_name">
            <div class="mb-3">
                <div class="">
                    <h4 class="form-label">Avatar</h4>
                </div>
                <input type="checkbox" hidden id="image" class="user_name">
                <div class="d-flex justify-content-between align-items-center border-bottom">
                    <img width="100px" src="${user.avatar}" alt="">
                    <p><label for="image"><i class="fas fa-edit"></i></label> </p>
                </div>
    
                <div class="hover_form_infor p-5 bg-light">
                    <form action="" method="post" enctype="multipart/form-data">
                        <div class="d-flex align-items-center text-center justify-content-between">
                            <img width="100px" src="${user.avatar}" alt="">
                            <img class="mx-4" width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGINeQ997ETiaTn60eo0XM2jQ8EE-LvxpM6Gm0GQPj5D2Ebf-FhRf_TsvUTpbUKU4Tr_Q&usqp=CAU" alt="">
                            <label for="imgInp">
                                <img class="" width="100px" src="http://localhost:8080/src/publics/image/add.png" alt="" id="blah">
                            </label>
                            <input type="file" name="image" id="imgInp" hidden>
                        </div>
                        <button type="submit" name="update_image" class="btn d-block mx-auto mt-4 btn-primary">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
            </div>
            ${Footer.render()}
            `
        )
    },
    afterRender() {
        Header.afterRender();
        imgInp.onchange = (evt) => {
            const [file] = imgInp.files;
            if (file) {
              blah.src = URL.createObjectURL(file);
            }
        };

        
    }
}

export default ProfilePage