import { SignIn } from '@clerk/nextjs';
import { Center } from '@mantine/core';

export default function SignInScreen() {
  return (
    <Center>
      <SignIn />
    </Center>
  );
}
