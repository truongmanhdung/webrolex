import CommentApi from "../../../apis/comment";
import OrderApi from "../../../apis/orderApi";
import ProductApi from "../../../apis/productApi";
import UserApi from "../../../apis/userApi";
import formatprice from "../../../common/formatprice";
import navbarLeft from "../components/navbarLeft";
import navbarTop from "../components/navbarTop";

const HomePageAdmin = {
  async render() {
    const users = await (await UserApi.getAll()).data.users;
    const products = await (await ProductApi.getAll()).data.products;
    const comments = await (await CommentApi.getAll()).data.comments;
    const orders = await (await OrderApi.getAll()).data.orders;
    let total = 0;
    orders.forEach((order) => {
      total += order.total;
    });
    console.log(users);
    console.log(products);
    console.log(comments);
    console.log(orders);
    /*html*/
    return `
           <div class="adminroot">
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
                 <div class="container-fluid">

                 <!-- Page Heading -->
                 <!-- Content Row -->
                 
                 <div class="container">
                 <div class="row">
             
                 <!-- Earnings (Monthly) Card Example -->
                 <div class="col-xl-3 col-md-6 mb-4">
                     <div class="card border-left-primary shadow h-100 py-2">
                         <a href="/#/adminorder" class="card-body">
                             <div class="row no-gutters align-items-center">
                                 <div class="col mr-2">
                                     <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                         Doanh thu</div>
                                     <div class="h5 mb-0 font-weight-bold text-gray-800">${formatprice(
                                       total
                                     )}</div>
                                 </div>
                                 
                             </div>
                         </a>
                     </div>
                 </div>
         
                 <!-- Earnings (Monthly) Card Example -->
                 <div class="col-xl-3 col-md-6 mb-4">
                     <div class="card border-left-success shadow h-100 py-2">
                         <a class="card-body" href="/#/adminproduct">
                             <div class="row no-gutters align-items-center">
                                 <div class="col mr-2">
                                     <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                         Tổng sản phẩm</div>
                                     <div class="h5 mb-0 font-weight-bold text-gray-800">${
                                       products.length
                                     }</div>
                                 </div>
                                 <div class="col-auto">
                                     <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                 </div>
                             </div>
                         </a>
                     </div>
                 </div>
         
                 <!-- Earnings (Monthly) Card Example -->
                 <div class="col-xl-3 col-md-6 mb-4">
                     <div class="card border-left-info shadow h-100 py-2">
                         <a href="/#/admincomment" class="card-body">
                             <div class="row no-gutters align-items-center">
                                 <div class="col mr-2">
                                     <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Comment
                                     </div>
                                     <div class="row no-gutters align-items-center">
                                         <div class="col-auto">
                                             <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">${
                                               comments.length
                                             }</div>
                                         </div>
                                         <div class="col">
                                             <div class="progress progress-sm mr-2">
                                                 <div class="progress-bar bg-info" role="progressbar"
                                                     style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                     aria-valuemax="100"></div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div class="col-auto">
                                     <i class="fas fa-comments fa-2x text-gray-300"></i>
                                 </div>
                             </div>
                         </a>
                     </div>
                 </div>
         
                 <!-- Pending Requests Card Example -->
                 <div class="col-xl-3 col-md-6 mb-4">
                     <div class="card border-left-warning shadow h-100 py-2">
                         <a href="/#/adminuser" class="card-body">
                             <div class="row no-gutters align-items-center">
                                 <div class="col mr-2">
                                     <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                         User</div>
                                     <div class="h5 mb-0 font-weight-bold text-gray-800">${
                                       users.length
                                     }</div>
                                 </div>
                                 <div class="col-auto">
                                     <i class="fas fa-users fa-2x text-gray-300"></i>
                                 </div>
                             </div>
                         </a>
                     </div>
                 </div>
             </div>
         
             <!-- Content Row -->
         
             <div class="row">
         
                 <!-- Area Chart -->
                 <div class="col-xl-8 col-lg-7">
                  <div id="piechart_3d" style="width: 100%; height: 500px;"></div>
                 </div>
         
                 <!-- Pie Chart -->
                 <div class="col-xl-4 col-lg-5">
                     <div class="card shadow mb-4">
                         <!-- Card Header - Dropdown -->
                         <div
                             class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                             <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                             <div class="dropdown no-arrow">
                                 <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                 </a>
                                 <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                     aria-labelledby="dropdownMenuLink">
                                     <div class="dropdown-header">Dropdown Header:</div>
                                     <a class="dropdown-item" href="#">Action</a>
                                     <a class="dropdown-item" href="#">Another action</a>
                                     <div class="dropdown-divider"></div>
                                     <a class="dropdown-item" href="#">Something else here</a>
                                 </div>
                             </div>
                         </div>
                         <!-- Card Body -->
                         <div class="card-body">
                             <div class="chart-pie pt-4 pb-2">
                                 <canvas id="myPieChart"></canvas>
                             </div>
                             <div class="mt-4 text-center small">
                                 <span class="mr-2">
                                     <i class="fas fa-circle text-primary"></i> Direct
                                 </span>
                                 <span class="mr-2">
                                     <i class="fas fa-circle text-success"></i> Social
                                 </span>
                                 <span class="mr-2">
                                     <i class="fas fa-circle text-info"></i> Referral
                                 </span>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         
             <!-- Content Row -->
             
         
         </div>
                 </div>
                 
                 
                 </div>
                 <!-- /.container-fluid -->
               </div>
             </div>
           </div>
           <a class="scroll-to-top rounded" href="#page-top">
             <i class="fas fa-angle-up"></i>
           </a>
         </div>
           `;
  },
  async afterRender() {
    

  },
};

export default HomePageAdmin;
