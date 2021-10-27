import OrderApi from "../../apis/orderApi";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Pay = {
    async render({id}) {
        const newOrder = {
          status: 2
        }
        const payload = await OrderApi.updateStatus(id, newOrder);
        console.log(payload)
        if(payload.status === 200){
          Toastify({
            text: payload.data.message,
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
        }
        return (
            `${await Header.render()}
            <div class="backgroud-image">
                    
            <div class="backgroud-ovelay"></div>
            </div>
                <div class="my-5 container">
                <style>
                body {
            background: #f2f4f7;
            color: #28333b;
            font-family: 'DM Sans', sans-serif;
            font-size: 1em;
            
          }
          body a {
            color: #28333b;
            text-decoration: none;
            border-bottom: 2px solid rgba(64,179,255,0.5);
            opacity: 0.75;
            transition: all 0.5s ease;
          }
          body a:hover {
            border-bottom: 2px solid #40b3ff;
            opacity: 1;
          }
          .field {
            margin-bottom: 25px;
          }
          .field.full {
            width: 100%;
          }
          .field.half {
            width: calc(50% - 12px);
          }
          .field label {
            display: block;
            text-transform: uppercase;
            font-size: 12px;
            margin-bottom: 8px;
          }
          .field input {
            padding: 12px;
            border-radius: 6px;
            border: 2px solid #e8ebed;
            display: block;
            font-size: 14px;
            width: 100%;
            box-sizing: border-box;
          }
          .field input:placeholder {
            color: #e8ebed !important;
          }
          .flex {
            display: flex;
            flex-direction: row wrap;
            align-items: center;
          }
          .flex.justify-space-between {
            justify-content: space-between;
          }
          .card {
            padding: 50px;
            margin: 50px auto;
            max-width: 850px;
            background: #fff;
            border-radius: 6px;
            box-sizing: border-box;
            box-shadow: 0px 24px 60px -1px rgba(37,44,54,0.14);
          }
          .card .container {
            
            margin: 0 auto;
          }
          .card .card-title {
            margin-bottom: 50px;
          }
          .card .card-title h2 {
            margin: 0;
          }
          .card .card-body .payment-type,
          .card .card-body .payment-info {
            margin-bottom: 25px;
          }
          .card .card-body .payment-type h4 {
            margin: 0;
          }
          .card .card-body .payment-type .types {
            margin: 25px 0;
          }
          .card .card-body .payment-type .types .type {
            width: 30%;
            position: relative;
            background: #f2f4f7;
            border: 2px solid #e8ebed;
            padding: 25px;
            box-sizing: border-box;
            border-radius: 6px;
            cursor: pointer;
            text-align: center;
            transition: all 0.5s ease;
          }
          .card .card-body .payment-type .types .type:hover {
            border-color: #28333b;
          }
          .card .card-body .payment-type .types .type:hover .logo,
          .card .card-body .payment-type .types .type:hover p {
            color: #28333b;
          }
          .card .card-body .payment-type .types .type.selected {
            border-color: #40b3ff;
            background: rgba(64,179,255,0.1);
          }
          .card .card-body .payment-type .types .type.selected .logo {
            color: #40b3ff;
          }
          .card .card-body .payment-type .types .type.selected p {
            color: #28333b;
          }
          .card .card-body .payment-type .types .type.selected::after {
            content: '\f00c';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            position: absolute;
            height: 40px;
            width: 40px;
            top: -21px;
            right: -21px;
            background: #fff;
            border: 2px solid #40b3ff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .card .card-body .payment-type .types .type .logo,
          .card .card-body .payment-type .types .type p {
            transition: all 0.5s ease;
          }
          .card .card-body .payment-type .types .type .logo {
            font-size: 48px;
            color: #8a959c;
          }
          .card .card-body .payment-type .types .type p {
            margin-bottom: 0;
            font-size: 10px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.5px;
            color: #8a959c;
          }
          .card .card-body .payment-info .column {
            width: calc(50% - 25px);
          }
          .card .card-body .payment-info .title {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .card .card-body .payment-info .title .num {
            height: 24px;
            width: 24px;
            border-radius: 50%;
            border: 2px solid #40b3ff;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-right: 12px;
            font-size: 12px;
          }
          footer {
            margin: 50px auto;
            max-width: 850px;
            text-align: center;
          }
          .button {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 12px;
            letter-spacing: 0.5px;
            padding: 15px 25px;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.5s ease;
            background: transparent;
            border: 2px solid transparent;
          }
          .button.button-link {
            padding: 0 0 2px;
            margin: 0 25px;
            border-bottom: 2px solid rgba(64,179,255,0.5);
            border-radius: 0;
            opacity: 0.75;
          }
          .button.button-link:hover {
            border-bottom: 2px solid #40b3ff;
            opacity: 1;
          }
          .button.button-primary {
            background: #40b3ff;
            color: #fff;
          }
          .button.button-primary:hover {
            background: #218fd9;
          }
          .button.button-secondary {
            background: transparent;
            border-color: #e8ebed;
            color: #8a959c;
          }
          .button.button-secondary:hover {
            border-color: #28333b;
            color: #28333b;
          }
          
              </style>
            </head>
            <body>
              
              <article class="card">
                <div class="container">
                  <div class="card-title">
                    <h2>Payment</h2>
                  </div>
                  <div class="card-body">
                    <div class="payment-type">
                      <h4>Choose payment method below</h4>
                      <div class="types flex justify-space-between">
                        <div class="type selected">
                          <div class="logo">
                            <i class="far fa-credit-card"></i>
                          </div>
                          <div class="text">
                            <p>Pay with Credit Card</p>
                          </div>
                        </div>
                        <div class="type">
                          <div class="logo">
                            <i class="fab fa-paypal"></i>
                          </div>
                          <div class="text">
                            <p>Pay with PayPal</p>
                          </div>
                        </div>
                        <div class="type">
                          <div class="logo">
                            <i class="fab fa-amazon"></i>
                          </div>
                          <div class="text">
                            <p>Pay with Amazon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="payment-info flex justify-space-between">
                      <div class="column billing">
                        <div class="title">
                          <div class="num">1</div>
                          <h4>Billing Info</h4>
                        </div>
                        <div class="field full">
                          <label for="name">Full Name</label>
                          <input id="name" type="text" value="${payload.data.order.username}" placeholder="Full Name">
                        </div>
                        <div class="field full">
                          <label for="address">Email Address</label>
                          <input id="address" type="text" value="${payload.data.order.email}" placeholder="Billing Address">
                        </div>
                        <div class="flex justify-space-between">
                          <div class="field half">
                            <label for="city">City</label>
                            <input id="city" type="text" placeholder="City">
                          </div>
                          <div class="field half">
                            <label for="state">State</label>
                            <input id="state" type="text" placeholder="State">
                          </div>
                        </div>
                        <div class="field full">
                          <label for="zip">Zip</label>
                          <input id="zip" type="text" placeholder="Zip">
                        </div>
                      </div>
                      <div class="column shipping">
                        <div class="title">
                          <div class="num">2</div>
                          <h4>Credit Card Info</h4>
                        </div>
                        <div class="field full">
                          <label for="name">Cardholder Name</label>
                          <input id="name" type="text" placeholder="Full Name"  value="${payload.data.order.username}">
                        </div>
                        <div class="field full">
                          <label for="address">Card Number</label>
                          <input id="address" type="text" placeholder="1234-5678-9012-3456">
                        </div>
                        <div class="flex justify-space-between">
                          <div class="field half">
                            <label for="city">Exp. Month</label>
                            <input id="city" type="text" placeholder="12">
                          </div>
                          <div class="field half">
                            <label for="state">Exp. Year</label>
                            <input id="state" type="text" placeholder="19">
                          </div>
                        </div>
                        <div class="field full">
                          <label for="zip">CVC Number</label>
                          <input id="zip" type="text" placeholder="468">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-actions flex justify-space-between">
                    <div class="flex-start">
                      <button class="button button-secondary">Return to Store</button>
                    </div>
                    <div class="flex-end">
                      <button class="button button-link">Back to Shipping</button>
                      <button class="button button-primary">Proceed</button>
                    </div>
                  </div>
                </div>
              </article>
              <footer>
                Design based on example found <a href="https://uxdesign.cc/understanding-user-psychology-to-improve-your-product-design-f4e5f930b89e" target="_blank">here</a>
              </footer>
              <script>
              
          
              </script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/js/bootstrap.bundle.min.js"></script>
          
            </body>
                   
                </div>
                
               
            `
        )
    },
    afterRender() {
        Header.afterRender();

    }
}

export default Pay;