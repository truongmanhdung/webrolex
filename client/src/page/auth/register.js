import UserApi from "../../apis/userApi";

const Register = {
  render() {
    return `<div class="container">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="menu"></div>
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form class="user" id="form-register">
                                        <div class="form-group">
                                            <div class=" mb-3 mb-sm-0">
                                                <input type="text" class="form-control form-control-user" id="username"
                                                    placeholder="User Name">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user" id="email"
                                                placeholder="Email Address">
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" class="form-control form-control-user"
                                                    id="password" placeholder="Password">
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control form-control-user"
                                                    id="repeat-password" placeholder="Repeat Password">
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">
                                            Register Account
                                        </button>
                                        <hr>
                                        <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Register with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                        </a>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="login.html">Already have an account? Login!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>`;
  },

  afterRender(){
    const btn_register = document.querySelector("#form-register");
    btn_register.addEventListener("submit", async (e)=> {
        e.preventDefault();
        const password = document.querySelector('#password').value
        const repeat_password = document.querySelector('#repeat-password').value
        if(repeat_password === password) {
            const user = {
                username: document.querySelector('#username').value,
                email: document.querySelector('#email').value,
                password: password,
            }
            const result = await UserApi.register(user);
            if(result.status === 200) {
                localStorage.setItem('username', result.data.username);
                Toastify({
                    text: result.data.message,
                    className: "info",
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
                reRender(HomePage, '#root')
                window.location.hash = '/'
            }else{
                Toastify({
                    text: 'register not success',
                    className: "danger",
                    style: {
                        background: "linear-gradient(to right, #ff0011, #bb321f)",
                    }
                }).showToast();
                reRender(Register, '#root')
                window.location.hash = '/register'
            };
        }else{
            Toastify({
                text: 'password and repeat password do not match',
                className: "danger",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        }
        

    })
  }
};

export default Register;
