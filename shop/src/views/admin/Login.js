import './css/Login.css'
import React from "react";
import {InputText} from "primereact/inputtext";
class Login extends React.Component{
    render() {
        return (
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-dark" style={{borderRadius: "1rem"}}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4">

                                        <h2 className="fw-bold mb-2 text-uppercase text-white">Quản trị viên</h2>
                                        <div className={"formInput"}>
                                            <span className="p-float-label">
                                                <InputText id="username" style={{width : "100%"}}
                                                           // value={this.state.value2}
                                                           // onChange={(e) => this.setState({value2: e.target.value})}
                                                />
                                                <label htmlFor="username">Tài khoản</label>
                                            </span>

                                            <span className="p-float-label">
                                                <InputText id="password" style={{width : "100%"}}
                                                    // value={this.state.value2}
                                                    // onChange={(e) => this.setState({value2: e.target.value})}
                                                />
                                                <label htmlFor="password">Mật khẩu</label>
                                            </span>
                                        </div>


                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Đăng nhập
                                        </button>


                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Login;