import * as Yup from 'yup';

export function initialValues() {
  return {
    identifier: '',
    password: ''
  };
}

export function validationSchema() {
    return Yup.object({
        identifier: Yup.string().required('Nombre de usuario o correo electronico requerido'),
        password: Yup.string().required('Contraseña requerida'),
    });
}