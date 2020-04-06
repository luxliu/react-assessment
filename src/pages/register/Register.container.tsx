import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as selectors from "src/redux/selectors";
import RegisterComponent from "./Register.component";
import { getUser } from "src/redux/modules/user/user.duck";
import { submitRegister } from "./register.duck";

/*****************
 *   COMPONENT   *
 *****************/

const Register = (props: any) => {
  useEffect(() => {
    props.actions.getUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RegisterComponent {...props} />;
};

/*************
 *   REDUX   *
 *************/

const mapStateToProps = (state: any) => ({
  firstName: selectors.firstNameSelector(state),
  submitCount: selectors.submitCountSelector(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(
    {
      getUser,
      submitRegister
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
