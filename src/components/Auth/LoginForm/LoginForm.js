import {Form} from 'semantic-ui-react';
import {useFormik} from 'formik';
import {Auth} from '@/api'
import {initialValues, validationSchema} from './LoginForm.form'
import {useRouter} from 'next/router';

const authCtrl = new Auth();

export function LoginForm() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formData) => {
            try {
                const response = await authCtrl.login(formData);
                await router.push('/');
                console.log(response);
            } catch (error) {
                console.error(error); 
            }
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input name="identifier"
                        type="text"
                        placeholder=" Correo electronico o nombre de usuario"
                        value={formik.values.identifier}
                        onChange={formik.handleChange}
                        error={formik.errors.identifier}
            />
            <Form.Input name="password"
                        type="password"
                        placeholder="Contraseña"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.errors.password}
            />

            <Form.Button type="submit" fluid loading={formik.isSubmitting} >
                Entrar
            </Form.Button>
        </Form>
    )
}