import { Container } from "@/shared/ui/grid";
import { InputText } from "@/shared/ui/input-text";

export const HomePage = () => {
  // return <><h1>Home page</h1></>
  return (
    <>
      <Container className="mt-5">
        <InputText labelText="Имя"/>
      </Container>
    </>
  );
};
