import {Form, FormGroup} from 'semantic-ui-react'
import {useFormik} from 'formik'
import {useRouter} from 'next/router'
import {Auth} from '@/api';
import {initValues, validationSchema} from './RegisterForm.form'

const authCtrl = new Auth();

export function RegisterForm() {

    const router = useRouter();

    const formik = useFormik({
        initialValues: initValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (values) => {
            try {
                await authCtrl.register(values);
                router.push('/join/sign-in');
                console.log(values);
            } catch (error) {
                console.log(error);
            }
        }
    });


    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormGroup widths="equal">
                <Form.Input name="email"
                            type="text"
                            placeholder='Correo'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.errors.email} />

                <Form.Input name="username"
                            type="text"
                            placeholder='Nombre de usuario'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            error={formik.errors.username} />

            </FormGroup>

            <FormGroup widths="equal">
                <Form.Input name="fullname"
                            type="text"
                            placeholder='Nombre y apellido'
                            value={formik.values.fullname}
                            onChange={formik.handleChange}
                            error={formik.errors.fullname}/>

                <Form.Input name="password"
                            type="password"
                            placeholder='Contraseña'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.errors.password}/>

            </FormGroup>

            <Form.Button fluid loading={formik.isSubmitting} type="submit">Registrarse</Form.Button>
        </Form>
    );
}