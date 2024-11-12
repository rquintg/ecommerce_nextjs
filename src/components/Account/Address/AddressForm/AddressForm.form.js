import * as yup from 'yup';

export function initialValues(address) {
    return {
        title: address?.title || "",
        name: address?.name || "",
        address: address?.address || "",
        city: address?.city || "",
        state: address?.state || "",
        postal_code: address?.postal_code || "",
        phone: address?.phone || "",
    };
}

export function validationSchema() {
    return yup.object().shape({
        title: yup.string().required("El título es requerido"),
        name: yup.string().required("El nombre es requerido"),
        address: yup.string().required("La dirección es requerida"),
        city: yup.string().required("La ciudad es requerida"),
        state: yup.string().required("El estado es requerido"),
        postal_code: yup.string().required("El código postal es requerido"),
        phone: yup.string().required("El teléfono es requerido"),
    });
}