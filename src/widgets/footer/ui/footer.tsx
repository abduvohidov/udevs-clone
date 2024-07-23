import { FooterList } from '@/enitites/footer-list/index'
import { FOOTER_ABOUT_CONTENT, FOOTER_PORTFOLIO_CONTENT, FOOTER_SERVICES_CONTENT } from '@/shared/lib/contents/footer-contents'
import { Container } from '@/shared/ui/grid/container'
import { Flex } from '@/shared/ui/grid/flex'
import { Logo } from '@/shared/ui/logo/logo'
import { SocailMediaList } from '@/shared/ui/social-media-list/index'
import style from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={style.footer}>
        <Container>
        <div className={style.footerLogo}>
        <Logo/>
        </div>

            <Flex align='center' justify='between' className={style.footerTop}>

            <FooterList data={FOOTER_ABOUT_CONTENT}/>
            <FooterList data={FOOTER_SERVICES_CONTENT}/>
            <FooterList data={FOOTER_PORTFOLIO_CONTENT}/>

            </Flex>

            <Flex align='center' justify='between' className={style.footerBottom}>

            <p className={style.footerTitle}>© 2024 Udevs. All rights reserved</p>
            <SocailMediaList/>

            </Flex>

        </Container>
    </footer>
  )
}
