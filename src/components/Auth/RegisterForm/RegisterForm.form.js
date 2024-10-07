import * as Yup from 'yup';

export function initValues() {
    return {
        email: '',
        username: '',
        fullname: '',
        password: '',
    };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email('Correo electronico invalido').required('Required'),
        username: Yup.string().required('Requerido'),
        fullname: Yup.string().required('Requerido'),
        password: Yup.string().required('Requerido'),
    });
}