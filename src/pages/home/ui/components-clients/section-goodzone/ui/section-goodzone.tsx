import { SectionServices } from '@/enitites/section-services/index'
import { TypesSectionService, TypesSectionServiceSides } from '@/enitites/section-services/types'
import { primaryBgImage } from '@/shared/assets/icons/bg-image'
import { LogoGoodzone, LogoIman} from '@/shared/assets/icons/section-services-icon'
import { filterClientsContent } from '@/shared/ui/filter-clients-content/index'
import { iconShopingBag, imageGoodzone } from './constants/index'
import style from "./section-goodzone.module.scss"

export const SectionGoodzone = () => {
  const excludedProposels : Array<string | any> = []
  return (
    <section
    id='iman'
    className="my-5"
    style={{ backgroundImage: `url(${primaryBgImage})` }}
    >
      <SectionServices
        img={imageGoodzone}        
        logo={LogoGoodzone}
        titleBottom="Мы разрабатывали :"
        typeSides={TypesSectionServiceSides.LEFT}
        typeService={TypesSectionService.isCLIENT}
        utilityTop={filterClientsContent(excludedProposels)}
        clientsProposal={{icon : iconShopingBag, title: "E-Commerce" , className : style.clientsProposal } }
        titleSub='Goodzone - Internet shop of household appliances in Uzbekistan.'
      />

    </section>
  )
}
