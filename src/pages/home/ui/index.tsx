import { Contacts } from "@/widgets/contacts";
import { Header } from "@/widgets/header";
import { Instruments } from "@/widgets/instruments/index";
import { OurClients } from "@/widgets/our-clients/index";
import { OurTeam } from "@/widgets/our-team/index";
import { Service } from "@/widgets/service";

export const HomePage = () => {
  // return <><h1>Home page</h1></>
  return (
    <>
      <Header />
      <Service />
      <OurTeam/>
      <Instruments/>
      <OurClients/>
      <Contacts/>

    </>
  );
};
