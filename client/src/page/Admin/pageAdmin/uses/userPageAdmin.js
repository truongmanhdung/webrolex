import UserApi from "../../../../apis/userApi";
import navbarLeft from "../../components/navbarLeft";
import navbarTop from "../../components/navbarTop";

const UserPageAdmin = {
    async render() {

    const listUser = await (await UserApi.getAll()).data.users;
    console.log(listUser)
    const content = () => {
      return `
            <div class="container">
            <table class="table table-hover">
            <thead>
                <tr>
                    <th class="text-center">STT</th>
                    <th class="text-center">Tên</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Avatar</th>
                    <th class="text-center">Ngày đăng kí</th>
                    <th class="text-center">Quyền truy cập</th>
                </tr>
            </thead>
            <tbody>
                ${listUser
                  .map(
                    (item, index) =>
                      `
                    <tr style="verticle-align: middle; vertical-align: middle;">
                        <td class="text-center">${index + 1}</td>
                        <td class="text-center">${item.username}</td>
                        <td class="text-center" style="width: 200px">${
                          item.email
                        }</td>
                        <td class="text-center">
                            <img width="100" src="${item.avatar}">
                        </td>
                        
                        <td class="text-center">${item.createdAt}</td>
                        <td class="text-center">
                        ${item.username === 'admin' ? `<button type="button" data-id="${
                          item._id
                        }" class="btn my-2 deleteBtn btn-success">Admin</button>` : `<button type="button" data-id="${
                          item._id
                        }" class="btn my-2 deleteBtn btn-primary">User</button>`}
                            
                        </td>
                    </tr>
                    `
                  )
                  .join("")}
                
            </tbody>
        </table>
        
        </div>
        `;
    };
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
    }
}

export default UserPageAdmin;