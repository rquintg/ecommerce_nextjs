import * as Yup from 'yup';

export function initialValues() {
    return {
        password: '',
        repeatPassword: '',
    };
}

export function validationSchema() {
    return Yup.object({
        password: Yup.string().required('Contraseña es obligatoria'),
        repeatPassword: Yup.string().required('Contraseña es obligatoria')
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    });
}