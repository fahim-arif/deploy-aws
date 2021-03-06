import React, { useEffect, useState, useMemo, useRef } from "react";

import "./App.css";
import {
  listProduct,
  productId,
  searchProduct,
} from "../../../actions/productAction";
import { listUser, createUser, addUser, searchUser } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { deleteAttributeItems } from "../../../actions/attributeAction";
import { toast } from "react-toastify";
// import Loading from '../../common/Loading'
// import Message from '../../common/Message'
import { removeFromCart } from "../../../actions/cartAction";
import Swal from "sweetalert2";
// import DemoModal from "./modals/DemoModal";
import Helper from "./modals/Helper";


const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

let pid = [];
let prod;
let found;
let attributes;
let result = "";

const OrderCreateComponent = () => {

  const dispatch = useDispatch();

  const userModalRef = useRef();

  const { listproduct } = useSelector((state) => state.product);
  const { listuser, userloading, adduser } = useSelector((state) => state.user);
  const { userList } = useSelector((state) => state.userSearch)
  const { searchList } = useSelector((state) => state.productSearch);
  // const {searchList} = productSearch;
  console.log(userList)

  // const { selectedAttribute } = useSelector((state) => state.product);
  const { attributeList } = useSelector((state) => state.attributeItems);
  const cart = useSelector((state) => state.cart)

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mailing, setMailing] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [click, setClick] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useState("");
  const [productIds, setProductIds] = useState([]);
  const [userId, setUserId] = useState("");
  const [submit, setSubmit] = useState(false);
  const [productId, setProductId] = useState("");
  const [productSearchInput, SetProductSearchInput] = useState("");
  const [showUser, setShowUser] = useState(false);
  const [showUserModal, setShowUserModal] = useState(true);
  const [userSearchInput, setUserSearchInput] = useState('')
  const [numStock, setNumStock] = useState([])
  const [qty, setQty] = useState(0)

  // const elementRef = useRef();

  const imgBaseURL = "/static/";

  // console.log(click);


  var totalCost = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)

  useEffect(() => {
    if (searchList) {

      let tempStock = [];
      for (let i = 0; i < searchList.length; i++) {
        tempStock.push(1)
      }
      console.log(tempStock)

      setNumStock([{ ...tempStock }])
      // Object.assign({}, ['a','b','c']);
      // setNumStock((prevState) => [{...prevState, i:1}])
    }
  }, [searchList])

  useEffect(() => {
    dispatch(listProduct());
    dispatch(listUser());

    if (adduser && adduser.success) {

      Toast.fire({
        type: "success",
        title: "An New user has been created",
      });
      setShowUserModal(false)
      userModalRef.current.click();
      setUsername('')
      setEmail('')
      setPassword('')
      setMobile("")
    };

  }, [adduser]);
  const createUserHandler = async (e) => {
    e.preventDefault();
    const userData = {
      name: username,
      email: email,
      mobile: mobile,
      password: password,
      password2: password,
    };
    // console.log(userData);
    await dispatch(createUser(userData));


  }

  // Product Selection and filtering
  // let subtotal = 0;
  // let discount = 0;
  const addProductHandler = (id, index) => {
    found = pid.find((_id) => _id == id);
    found = productIds.find((_id) => _id == id);
    // for deselecting
    if (found) {
      setProductIds((item) => item.filter((p) => p !== id));
      pid = pid.filter((p) => p !== id);
      prod = listproduct.find((prod) => prod._id == id);

      setSubtotal((prev) => prev - Number(prod.price));
      setDiscount((prev) => prev - Number(prod.discountPrice));
      dispatch(deleteAttributeItems(id));
      console.log('deselected')

      // cart item found
      let cartFound = cart.find((result) => result.id === id)
      if (cartFound) {

        console.log("cartFound")
        dispatch(removeFromCart(cartFound))
      }
      return;

    } else {
      // for selecting
      setProductIds((state) => [...state, id]);
      pid.push(id);
      prod = listproduct.find((prod) => prod._id == id);

      // modal open

      document.getElementById("modal_btn").click();

      // console.log(prod);

      setProductId(id);
      setProduct(prod);
      setSubtotal((prev) => prev + Number(prod.price));
      setDiscount((prev) => prev + Number(prod.discountPrice));
      // dispatch(productId(id));
    }
  };
  // product total price

  // console.log(userId);

  const userSelectHandler = (userId) => {
    let mail = listuser.find((user) => {
      if (user._id == userId) {
        return user.email;
      }
    }).email;

    // console.log(mail);
    setUserId(userId);

    setMailing(mail);
  };

  const submitOrder = async () => {
    if (userId.length > 0 && cart.length > 0) {
      setSubmit(true);
      Toast.fire({
        type: "success",
        title: "An Email has been sent to the user",
      });
      return;
    }
    setSubmit(false);
    Toast.fire({
      type: "error",
      title: "Please select a user or product",
    });

  };

  const searchProductHandler = (e) => {
    e.preventDefault();
    dispatch(searchProduct(productSearchInput));
  };

  const handleUserDropdown = () => {
    setShowUser(true);
  };

  const onUserSearch = (e) => {
    e.preventDefault()
    dispatch(searchUser(userSearchInput))
  }
  return (
    <React.Fragment>
      <Helper
        submit={submit}
        email={mailing}
        id={productId}
        price={subtotal}
        name={product.name}
        photo={product.photoUrl1}
        qty={qty}
      ></Helper>
      <div
        // onClick={() => setShowUser(false)}
        id='save-click'
        className='body container my-4 '
      >
        <div style={{ maxWidth: '1100px' }} className='row row-1'>
          <div className='col d-flex justify-content-between'>
            <h4>Admin Create Order</h4>
            <div onClick={submitOrder} className='create_order_submit_btn'>
              Submit Order
            </div>
          </div>
        </div>

        <div className='row mt-4 dropdown_container'>
          <div className='body-container-1 col-lg-7'>
            <div style={{ paddingBottom: "25px" }} className='products'>
              <div className='pt-4'>
                <h4>Products</h4>

                <form
                  onSubmit={searchProductHandler}
                  className='input-group mb-3 input-field'
                >
                  <span className='input-group-text' id='basic-addon1'>
                    <i className='fas fa-search'></i>
                  </span>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Products'
                    aria-label='Products'
                    aria-describedby='basic-addon1'
                    onChange={(e) => SetProductSearchInput(e.target.value)}
                  />
                  <button
                    className='btn btn-outline-secondary ml-2'
                    type='submit'
                  >
                    Browse
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* After Selecting a customer */}
          {/* <div className='customer_information_container'>
        
          {/* Before selecting a user */}
          <div className='col-lg-5 pt-4 order_user_list_container'>
            <h4>Find or create a customer</h4>
            <form onSubmit={onUserSearch} >
              <div className='input-group user_search_input_container mb-3'>

                <span className='input-group-text' id='basic-addon1'>
                  <i className='fas fa-search'></i>
                </span>
                <input
                  onMouseLeave={() => setShowUser(false)}
                  onClick={handleUserDropdown}
                  onChange={(e) => setUserSearchInput(e.target.value)}
                  type='text'
                  className='form-control'
                  placeholder='Search User'
                  aria-label='Email'
                  aria-describedby='basic-addon1'
                />
              </div>
            </form>
          </div>
        </div>

        <div style={{ marginTop: "0" }} className='row row-2'>
          <div className='col-lg-7'>
            <div className='payment '>
              <table
                className='table table-striped- table-bordered table-hover table-checkable  mb-0'
                id='kt_table_1'
              >
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {searchList &&
                    searchList.map((product, idx) => {
                      return (
                        <tr key={idx}>
                          <td>
                            <img
                              width={50}
                              height={50}
                              src={imgBaseURL + product.photoUrl1}
                              alt={product.photoUrl1}
                            />
                            <span className='pl-3'>{product.name}</span>
                          </td>

                          <td>
                            <div className='order_create_ item_container'>
                              <input
                                onChange={(e) => setQty(e.target.value)}
                                className='order_create_input'
                              />
                            </div>
                          </td>
                          <td>
                            ${product.price}
                          </td>
                          <td>
                            <div className='form-check'>
                              <input
                                onClick={() => addProductHandler(product._id, idx)}
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id='flexCheckDefault'
                              />
                              <label className='form-check-label'>Add</label>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot>
                  <tr className='mt-2 pt-4'>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div
            style={{ height: "0" }}
            className='col-lg-5 pt-4 order_user_list_container'
          >
            {showUser ? (
              <div
                onMouseEnter={() => setShowUser(true)}
                className='order_create_user_dropdown'
              >
                <div className='user_create_container' data-toggle="modal" data-target="#userModal"
                  onClick={() => setShowUserModal(true)}
                >
                  <i className='far fa-plus-square'></i>
                  <span className='user_create_text'>
                    Create a new customer
                  </span>
                </div>
              </div>
            ) : null}

            {/* <h4>User List</h4> */}
            <div className='input-group mb-3'></div>
            <table style={{ background: '#fff' }}
              className='table table-striped- table-bordered table-hover table-checkable'
              id='kt_table_1'
            >
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userList &&
                  userList.map((user, idx) => (
                    <tr key={idx}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <input
                          onClick={() => userSelectHandler(user._id)}
                          type='radio'
                          id='html'
                          name='fav_language'
                          value='HTML'
                        ></input>
                      </td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className='row row-2'>
          <div className='col-lg-7'>
            <div className='payment pt-4'>
              <h4>Payment</h4>
              <table className='payment-table'>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <b>Subtotal</b>
                      </p>
                    </td>
                    <td>
                      {attributeList.length > 0 ? (
                        <p>
                          $
                          {Number(
                            attributeList.reduce(
                              (acc, item) => Number(acc) + Number(item.price),
                              0
                            )
                          )}
                        </p>
                      ) : (
                        <p>${subtotal}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Add discount</p>
                    </td>
                    <td>
                      <p>${discount}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Add shipping</p>
                    </td>
                    <td>
                      <p>$0.0</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Tax</p>
                    </td>
                    <td>
                      <p>$0.0</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <b>total</b>
                      </p>
                    </td>
                    <td>
                      ${cart.length > 0 ? totalCost : 0}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {
            showUserModal &&
            <div className="modal show" id="userModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">

                    <h5 className="modal-title" id="exampleModalLabel">Create New User</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form onSubmit={createUserHandler}>
                    <div className="modal-body">
                      <div className='col-lg-5 w-100 p-0'>
                        <div className='order_list_create_user_container mt-5'>
                          <div className='form_input_flex'>
                            <label>Email</label>
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              type='email'
                            />
                          </div>
                          <div className='form_input_flex'>
                            <label>Password</label>
                            <input
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              type='password'
                            />
                          </div>
                          <div className='form_input_flex'>
                            <label>Username</label>
                            <input
                              onChange={(e) => setUsername(e.target.value)}
                              value={username}
                              type='text'
                            />
                          </div>
                          <div className='form_input_flex'>
                            <label>Mobile</label>
                            <input
                              onChange={(e) => setMobile(e.target.value)}
                              value={mobile}
                              type='text'
                            />
                          </div>

                        </div>
                      </div>

                    </div>
                    <div class="modal-footer">
                      <button type="button" ref={userModalRef} className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" type="submit">Create</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderCreateComponent;
