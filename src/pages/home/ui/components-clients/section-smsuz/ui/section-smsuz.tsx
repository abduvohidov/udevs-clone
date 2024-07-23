import { SectionServices } from '@/enitites/section-services/index'
import { TypesSectionService, TypesSectionServiceSides } from '@/enitites/section-services/types'
import { primaryBgImage } from '@/shared/assets/icons/bg-image'
import { LogoSmsuz } from '@/shared/assets/icons/section-services-icon'
import { filterClientsContent } from '@/shared/ui/filter-clients-content/index'
import { utilityTypes } from '@/shared/ui/filter-clients-content/types'
import { iconSms, smsuzImage } from './constants/index'
import style from "./section-smsuz.module.scss"

export const SectionSmsuz = () => {
  const excludedProposels : Array<string | any> = [utilityTypes.isDesign, utilityTypes.isMobile]
  return (
    <section
    id='smsuz'
    className="my-5"
    style={{ backgroundImage: `url(${primaryBgImage})` }}
    >
      <SectionServices
        img={smsuzImage}        
        logo={LogoSmsuz}
        titleBottom="Мы разрабатывали :"
        typeSides={TypesSectionServiceSides.RIGHT}
        typeService={TypesSectionService.isCLIENT}
        utilityTop={filterClientsContent(excludedProposels)}
        titleSub='Smsuz.uz - It is a platform for bulk SMS messaging.'
        clientsProposal={{icon : iconSms, title: "Notification" , className : style.clientsProposal } }
      />

    </section>
  )
}
