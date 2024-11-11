import * as Yup from 'yup';

export function initialValues(email) {
    return {
        email: email || '',
        repeatEmail: '',
    };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email('Email no válido').required('Email es obligatorio'),
        repeatEmail: Yup.string().email('Email no válido').required('Email es obligatorio')
            .oneOf([Yup.ref('email'), null], 'Los correos no coinciden')
    });
}