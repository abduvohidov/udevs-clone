import { SectionServices } from '@/enitites/section-services/index'
import { TypesSectionService, TypesSectionServiceSides } from '@/enitites/section-services/types'
import { primaryBgImage } from '@/shared/assets/icons/bg-image'
import { LogoDelever } from '@/shared/assets/icons/section-services-icon'
import { filterClientsContent } from '@/shared/ui/filter-clients-content/index'
import { deleverImage, iconTruck} from './constants/index'
import style from "./section-delever.module.scss"
export const SectionDelever = () => {
  const excludedProposels : Array<string | any> = []
  return (
    <section
    id='delever'
    className="my-5"
    style={{ backgroundImage: `url(${primaryBgImage})` }}
    >
      <SectionServices
        img={deleverImage}        
        logo={LogoDelever}
        titleBottom="Мы разрабатывали :"
        typeSides={TypesSectionServiceSides.LEFT}
        typeService={TypesSectionService.isCLIENT}
        utilityTop={filterClientsContent(excludedProposels)}
        clientsProposal={{icon :iconTruck, title: "Delivery" , className : style.clientsProposal } }
        titleSub='Delever — Автоматизация службы доставки ориентированая как на потребителей так и на рестораны.'
      />

    </section>
  )
}
