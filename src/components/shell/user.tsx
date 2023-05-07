import React from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
  rem,
  Button,
} from '@mantine/core';
import { signIn, useSession } from 'next-auth/react';
import MenuComponent from './Menu';

export function User() {
  const theme = useMantineTheme();

  const { data } = useSession();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `${rem(1)} solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      {data ? (
        <UnstyledButton
          sx={{
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
          }}
        >
          <MenuComponent
            avatar={
              data.user.image ??
              'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
            }
            name={data.user.name as string}
            email={data.user.email as string}
          />
        </UnstyledButton>
      ) : (
        <Button onClick={() => void signIn()}>Login</Button>
      )}
    </Box>
  );
}
