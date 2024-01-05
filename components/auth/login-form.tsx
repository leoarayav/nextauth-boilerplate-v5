import { CardWrapper } from "./card-wrapper";

export const LoginForm = (): React.ReactElement => {
  return (
    <CardWrapper
      headerLabel="Welcome back!"
      backButtonLabel="Dont have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login form
    </CardWrapper>
  );
};
