import UserApi from "../../apis/userApi"
import { reRender } from "../../utils/rerender"
import HomePageAdmin from "../Admin/pageAdmin/homePageAdmin"
import HomePage from "../HomePage"

const Login = {
    render() {
        return (
            `<div class="container">
            <div class="menu"></div>
            <!-- Outer Row -->
            <div class="row justify-content-center">
    
                <div class="col-xl-10 col-lg-12 col-md-9">
    
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <!-- Nested Row within Card Body -->
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form class="user" id="login-form">
                                            <div class="form-group">
                                                <input type="fullname" class="form-control form-control-user"
                                                    id="username" aria-describedby="emailHelp"
                                                    required
                                                    placeholder="Enter User Name...">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user" required
                                                    id="password" placeholder="Password">
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck">
                                                    <label class="custom-control-label" for="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
                                            <hr>
                                            <a href="index.html" class="btn btn-google btn-user btn-block">
                                                <i class="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                                <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr>
                                        <div class="text-center">
                                            <a class="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div class="text-center">
                                            <a class="small" href="register.html">Create an Account!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
            </div>
    
        </div>`
        )
    },
    afterRender(){
        document.querySelector('#login-form').addEventListener("submit", async (e) => {
            e.preventDefault()
            const user = {
                username: document.querySelector('#username').value,
                password: document.querySelector('#password').value
            }
            UserApi.login(user).then((res) => {
                if(res.status === 200){
                    localStorage.setItem('token', res.data.token);
                    
                    if(res.data.admin === true){
                        localStorage.setItem('username', 'admin');
                        Toastify({
                            text: res.data.message,
                            className: "info",
                            style: {
                              background: "linear-gradient(to right, #00b09b, #96c93d)",
                            }
                          }).showToast();
                        reRender(HomePageAdmin, '#root')
                        window.location.hash = '/admin'
                    }else{
                        localStorage.setItem('username', res.data.username);
                        Toastify({
                            text: res.data.message,
                            className: "info",
                            style: {
                              background: "linear-gradient(to right, #00b09b, #96c93d)",
                            }
                        }).showToast();
                        reRender(HomePage, '#root')
                        window.location.hash = '/'
                    }
                }
            }).catch(error => {
                Toastify({
                    text: 'login not success',
                    className: "danger",
                    style: {
                        background: "linear-gradient(to right, #ff0011, #bb321f)",
                    }
                }).showToast();
                reRender(Login, '#root')
                window.location.hash = '/login'
            });
            
        })
    }
}

export default Login