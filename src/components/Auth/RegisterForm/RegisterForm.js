import {Form, FormGroup} from 'semantic-ui-react'

export function RegisterForm() {
    return (
        <Form>
            <FormGroup widths="equal">
                <Form.Input type="text" placeholder='Correo' />
                <Form.Input type="text" placeholder='Nombre de usuario' />
            </FormGroup>
            <FormGroup widths="equal">
                <Form.Input type="text" placeholder='Nombre y apellido' />
                <Form.Input type="password" placeholder='Contraseña' />
            </FormGroup>

            <Form.Button fluid type="submit">Registrarse</Form.Button>
        </Form>
    );
}