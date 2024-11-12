import {Form} from "semantic-ui-react";
import {Formik, useFormik} from "formik";
import {User} from '@/api';
import {useAuth} from '@/Hooks';
import {initialValues, validationSchema} from './ChangePasswordForm.form';

import styles from './ChangePasswordForm.module.scss';

const passCtrl = new User();

export function ChangePasswordForm() {

    const {user, logout} = useAuth();
    console.log(user);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await passCtrl.updateMe(user.id, {password: formValue.password});
                logout();

            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit} className={styles.form}>
            <label>Cambiar contraseña</label>
            <Form.Input
                type="password"
                name="password"
                placeholder="Nueva contraseña"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />
            <Form.Input
                type="password"
                name="repeatPassword"
                placeholder="Repetir contraseña"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                error={formik.errors.repeatPassword}
            />
            <Form.Button type="submit" loading={formik.isSubmitting}>
                Enviar
            </Form.Button>
        </Form>
    )
}