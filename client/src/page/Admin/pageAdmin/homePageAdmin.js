import navbarLeft from "../components/navbarLeft";
import navbarTop from "../components/navbarTop";

const HomePageAdmin = {
    render() {
        return (
           `
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
                 <div id="body-content-admin"></div>
                 <!-- /.container-fluid -->
               </div>
             </div>
           </div>
           <a class="scroll-to-top rounded" href="#page-top">
             <i class="fas fa-angle-up"></i>
           </a>
         </div>
           `
        )
    },
}

export default HomePageAdmin;