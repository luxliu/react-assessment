import React from "react";
import { Row, Col, Button } from "antd";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import * as Styled from "./register.styled";

type Props = {
  firstName: string;
  submitCount: number;
  actions: {
    submitRegister: (payload: any) => void;
  };
};

const SignupSchema = Yup.object().shape({
  cardNumber: Yup.number()
    .typeError("input a integer")
    .integer("input a integer")
    .required("Required"),
  CVC: Yup.number()
    .typeError("input a integer")
    .integer("input a integer")
    .required("Required"),
  expiryDate: Yup.date()
    .typeError("input a date")
    .min(new Date(), "date must be later than today!")
    .required("Required")
});

export default ({ firstName, actions }: Props) => {
  const { submitRegister } = actions;

  return (
    <>
      <Styled.ItemWrapper>
        <h3>Welcome, {firstName}</h3>
      </Styled.ItemWrapper>
      <Formik
        initialValues={{
          cardNumber: "",
          CVC: "",
          expiryDate: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          submitRegister(values);
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <Styled.ItemWrapper>
              <Field
                name="cardNumber"
                placeholder="Credit card number"
                className="ant-input"
              />
              {errors.cardNumber && touched.cardNumber ? (
                <Styled.ErrorMessage>{errors.cardNumber}</Styled.ErrorMessage>
              ) : null}
            </Styled.ItemWrapper>
            <Row gutter={16}>
              <Col sm={{ span: 12 }} xs={{ span: 0 }}></Col>
              <Col sm={{ span: 6 }} xs={{ span: 24 }}>
                <Styled.ItemWrapper>
                  <Field name="CVC" placeholder="CVC" className="ant-input" />
                  {errors.CVC && touched.CVC ? (
                    <Styled.ErrorMessage>{errors.CVC}</Styled.ErrorMessage>
                  ) : null}
                </Styled.ItemWrapper>
              </Col>
              <Col sm={{ span: 6 }} xs={{ span: 24 }}>
                <Styled.ItemWrapper>
                  <Field
                    name="expiryDate"
                    placeholder="expiry"
                    className="ant-input"
                  />
                  {errors.expiryDate && touched.expiryDate ? (
                    <Styled.ErrorMessage>
                      {errors.expiryDate}
                    </Styled.ErrorMessage>
                  ) : null}
                </Styled.ItemWrapper>
              </Col>
            </Row>

            <Styled.ItemWrapper>
              <Button
                type="primary"
                htmlType="submit"
                disabled={!isValid}
                block
              >
                Submit
              </Button>
            </Styled.ItemWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};
