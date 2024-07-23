import { SectionServices } from '@/enitites/section-services/index'
import { TypesSectionService, TypesSectionServiceSides } from '@/enitites/section-services/types'
import { primaryBgImage } from '@/shared/assets/icons/bg-image'
import { LogoIman} from '@/shared/assets/icons/section-services-icon'
import { filterClientsContent } from '@/shared/ui/filter-clients-content/index'
import { utilityTypes } from '@/shared/ui/filter-clients-content/types'
import { iconBank, imageIman } from './constants/index'
import style from "./section-iman.module.scss"

export const SectionIman = () => {
  const excludedProposels : Array<string | any> = [utilityTypes.isWEB, utilityTypes.isDesign]
  return (
    <section
    id='iman'
    className="my-5"
    style={{ backgroundImage: `url(${primaryBgImage})` }}
    >
      <SectionServices
        img={imageIman}        
        logo={LogoIman}
        titleBottom="Мы разрабатывали :"
        typeSides={TypesSectionServiceSides.RIGHT}
        typeService={TypesSectionService.isCLIENT}
        utilityTop={filterClientsContent(excludedProposels)}
        clientsProposal={{icon : iconBank, title: "Finance" , className : style.clientsProposal } }
        titleSub='Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.'
      />

    </section>
  )
}
