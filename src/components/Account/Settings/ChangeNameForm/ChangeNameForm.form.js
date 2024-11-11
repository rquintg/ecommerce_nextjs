import * as Yup from 'yup';

export function initialValues(firstname, lastname) {
    return {
        firstname,
        lastname,
    };
}

export function validationSchema() {
    return Yup.object({
        firstname: Yup.string().required('El nombre es obligatorio'),
        lastname: Yup.string().required('Apellidos son obligatorios'),
    });
}