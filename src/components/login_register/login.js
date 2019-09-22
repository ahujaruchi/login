import React from "react";
import "./login.css";

let LoginComponent = props => {
  return (
    <section id="login" className="padding">
      <div className="container">
        <h3 className="hidden">hidden</h3>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="profile-login">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#home"
                    aria-controls="home"
                    role="tab"
                    data-toggle="tab"
                  >
                    LOGIN
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#profile"
                    aria-controls="profile"
                    role="tab"
                    data-toggle="tab"
                  >
                    REGISTER
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content padding_half">
                <div
                  role="tabpanel"
                  className="tab-pane fade in active"
                  id="home"
                >
                  <div className="agent-p-form">
                    <form
                      action="#"
                      className="callus clearfix"
                      onSubmit={() => {
                        props.submit("username", "password");
                      }}
                    >
                      <div className="single-query form-group col-sm-12">
                        <input
                          type="text"
                          className="keyword-input username"
                          placeholder="username"
                          required
                        />
                      </div>
                      <div className="single-query form-group  col-sm-12">
                        <input
                          type="password"
                          className="keyword-input password"
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="col-sm-6">
                            <div className="search-form-group white form-group text-left">
                              <div className="check-box-2">
                                <i>
                                  <input type="checkbox" name="check-box" />
                                </i>
                              </div>
                              <span>Remember Me</span>
                            </div>
                          </div>
                          <div className="col-sm-6 text-right">
                            <a href="/" className="lost-pass">
                              Lost your password?
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className=" col-sm-12">
                        <input
                          type="submit"
                          defaultValue="submit now"
                          className="btn-slide border_radius"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="profile">
                  <div className="agent-p-form">
                    <form className="callus clearfix">
                      <div className="single-query col-sm-12 form-group">
                        <input
                          type="text"
                          className="keyword-input"
                          placeholder="username"
                          required
                        />
                      </div>
                      <div className="single-query col-sm-12 form-group">
                        <input
                          type="email"
                          className="keyword-input"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="single-query col-sm-12 form-group">
                        <input
                          type="password"
                          className="keyword-input"
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="single-query col-sm-12 form-group">
                        <input
                          type="password"
                          className="keyword-input"
                          placeholder="Confirm  Password"
                          required
                        />
                      </div>
                      <div className="search-form-group white col-sm-12 form-group text-left">
                        <div className="check-box-2">
                          <i>
                            <input type="checkbox" name="check-box" />
                          </i>
                        </div>
                        <span>Receive Newsletter</span>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                        <div className="query-submit-button">
                          <input
                            type="submit"
                            defaultValue="Creat an Account"
                            className="btn-slide"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
