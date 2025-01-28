import { NavLink } from '@aspen-ui';
import { Burger, Container, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import classes from './Header.module.css';

type Link = {
  link: string;
  label: string;
};

type HeaderProps = {
  links: Link[];
  logoURL: string;
};

export function Header(props: HeaderProps) {
  const { links, logoURL } = props;
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link, index) => (
    <NavLink setActive={setActive} link={link.link} isActive={active === link.label} key={index}>
      {link.label}
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src={logoURL} radius="xl" h={35} w="auto" fit="contain" />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
