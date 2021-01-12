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

const cnpjNumberMask = [
  /[1-9]/,
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
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];
const cepNumberMask = [
  /[1-9]/,
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
];

export default function App() {
  return (
    <div className="app">
      <h1>Bem-vindo ao Condomínio </h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          cpf: "",
          cnpj: "",
          phone: "",
          cep: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().min(2).required("Campo obrigatório"),
          email: Yup.string().email().required("Campo obrigatório"),
          cpf: Yup.string().required("Campo obrigatório"),
          cnpj: Yup.string().required("Campo obrigatório"),
          phone: Yup.string().required("Campo obrigatório"),
          cep: Yup.string().required("Campo obrigatório"),
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
              <label htmlFor="name" style={{ display: "block" }}>
                {" "}
                Nome{" "}
              </label>
              <Field
                autoFocus
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

              <label htmlFor="email" style={{ display: "block" }}>
                {" "}
                Email{" "}
              </label>
              <Field
                name="email"
                id="email"
                placeholder="email@example.com"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.user && touched.user
                    ? "text-input error"
                    : "text-input"
                }
              />

              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="cpf" style={{ display: "block" }}>
                {" "}
                Cpf{" "}
              </label>
              <Field
                name="cpf"
                render={({ field }) => (
                  <MaskedInput
                    {...field}
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

              <label htmlFor="cnpj" style={{ display: "block" }}>
                {" "}
                Cnpj{" "}
              </label>
              <Field
                name="cnpj"
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={cnpjNumberMask}
                    id="cnpj"
                    placeholder="Digite seu cnpj"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.cnpj && touched.cnpj
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                )}
              />

              {errors.cnpj && touched.cnpj && (
                <div className="input-feedback">{errors.cnpj}</div>
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

              <label htmlFor="cep" style={{ display: "block" }}>
                {" "}
                Cep{" "}
              </label>
              <Field
                name="cep"
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={cepNumberMask}
                    id="cep"
                    placeholder="Digite seu cep"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.cep && touched.cep
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                )}
              />

              {errors.cep && touched.cep && (
                <div className="input-feedback">{errors.cep}</div>
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
