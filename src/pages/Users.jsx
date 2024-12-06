import SignupForm from "../features/authentication/SignupForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
    <Heading as="h1">
    <Button size="large">Create a new user</Button>  
      </Heading>
      <SignupForm/>
      </>
  )
 ;
}

export default NewUsers;
