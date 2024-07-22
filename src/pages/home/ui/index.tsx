import { Contacts } from "@/widgets/contacts";
import { Header } from "@/widgets/header";
import { OurTeam } from "@/widgets/our-team/index";
import { SectionMobile } from "@/pages/home/ui/components/section-mobile";
import { Service } from "@/widgets/service";

export const HomePage = () => {
  // return <><h1>Home page</h1></>
  return (
    <>
      <Header />
      <Service />
      <OurTeam />
      <SectionMobile />
      <Contacts />
    </>
  );
};
