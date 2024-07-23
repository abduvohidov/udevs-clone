import styles from './steps.module.scss'
import { Flex } from '@/shared/ui/grid/flex'
import { Title } from '@/shared/ui/title/index'
import { Container } from '@/shared/ui/grid/container'
import { CardSteps } from '@/enitites/card-steps/index'
import { STEPS_CONTENT } from '@/shared/lib/contents/steps-content'
import { stepsLineIcon } from '@/shared/assets/icons/steps-icons'

export const Steps = () => {

  const content = STEPS_CONTENT.map(({image, title, subtitle })=>{
    return <CardSteps image={image} title={title} subtitle={subtitle}/>
  })

  return (
<section id="steps" className={styles.stepsWrapper}>
<Container>
<Title children='Как мы работаем!'/>
<Flex justify='between' className={styles.stepsFlex} >
<img src={stepsLineIcon} alt="Line" className={styles.stepsLine}/>
{content}
</Flex>
</Container>
</section>
  )
}
