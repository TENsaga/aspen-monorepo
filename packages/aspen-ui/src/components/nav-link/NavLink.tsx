import classes from './NavLink.module.css';

type NavLinkProps = {
  link: string;
  children: string;
  isActive: boolean;
  setActive: (link: string) => void;
};

export function NavLink(props: NavLinkProps) {
  const { link, children, isActive, setActive } = props;

  return (
    <a
      href={link}
      className={classes.link}
      data-active={isActive || undefined}
      data-testid={`nav-link-${children}`}
      onClick={(event) => {
        event.preventDefault();
        setActive(children);
      }}
    >
      {children}
    </a>
  );
}
