import React from 'react';
import { IconPencil, IconChartLine } from '@tabler/icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import Link from 'next/link';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  href: string;
}

function MainLink({ icon, color, label, href }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Link href={href}>
        <Group>
          <ThemeIcon color={color} variant='light'>
            {icon}
          </ThemeIcon>

          <Text size='sm'>{label}</Text>
        </Group>
      </Link>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <IconPencil size='1rem' />,
    color: 'blue',
    label: 'Manage Course',
    href: '/courses',
  },
  {
    icon: <IconChartLine size='1rem' />,
    color: 'teal',
    label: 'Analytics',
    href: '',
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
