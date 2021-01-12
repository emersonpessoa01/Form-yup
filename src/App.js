// Helper styles for demo
import "./helper.css";
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";

const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const cpfNumberMask = [
  /[1-9]/,
  /\d/,
  /\d/,
  ".",
  " ",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export default function App() {
  return (
    <div className="app">
      <h1>Bem-vindo ao Condomínio </h1>

      <Formik
        initialValues={{ phone: "", cpf: "", name: "",user:"" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          cpf: Yup.string().required("Campo obrigatório"),
          phone: Yup.string().required("Campo obrigatório"),
          name: Yup.string().required("Campo obrigatório"),
          user: Yup.string().required("Campo obrigatório"),
        })}
      >
        {(props) => {
          const {
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="cpf" style={{ display: "block" }}>
                {" "}
                Cpf{" "}
              </label>
              <Field
                name="cpf"
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    autoFocus
                    mask={cpfNumberMask}
                    id="cpf"
                    placeholder="Digite seu cpf"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.cpf && touched.cpf
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                )}
              />

              {errors.cpf && touched.cpf && (
                <div className="input-feedback">{errors.cpf}</div>
              )}

              <label htmlFor="phone" style={{ display: "block" }}>
                {" "}
                Celular{" "}
              </label>
              <Field
                name="phone"
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={phoneNumberMask}
                    id="phone"
                    placeholder="Digite seu celular"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.phone && touched.phone
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                )}
              />

              {errors.phone && touched.phone && (
                <div className="input-feedback">{errors.phone}</div>
              )}

              <label htmlFor="name" style={{ display: "block" }}>
                {" "}
                Nome{" "}
              </label>
              <Field
                name="name"
                id="name"
                placeholder="Nome completo"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? "text-input error"
                    : "text-input"
                }
              />

              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <label htmlFor="user" style={{ display: "block" }}>
                {" "}
                Email{" "}
              </label>
              <Field
                name="user"
                id="user"
                placeholder="email@example.com"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.user && touched.user
                    ? "text-input error"
                    : "text-input"
                }
              />

              {errors.user && touched.user && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Salvar
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
