import Link from 'next/link';
import {Container, Image, Button} from "semantic-ui-react";



import styles from './Footer.module.scss';


export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
          <div className={styles.columns}>
              <div>
                  <Link href={'/'}>
                      <Image src={'images/logo.png'} alt="Gaming" />
                  </Link>
              </div>

                <div>
                    <ul>
                        <Link href={'/'}>Terminos y condiciones</Link>
                        <Link href={'/'}>Politica de privacidad</Link>
                        <Link href={'/'}>Contacto</Link>
                        <Link href={'/'}>FAQs</Link>
                    </ul>

                </div>

                <div className={styles.social}>
                    <Button as={'a'} href={'https://www.facebook.com/'} circular color="facebook" target={'_blank'} icon={'facebook'} />
                    <Button as={'a'} href={'https://www.x.com/'} circular color="black" target={'_blank'} icon={'x'} />
                    <Button as={'a'} href={'https://www.instagram.com/'} circular color="instagram" target={'_blank'} icon={'instagram'} />
                    <Button as={'a'} href={'https://www.youtube.com/'} circular color="youtube" target={'_blank'} icon={'youtube'} />
                </div>
          </div>
          <div className={styles.copyright}>
              <span>© 2024 Gaming. Todos los derechos reservados.</span>

          </div>
      </Container>
    </div>
  )
}