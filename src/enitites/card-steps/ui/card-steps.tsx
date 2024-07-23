import { FC } from 'react'
import style from './card-steps.module.scss'
import { Col } from '@/shared/ui/grid/col'
import Image from '../../../../node_modules/next/image'
import { IStepsContent } from '@/shared/lib/contents/steps-content'

export const CardSteps : FC<IStepsContent> = ({image, title, subtitle}) => {
  return (
    <div className={style.cardStepsWrapper}>
    <Image src={image} alt={title} width={80} height={80} />
    <div>

    <h3 className={style.stepsCardTitle}>
        {title}
    </h3>
    <p className={style.stepsCardSubTitle}>
        {subtitle}
    </p>
    </div>
    </div>
  )
}
