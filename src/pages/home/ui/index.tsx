import { Contacts } from "@/widgets/contacts";
import { Header } from "@/widgets/header";
import { Service } from "@/widgets/service";

export const HomePage = () => {
  // return <><h1>Home page</h1></>
  return (
    <>
      <Header />
      <Service />
      <Contacts/>
    </>
  );
};
