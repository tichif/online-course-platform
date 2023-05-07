import {
  Menu,
  Button,
  Text,
  Group,
  Avatar,
  Box,
  rem,
  useMantineTheme,
} from '@mantine/core';
import {
  IconChevronRight,
  IconChevronLeft,
  IconPower,
} from '@tabler/icons-react';
import { signOut } from 'next-auth/react';

const MenuComponent = ({
  avatar,
  name,
  email,
}: {
  avatar: string;
  name: string;
  email: string;
}) => {
  const theme = useMantineTheme();
  return (
    <Menu shadow='md' width={200}>
      <Menu.Target>
        <Group>
          <Avatar
            src={
              avatar ??
              'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
            }
            radius='xl'
          />
          <Box sx={{ flex: 1 }}>
            <Text size='sm' weight={500}>
              {name}
            </Text>
            <Text color='dimmed' size='xs'>
              {email}
            </Text>
          </Box>

          {theme.dir === 'ltr' ? (
            <IconChevronRight size={rem(18)} />
          ) : (
            <IconChevronLeft size={rem(18)} />
          )}
        </Group>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          icon={<IconPower size={14} />}
          onClick={() => void signOut()}
        >
          Sign Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuComponent;
