import {Form} from "semantic-ui-react";
import {useFormik} from "formik";
import {initialValues, validationSchema} from './ChangeEmailForm.form';
import {useAuth} from '@/Hooks';
import {User} from '@/api';

import styles from './ChangeEmailForm.module.scss';

const mailCtrl = new User();

export function ChangeEmailForm() {

    const {user, updateUser} = useAuth();

    const formik = useFormik({
        initialValues : initialValues(user.email),
        validationSchema : validationSchema(),
        validateOnChange : false,
        onSubmit: async  (formValue) => {
            try {
                await mailCtrl.updateMe(user.id, {email: formValue.email});
                updateUser("email", formValue.email);
                formik.handleReset();
            } catch (error){
                console.error(error)
            }
        }
    });

    return (
        <Form className={styles.form} onSubmit={formik.handleSubmit}>
            <label>Cambiar correo electronico</label>

            <Form.Input name='email'
                        placeholder='Nuevo Correo Electronico'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.errors.email}/>
            <Form.Input name='repeatEmail'
                        placeholder='Repetir Correo Electronico'
                        onChange={formik.handleChange}
                        value={formik.values.repeatEmail}
                        error={formik.errors.repeatEmail}/>

            <Form.Button type='submit' loading={formik.isSubmitting} className={styles.btnSubmit}>Enviar</Form.Button>
        </Form>
    )
}