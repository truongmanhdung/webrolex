const Footer = {
    render() {
        return (
            `
            <div class="footer mt-4">
            <div class="footer-top">
            <div class="footer-img">
              <img
                src="https://content.rolex.com/dam/new-watches-2021/family-pages/explorer/family-page-explorer-beauty_explorer-ii_2bis_a2_v2f.jpg?imwidth=1920"
                alt=""
              />
            </div>
            <div class="footer-overlay"></div>
            <div class="footer-content">
              <h5 class="footer-heading text-white text-uppercase">
                Đồng hồ mới 2021
              </h5>
              <a href=""><p class="footer-content-p text-white">Tìm hiểu thêm</p></a>
            </div>
          </div>
          <div class="footer-share">
            <h5 class="my-5 text-center text-gray-900 text-uppercase">
              Chia sẻ trang này
            </h5>
            <ul class="footer-share-list p-0">
              <li class="footer-share-item"><a href=""><i class="fab fa-twitter"></i></a></li>
              <li class="footer-share-item"><a href=""><i class="fab fa-facebook-f"></i></a></li>
              <li class="footer-share-item"><a href=""><i class="fab fa-pinterest-p"></i></a></li>
              <li class="footer-share-item"><a href=""><i class="fab fa-linkedin-in"></i></a></li>
              <li class="footer-share-item"><a href=""><i class="far fa-envelope"></i></a></li>
              <li class="footer-share-item"><a href=""><i class="fab fa-weibo"></i></a></li>
            </ul>
          </div>
          
            </div>
            <div class="container-fluid" style="background-color:#f8f7f4">
          <div class="container">
              <footer class="d-flex justify-content-between py-5 footer">
                  <div>
                      <div>
                          <p class="fw-bold">NHẬN THÔNG TIN MỚI NHẤT TỪ CURNON</p>
                          <form>
                              <div class="d-flex">
                                  <div class="me-2">
                                      <select id="gender" name="gender">
                                          <option disabled="" value="" selected="">Giới tính</option>
                                          <option value="Male">Nam</option>
                                          <option value="Female">Nữ</option>
                                      </select>
                                  </div>
                                  <div>
                                      <input class="name-input" placeholder="Họ tên..." name="name" type="text">
                                  </div>
                              </div>
                              <div class="my-3">
                                  <input class="email-input" type="email" placeholder="Email..." name="email">
                              </div>
                              <button type="submit" class="sign-up text-white fw-bold" disabled>
                                  <span>ĐĂNG KÝ NGAY</span>
                              </button>
                          </form>
                      </div>
                  </div>
                  <div>
                      <p class="fw-bold">LIÊN LẠC</p>
                      <div>
                          <p>dungtmph12934@fpt.edu.vn</p>
                          <p>0365727226</p>
                          <div class="d-flex">
                              <a href="#"><img class="me-3 mb-3" src="https://curnonwatch.com/_next/static/image/components/footer/assets/icon_fb.2a84c3f988fa77f0dc76bbdcf9ff05c6.svg" alt=""></a>
                              <a href="#"><img class="me-3 mb-3" src="https://curnonwatch.com/_next/static/image/components/footer/assets/icon_insta.ff542f26952d0e0f560a528bd802d78b.svg" alt=""></a>
                              <a href="#"><img class="me-3 mb-3" src="https://curnonwatch.com/_next/static/image/components/footer/assets/icon_youtube.ef8c1337942994daa4b5638ec33311ae.svg" alt=""></a>
                          </div>
                          <div class="d-flex">
                              <div><img class="footer-image-pay mt-3 me-2" src="https://curnonwatch.com/_next/static/image/components/footer/assets/cod.a04c67da9d3edece51e24c08592d20ec.png" alt="cod"></div>
                              <div><img class="footer-image-pay mt-3 me-2" src="https://curnonwatch.com/_next/static/image/components/footer/assets/fundiin.0788fcd82b33f7ae4d33f7ee38841806.png" alt="fundiin"></div>
                              <div><img class="footer-image-pay mt-3 me-2" src="https://curnonwatch.com/_next/static/image/components/footer/assets/momo.e7977f80729f86e583f88468e7a823d4.png" alt="momo"></div>
                              <div><img class="footer-image-pay mt-3 me-2" src="https://curnonwatch.com/_next/static/image/components/footer/assets/vnpay.2cbf7ebaf4988a49059e72c54e22b62e.png" alt="vnpay"></div>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div>
                          <div>
                              <span><p class="fw-bold">HANOI STORES</p></span>
                              <div>
                                  <div>
                                      <p>33 Hàm Long, Hoàn Kiếm.</p>
                                      <p>9 B7 Phạm Ngọc Thạch, Đống Đa.</p>
                                      <p>173C Kim Mã, Ba Đình.</p>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <span><p class="fw-bold">TP.HCM STORES</p></span>
                              <div>
                                  <div>
                                      <p>25 Nguyễn Trãi, P.Bến Thành, Quận 1.</p>
                                      <p>348 Lê Văn Sỹ, Phường 14, Quận 3.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </footer>
          </div>
          <div class="container-fluid m-0 p-0" style="background-color:#ecebea">
              <div class="footer d-flex justify-content-between container py-4">
                  <div class="d-flex align-items-center">
                      <div class="me-5">
                          <a href="#">ĐỒNG HỒ NAM</a>
                      </div>
                      <div class="me-5">
                          <a href="#">ĐỒNG HỒ NỮ</a>
                      </div>
                      <div>
                          <a href="#">PHỤ KIỆN</a>
                      </div>
                  </div>
                  <div class="d-flex align-items-center">
                      <div class="pe-3 border-end border-dark">
                          <a href="#" class="d-block">Chính sách vận chuyển</a>
                      </div>
                      <div class="ms-3">
                          <a href="#">Đổi trả & bảo hành</a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footer d-flex justify-content-between align-items-center py-3 container" style="font-size:15px ">
              <div>
                  <p class="fw-bold py-2">
                      © 2021 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT
                  </p>
                  <p class="" style="width:550px;">
                      Giấy chứng nhận ĐKKD số 0108150321 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 29/01/2018 123C Thụy Khuê, Tây Hồ, Hà Nội
                  </p>
              </div>
              <div>
                  <img src="https://curnonwatch.com/_next/static/image/components/footer/assets/certificate.1b63a013a1590b88bc486a876c804d58.png" alt="" srcset="">
              </div>
          </div>
      </div>
            `
        )
    }
}

export default Footer;