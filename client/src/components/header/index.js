import CategoryApi from "../../apis/categoryApi";
import ProductApi from "../../apis/productApi";
import convertToUrl from "../../common/convertToUrl";
import HomePage from "../../page/HomePage";
import { getCartItems } from "../../utils/addToCart";
import { reRender } from "../../utils/rerender";
import Search from "../search/search";
import ShowLoading from "../showloading";
import AOS from 'aos';
import formatprice from "../../common/formatprice";

const Header = {
  async render() {
    const username = localStorage.getItem("username");
    const dataCategory = await CategoryApi.getAll();
    const carts = getCartItems();
    const showUser = () => {
      let html = null;
      if (username === "admin") {
        html = `
          <li class="menu-item"><a href="/#/admin">Vào trang quản trị</a></li>
          <li class="menu-item dangxuat cursor-pointer"><a class="text-black ">Đăng xuất</a></li>
        `
          
      } else {
        html = `<li class="menu-item"><a href="/#/profile">Chào ${username}, xem profile</a></li>
        <li class="menu-item dangxuat cursor-pointer"><a class="text-black ">Đăng xuất</a></li>
        `;
      }
      return html;
    };
    return `<div class="header container-fluid">
           <div
             class=" menu  pt-4 pb-2"
           >
             <div class=" d-flex container align-items-center justify-content-between  ">
               <div class="navbar_left">
                 <label for="showMenu" class="d-flex align-items-center cursor-pointer">
                   <i class="fas fa-align-justify color-menu" style="margin-right: 5px"></i>
                   <p class="m-0 menu-margin color-menu ">Danh mục</p>
                 </label>
                 <input type="checkbox" id="showMenu" hidden class="inputShowMenu">
                 <div class="showMenu p-4" style="background-color: #f8f8f8 !important; z-index: 100 !important">
                   <label class="text-left" style="text-align: center ; padding-left: 13px" for="showMenu">
                     <i class="fas fa-times text-black" style="color: black; text-align: center;"></i>
                   </label>
                   <h3 class="my-3 text-black" style="color: black !important">Danh mục</h3>
                   <ul for="showMenu" class="list-menu p-0">
                        ${dataCategory.data.categorys
                          .map(
                            (item) =>
                              `<li key="${item._id}" ${localStorage.setItem(
                                `${convertToUrl(item.title)}`,
                                item._id
                              )}  class="menu-item"><a href="/#/category/${convertToUrl(
                                item.title
                              )}">${item.title}</a></li></a></li>`
                          )
                          .join("")}
                       <li class="menu-item"><a href="">Giới thiệu</a></li>
                       <li class="menu-item"><a href="">Blog</a></li>
                       ${
                         username
                           ? showUser()
                           : `<li class="menu-item"><a href="/#/login">Đăng nhập</a></li>
                       <li class="menu-item"><a href="/#/register">Đăng ký</a></li>`
                       }
                       
                   </ul>
                 </div>
                 <label class="overlay1" for="showMenu">
     
                 </label>
               </div>
               <div class="logo">
                 <svg  xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 103 59" aria-hidden="true" alt="" class="sc-pBzUF jfMcol logo1" opacity="1" visibility="visible" height="50px"><path class="crown" d="M39.4,10.7c0.2,0,0.3,0,0.4-0.1L45,28h0c0.6,1.9,3.4,3.4,6.8,3.4c3.4,0,6.2-1.5,6.8-3.4h0l5.1-17.4  c0.1,0,0.3,0,0.4,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.7,0.4,1.3,1,1.6l-5.9,12.7l1-17.1  c0,0,0,0,0,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.8,0.6,1.5,1.3,1.7l-3.9,16.7L52,4.3  c0.9-0.1,1.5-0.9,1.5-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.9,0.7,1.7,1.5,1.8l-1.9,18.4L45.7,6C46.5,5.8,47,5.1,47,4.3  c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8c0,0,0,0,0,0l1,17.1l-5.9-12.7c0.6-0.3,1-0.9,1-1.6  c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8C37.6,9.9,38.4,10.7,39.4,10.7z M51.8,26.5c3.1,0,5.6,0.8,5.6,1.8c0,1-2.5,1.8-5.6,1.8  c-3.1,0-5.6-0.8-5.6-1.8C46.1,27.3,48.7,26.5,51.8,26.5z"></path><path class="letters" d="M31.9,38.7c-5.2,0-9.3,4.2-9.3,9.2c0,5,4.2,9.2,9.3,9.2c5.2,0,9.3-4.2,9.3-9.2C41.2,42.9,37.1,38.7,31.9,38.7z   M35.8,53.2c-0.3,0.4-0.7,0.8-1.1,1.1c-0.7,0.5-1.5,0.9-2.3,0.9c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0-0.5,0c-0.8,0-1.6-0.4-2.3-0.9  c-0.4-0.3-0.8-0.7-1.1-1.1c-1-1.3-1.6-3.2-1.6-5.3c0-2,0.5-3.7,1.4-5.1c0.5-0.9,1.2-1.6,2.2-2c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1  c0.1-0.1,0.2-0.1,0.4-0.1c0.4-0.1,0.9-0.2,1.3-0.2c0.5,0,0.9,0.1,1.3,0.2c0.1,0,0.3,0.1,0.4,0.1c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0  c0.9,0.4,1.7,1.1,2.2,2c0.9,1.3,1.4,3.1,1.4,5.1C37.4,50,36.8,51.9,35.8,53.2z"></path><path class="letters" d="M59.7,49.8h-1.3v2.6c0,1.6-1.3,2.8-2.9,2.8c0,0,0,0,0,0v0h-4h-1.5V40.6h2.5v-1.3h-2.5l0,0h-0.3h-6.2v1.3h2.5  v14.6h-2.5v1.3h14.9h1.1h0.1h0.1v0h0v-4.2h0V49.8z"></path><path class="letters" d="M79.5,39.4L79.5,39.4h-0.1h-4H62.5v1.3h2.5v14.6h-2.5v1.3v0h12.9h2.9h1.1h0.1h0h0.1v-4.2v-1.9h-1.3v2l0,0  c0,1.6-1.3,2.8-2.9,2.8c0,0,0,0,0,0v0h-4.6v0H69h-0.1v-7V48h1.3c0,0,0,0,0,0H71l0,0c1.2,0,2.1,1,2.1,2.1c0,0,0,0,0,0h0v0.7l0,0v0.3  h1.2V51V48v0v-1.1v0V44v-0.1h-1.2v0.8h0c0,0,0,0,0,0c0,1.2-0.9,2-2.1,2l0,0h-0.8h-0.8h-0.5v-6.2H69h3.7c0,0,0,0,0.1,0h2.6  c1.6,0,2.8,1.3,2.9,2.8l0,0v1.8h1.3v-1.7L79.5,39.4L79.5,39.4L79.5,39.4z"></path><path class="letters" d="M101.8,55.3c-1.2,0-1.5-0.4-2.5-1.5l-5.7-7.1l3.8-4.5v0c1-1.2,1.3-1.6,2.6-1.6h0.8h0.2v-1.3h-0.2H97h-0.2h-2.7  H94v1.3h0.2h1.4v0c0,0,0,0,0,0c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.2-0.1,0.3l-3.3,4L90,42.3l-0.5-0.7c-0.1-0.1-0.1-0.2-0.1-0.4  c0-0.3,0.3-0.6,0.6-0.6h1.5v-1.3h-2.7h-3.9h-2.1v1.3h0.4c1.1,0.1,1.4,0.4,2.3,1.4l5,6.3L86,53.7v0c-1,1.2-1.3,1.6-2.6,1.6h-0.8h-0.3  v1.3h0.3h4.3h0.3h2.3h0.3v-1.3h-0.3h-1.6v0c0,0,0,0,0,0c-0.3,0-0.6-0.3-0.6-0.6c0-0.1,0.1-0.3,0.1-0.4l4-4.8l3.3,4.2l0.5,0.6  c0.1,0.1,0.1,0.2,0.1,0.4c0,0.3-0.3,0.6-0.6,0.6c0,0,0,0,0,0l0,0h-1.6v1.3h0v0h9.3v-1.3L101.8,55.3L101.8,55.3z"></path><path class="letters" d="M19.6,55.2l-1.1-3.3c-0.5-1.5-0.9-2.1-1.7-2.9c-0.5-0.5-1.3-0.7-1.9-0.9c2.1-0.3,3.7-2.2,3.7-4.4  c0-2.4-2-4.4-4.4-4.4c0,0-0.1,0-0.1,0v0H7.4h-4H1v1.3h2.4v14.6H0.9v1.3h6.4l0,0h2.5v-1.3H7.4v-7h1.9c0.1,0,0.1,0,0.2,0h0.4  c0.6,0,1.1,0.1,1.6,0.2c0.4,0.1,0.9,0.3,1.2,0.5c0.4,0.3,0.9,0.7,1.3,1.3c0.1,0.2,0.2,0.4,0.3,0.5c0.7,1.4,1.2,3.3,1.7,5.7h3v0h2.7  v-1.3L19.6,55.2L19.6,55.2z M11.6,46.9H7.4v-6.3h4.2c1.8,0.1,3.2,1.3,3.2,3.1S13.4,46.8,11.6,46.9z"></path></svg>
                 <a aria-label="Rolex - Đi đến Trang chủ" class="sc-fzqzlV logo2 gMJRj" href="/vi"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 59" aria-hidden="true" alt="" height="50px"><path d="M39.4,10.7c0.2,0,0.3,0,0.4-0.1L45,28h0c0.6,1.9,3.4,3.4,6.8,3.4c3.4,0,6.2-1.5,6.8-3.4h0l5.1-17.4c0.1,0,0.3,0,0.4,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.7,0.4,1.3,1,1.6l-5.9,12.7l1-17.1c0,0,0,0,0,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.8,0.6,1.5,1.3,1.7l-3.9,16.7L52,4.3c0.9-0.1,1.5-0.9,1.5-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.9,0.7,1.7,1.5,1.8l-1.9,18.4L45.7,6C46.5,5.8,47,5.1,47,4.3c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8c0,0,0,0,0,0l1,17.1l-5.9-12.7c0.6-0.3,1-0.9,1-1.6c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8C37.6,9.9,38.4,10.7,39.4,10.7z M51.8,26.5c3.1,0,5.6,0.8,5.6,1.8c0,1-2.5,1.8-5.6,1.8c-3.1,0-5.6-0.8-5.6-1.8C46.1,27.3,48.7,26.5,51.8,26.5z" fill="rgba(255, 255, 255, 1)"></path><g fill="rgba(255, 255, 255, 1)"><path d="M19.6,55.2l-1.1-3.3c-0.5-1.5-0.9-2.1-1.7-2.9c-0.5-0.5-1.3-0.7-1.9-0.9c2.1-0.3,3.7-2.2,3.7-4.4c0-2.4-2-4.4-4.4-4.4c0,0-0.1,0-0.1,0v0H7.4h-4H1v1.3h2.4v14.6H0.9v1.3h6.4l0,0h2.5v-1.3H7.4v-7h1.9c0.1,0,0.1,0,0.2,0h0.4c0.6,0,1.1,0.1,1.6,0.2c0.4,0.1,0.9,0.3,1.2,0.5c0.4,0.3,0.9,0.7,1.3,1.3c0.1,0.2,0.2,0.4,0.3,0.5c0.7,1.4,1.2,3.3,1.7,5.7h3v0h2.7v-1.3L19.6,55.2L19.6,55.2z M11.6,46.9H7.4v-6.3h4.2c1.8,0.1,3.2,1.3,3.2,3.1S13.4,46.8,11.6,46.9z"></path><path d="M31.9,38.7c-5.2,0-9.3,4.2-9.3,9.2c0,5,4.2,9.2,9.3,9.2c5.2,0,9.3-4.2,9.3-9.2C41.2,42.9,37.1,38.7,31.9,38.7zM35.8,53.2c-0.3,0.4-0.7,0.8-1.1,1.1c-0.7,0.5-1.5,0.9-2.3,0.9c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0-0.5,0c-0.8,0-1.6-0.4-2.3-0.9c-0.4-0.3-0.8-0.7-1.1-1.1c-1-1.3-1.6-3.2-1.6-5.3c0-2,0.5-3.7,1.4-5.1c0.5-0.9,1.2-1.6,2.2-2c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.1,0.4-0.1c0.4-0.1,0.9-0.2,1.3-0.2c0.5,0,0.9,0.1,1.3,0.2c0.1,0,0.3,0.1,0.4,0.1c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0c0.9,0.4,1.7,1.1,2.2,2c0.9,1.3,1.4,3.1,1.4,5.1C37.4,50,36.8,51.9,35.8,53.2z"></path><path d="M59.7,49.8h-1.3v2.6c0,1.6-1.3,2.8-2.9,2.8c0,0,0,0,0,0v0h-4h-1.5V40.6h2.5v-1.3h-2.5l0,0h-0.3h-6.2v1.3h2.5v14.6h-2.5v1.3h14.9h1.1h0.1h0.1v0h0v-4.2h0V49.8z"></path><path d="M79.5,39.4L79.5,39.4h-0.1h-4H62.5v1.3h2.5v14.6h-2.5v1.3v0h12.9h2.9h1.1h0.1h0h0.1v-4.2v-1.9h-1.3v2l0,0c0,1.6-1.3,2.8-2.9,2.8c0,0,0,0,0,0v0h-4.6v0H69h-0.1v-7V48h1.3c0,0,0,0,0,0H71l0,0c1.2,0,2.1,1,2.1,2.1c0,0,0,0,0,0h0v0.7l0,0v0.3h1.2V51V48v0v-1.1v0V44v-0.1h-1.2v0.8h0c0,0,0,0,0,0c0,1.2-0.9,2-2.1,2l0,0h-0.8h-0.8h-0.5v-6.2H69h3.7c0,0,0,0,0.1,0h2.6c1.6,0,2.8,1.3,2.9,2.8l0,0v1.8h1.3v-1.7L79.5,39.4L79.5,39.4L79.5,39.4z"></path><path d="M101.8,55.3c-1.2,0-1.5-0.4-2.5-1.5l-5.7-7.1l3.8-4.5v0c1-1.2,1.3-1.6,2.6-1.6h0.8h0.2v-1.3h-0.2H97h-0.2h-2.7H94v1.3h0.2h1.4v0c0,0,0,0,0,0c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.2-0.1,0.3l-3.3,4L90,42.3l-0.5-0.7c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.3,0.3-0.6,0.6-0.6h1.5v-1.3h-2.7h-3.9h-2.1v1.3h0.4c1.1,0.1,1.4,0.4,2.3,1.4l5,6.3L86,53.7v0c-1,1.2-1.3,1.6-2.6,1.6h-0.8h-0.3v1.3h0.3h4.3h0.3h2.3h0.3v-1.3h-0.3h-1.6v0c0,0,0,0,0,0c-0.3,0-0.6-0.3-0.6-0.6c0-0.1,0.1-0.3,0.1-0.4l4-4.8l3.3,4.2l0.5,0.6c0.1,0.1,0.1,0.2,0.1,0.4c0,0.3-0.3,0.6-0.6,0.6c0,0,0,0,0,0l0,0h-1.6v1.3h0v0h9.3v-1.3L101.8,55.3L101.8,55.3z"></path></g></svg></a>
               </div>
               <div class="navbar_right d-flex align-items-center color-menu ">
                 <div >
                   <label for="showSearch" class="d-flex align-items-center cursor-pointer">
                     <i class="fas fa-search color-menu " style="margin-right: 5px"></i>
                     <p class="m-0 menu-margin color-menu ">Tìm kiếm</p>
                   </label>
                   <input type="checkbox" id="showSearch" class="inputshow" hidden>
                   <div class="showshearch" style="z-index: 1000">
                       <div class="container" style="z-index: 1000">
                         <label style="display: block; padding-right: 14px" class="text-right" for="showSearch">
                           <i class="fas fa-times"></i>
                         </label>
                         <div class="text-center mx-auto d-flex justify-content-around">
                           <svg  xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 103 59" aria-hidden="true" alt="" class="sc-pBzUF jfMcol" opacity="1" visibility="visible" height="50px"><path class="crown" d="M39.4,10.7c0.2,0,0.3,0,0.4-0.1L45,28h0c0.6,1.9,3.4,3.4,6.8,3.4c3.4,0,6.2-1.5,6.8-3.4h0l5.1-17.4  c0.1,0,0.3,0,0.4,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.7,0.4,1.3,1,1.6l-5.9,12.7l1-17.1  c0,0,0,0,0,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.8,0.6,1.5,1.3,1.7l-3.9,16.7L52,4.3  c0.9-0.1,1.5-0.9,1.5-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,0.9,0.7,1.7,1.5,1.8l-1.9,18.4L45.7,6C46.5,5.8,47,5.1,47,4.3  c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8c0,0,0,0,0,0l1,17.1l-5.9-12.7c0.6-0.3,1-0.9,1-1.6  c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8C37.6,9.9,38.4,10.7,39.4,10.7z M51.8,26.5c3.1,0,5.6,0.8,5.6,1.8c0,1-2.5,1.8-5.6,1.8  c-3.1,0-5.6-0.8-5.6-1.8C46.1,27.3,48.7,26.5,51.8,26.5z"></path><path class="letters" d="M31.9,38.7c-5.2,0-9.3,4.2-9.3,9.2c0,5,4.2,9.2,9.3,9.2c5.2,0,9.3-4.2,9.3-9.2C41.2,42.9,37.1,38.7,31.9,38.7z   M35.8,53.2c-0.3,0.4-0.7,0.8-1.1,1.1c-0.7,0.5-1.5,0.9-2.3,0.9c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0-0.5,0c-0.8,0-1.6-0.4-2.3-0.9  c-0.4-0.3-0.8-0.7-1.1-1.1c-1-1.3-1.6-3.2-1.6-5.3c0-2,0.5-3.7,1.4-5.1c0.5-0.9,1.2-1.6,2.2-2c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1  c0.1-0.1,0.2-0.1,0.4-0.1c0.4-0.1,0.9-0.2,1.3-0.2c0.5,0,0.9,0.1,1.3,0.2c0.1,0,0.3,0.1,0.4,0.1c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0  c0.9,0.4,1.7,1.1,2.2,2c0.9,1.3,1.4,3.1,1.4,5.1C37.4,50,36.8,51.9,35.8,53.2z"></path><path class="letters" d="M59.7,49.8h-1.3v2.6c0,1.6-1.3,2.8-2.9,2.8c0,0,0,0,0,0v0h-4h-1.5V40.6h2.5v-1.3h-2.5l0,0h-0.3h-6.2v1.3h2.5  v14.6h-2.5v1.3h14.9h1.1h0.1h0.1v0h0v-4.2h0V49.8z"></path><path class="letters" d="M79.5,39.4L79.5,39.4h-0.1h-4H62.5v1.3h2.5v14.6h-2.5v1.3v0h12.9h2.9h1.1h0.1h0h0.1v-4.2v-1.9h-1.3v2l0,0  c0,1.6-1.3,2.8-2.9,2.8c0,0,0,0,0,0v0h-4.6v0H69h-0.1v-7V48h1.3c0,0,0,0,0,0H71l0,0c1.2,0,2.1,1,2.1,2.1c0,0,0,0,0,0h0v0.7l0,0v0.3  h1.2V51V48v0v-1.1v0V44v-0.1h-1.2v0.8h0c0,0,0,0,0,0c0,1.2-0.9,2-2.1,2l0,0h-0.8h-0.8h-0.5v-6.2H69h3.7c0,0,0,0,0.1,0h2.6  c1.6,0,2.8,1.3,2.9,2.8l0,0v1.8h1.3v-1.7L79.5,39.4L79.5,39.4L79.5,39.4z"></path><path class="letters" d="M101.8,55.3c-1.2,0-1.5-0.4-2.5-1.5l-5.7-7.1l3.8-4.5v0c1-1.2,1.3-1.6,2.6-1.6h0.8h0.2v-1.3h-0.2H97h-0.2h-2.7  H94v1.3h0.2h1.4v0c0,0,0,0,0,0c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.2-0.1,0.3l-3.3,4L90,42.3l-0.5-0.7c-0.1-0.1-0.1-0.2-0.1-0.4  c0-0.3,0.3-0.6,0.6-0.6h1.5v-1.3h-2.7h-3.9h-2.1v1.3h0.4c1.1,0.1,1.4,0.4,2.3,1.4l5,6.3L86,53.7v0c-1,1.2-1.3,1.6-2.6,1.6h-0.8h-0.3  v1.3h0.3h4.3h0.3h2.3h0.3v-1.3h-0.3h-1.6v0c0,0,0,0,0,0c-0.3,0-0.6-0.3-0.6-0.6c0-0.1,0.1-0.3,0.1-0.4l4-4.8l3.3,4.2l0.5,0.6  c0.1,0.1,0.1,0.2,0.1,0.4c0,0.3-0.3,0.6-0.6,0.6c0,0,0,0,0,0l0,0h-1.6v1.3h0v0h9.3v-1.3L101.8,55.3L101.8,55.3z"></path><path class="letters" d="M19.6,55.2l-1.1-3.3c-0.5-1.5-0.9-2.1-1.7-2.9c-0.5-0.5-1.3-0.7-1.9-0.9c2.1-0.3,3.7-2.2,3.7-4.4  c0-2.4-2-4.4-4.4-4.4c0,0-0.1,0-0.1,0v0H7.4h-4H1v1.3h2.4v14.6H0.9v1.3h6.4l0,0h2.5v-1.3H7.4v-7h1.9c0.1,0,0.1,0,0.2,0h0.4  c0.6,0,1.1,0.1,1.6,0.2c0.4,0.1,0.9,0.3,1.2,0.5c0.4,0.3,0.9,0.7,1.3,1.3c0.1,0.2,0.2,0.4,0.3,0.5c0.7,1.4,1.2,3.3,1.7,5.7h3v0h2.7  v-1.3L19.6,55.2L19.6,55.2z M11.6,46.9H7.4v-6.3h4.2c1.8,0.1,3.2,1.3,3.2,3.1S13.4,46.8,11.6,46.9z"></path></svg>
                         </div>
                         <div class="text-center my-3" style="z-index: 1000">
                           <h3>TÌM WEBSITE ROLEX</h3>
                         </div>
                         <div class="searchinput text-center d-flex" style="z-index: 1000">
                           <input type="text" placeholder="Tìm kiếm" id="keysearch">
                           <div class="text-focus">
                             <i class="fas fa-arrow-right"></i>
                           </div>
                           <span class="spanfocus"></span>
                           
                         </div>
                         <div id="showSearchProduct">

                         </div>
                       </div>
                       
                   </div>
                   <label class="overlay1" for="showSearch">
     
                   </label>
                 </div>
                 <div >
                   <label for="showBST" class="d-flex align-items-center ms-3 cursor-pointer">
                     <i class="far fa-heart color-menu " style="margin-right: 5px"></i>
                     <p class="m-0 menu-margin  color-menu" >Giỏ hàng</p>
                   </label>
                   <input type="checkbox" id="showBST" class="showBST" hidden>
                   <div class="showModalBST pt-3">
                       <div class="container">
                         <label style="display: block; padding-right: 14px" class="text-right" for="showBST">
                           <i class="fas fa-times"></i>
                         </label>
                       </div>
                       <div class="container showcart">
        
                      <table class="table table-hover">
                          <thead>
                              <tr>
                                  <th scope="col">Product</th>
                                  <th scope="col"></th>
                                <th class="text-center" scope="col" width="120">Quantity</th>
                                <th class="text-center" scope="col" width="120">Price</th>
                                <th class="text-center" scope="col" width="200" class="">Action</th>
                              </tr>
                          </thead>
                            <tbody>
                              ${carts.map((item)=>(
                                `
                                <tr>
                                    <td class="text-center">
                                        <div class="d-flex">
                                            <img width="80" src="${item.imageURL}" alt="">
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div>
                                            <p class="m-0">${item.title}</p>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                      ${item.quantity}
                                    </td>
                                    <td class="text-center header-price">
                                       ${formatprice(item.price*item.quantity)}
                                    </td>
                                    <td class="text-center">
                                        <button type="button" data-id="${item.id}" class="btn btn-outline-danger">Xóa</button>
                                    </td>
                                </tr>

                                `
                              )).join('')}
                                
                            </tbody>
                        </table>
                        
                        </div>
                   </div>
                   <label class="overlay1" for="showBST">
     
                   </label>
                 </div>
               </div>
             </div>
           </div>
          
         </div>`;
  },
  afterRender() {
    AOS.init();
    const menuitem = document.querySelectorAll(".menu-item a");
    const showMenu = document.querySelector("#showMenu");
    
    if (menuitem) {
      menuitem.forEach((item) => {
        item.addEventListener("click", () => {
          showMenu.checked = !showMenu.checked;
        });
      });
    }
    $(document).ready(function () {
      const adminroot = document.querySelector(".adminroot");
      if (!adminroot) {
        $(window).scroll(function (event) {
          var pos_body = $("html,body").scrollTop();
          if (pos_body < 10) {
            document.querySelector(".menu").classList.remove("an-di");
          }
        });

        $(window).bind("mousewheel", function (event) {
          if (event.originalEvent.wheelDelta < 0) {
            document.querySelector(".menu").classList.add("an-di");
          }
        });
      }
    });
    const showSearchProduct = document.querySelector('#showSearchProduct');
    var timeout;
    const keysearch = document.querySelector("#keysearch");
      var keyUpEventHandler2 = function(event) {
        clearTimeout(timeout);
        showSearchProduct.innerHTML = ShowLoading.render();
        timeout = setTimeout( async() => {
            const keySearch = event.target.value;
            if(keySearch !==''){
              const listSearch = await (await ProductApi.getSearch(keySearch)).data.products;
              setTimeout(() => {
                showSearchProduct.innerHTML = Search.render(listSearch)
              }, 1000)
            }else{
              showSearchProduct.innerHTML = null;
            }
            
        }, 500);
    }
    
    keysearch.addEventListener('keyup', keyUpEventHandler2);


    const dangxuat = document.querySelector('.dangxuat');
    dangxuat.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      reRender(HomePage, '#root');
      Toastify({
        text: "Bạn đã đăng xuất",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    })

    // cart
    const headerbtn_add1 = document.querySelectorAll('.headerbtn-add1');
    const headerbtn_add2 = document.querySelectorAll('.headerbtn-add2');
    const inputheader = document.querySelectorAll('.headerquantity');
    for (let i = 0; i < headerbtn_add1.length; i++) {
      headerbtn_add1[i].addEventListener('click', () => {
        var value = parseInt(inputheader[i].value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? (value = 1) : "";
        value--;
        if (value === 0) {
          if (window.confirm("Bạn có muốn xóa sản phẩm này không")) {
            const id = inputheader[i].getAttribute("data-id");
            removeCartItems(id);
            reRender(CartPage, "#root");
          }
        }
        inputheader[i].value = value;
      })
    }
    

    for (let i = 0; i < headerbtn_add2.length; i++) {
      headerbtn_add2[i].addEventListener('click', () => {
        var value = parseInt(inputheader[i].value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        inputheader[i].value = value;
      })
    }

  },
};
export default Header;
