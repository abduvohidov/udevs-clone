import { SliderOurClients } from '@/features/slider-our-clients/index'
import { OUR_CLIENTS_BOTTOM_CONTENT, OUR_CLIENTS_TOP_CONTENT } from '@/shared/lib/contents/our-clients-content'
import { Container } from '@/shared/ui/grid/container'
import { Title } from '@/shared/ui/title/index'
import style from './our-clients.module.scss'

export const OurClients = () => {
  return (
    <section>
        <Container>
        <Title>
            Наши клиенты
        </Title>
        </Container>
        <SliderOurClients data={OUR_CLIENTS_TOP_CONTENT} direction="left"/>
        <SliderOurClients data={OUR_CLIENTS_BOTTOM_CONTENT} direction="right" />
    </section>
  )
}
