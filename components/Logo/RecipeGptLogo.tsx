import { Avatar, AvatarProps, Group, GroupProps, Title, TitleProps } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IconChefHat, TablerIconProps } from '@tabler/icons';
import { useRouter } from 'next/router';

interface LogoProps {
  avatarProps?: AvatarProps;
  groupProps?: GroupProps;
  iconProps?: TablerIconProps;
  titleProps?: TitleProps;
}
export default function RecipeGptLogo({
  avatarProps = {},
  groupProps = {},
  iconProps = {},
  titleProps = {},
}: LogoProps) {
  const hovering = useHover();
  const router = useRouter();
  return (
    <Group
      {...groupProps}
      ref={hovering.ref}
      style={{
        cursor: 'pointer',
      }}
      onClick={() => router.push('/')}
    >
      <Avatar variant="gradient" {...avatarProps}>
        <IconChefHat fill={hovering.hovered ? 'white' : avatarProps.color} {...iconProps} />
      </Avatar>
      <Title
        color={hovering.hovered ? 'white' : titleProps.color}
        size="h3"
        gradient={
          hovering.hovered
            ? {
                from: 'white',
                to: 'blue',
              }
            : {
                from: 'blue',
                to: 'cyan',
              }
        }
        variant="gradient"
        {...titleProps}
      >
        Recipe GPT
      </Title>
    </Group>
  );
}
