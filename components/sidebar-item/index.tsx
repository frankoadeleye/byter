import CustomLink from "components/custom-link";
import { SidebarItemBlock } from "./styles";

interface sProps {
  data: {
    name: string;
    route: string;
  };
}

function SidebarItem({ data }: sProps) {
  const { name, route } = data;

  return (
    <CustomLink href={route} activeClassName="active">
      <SidebarItemBlock as="a">{name}</SidebarItemBlock>
    </CustomLink>
  );
}

export default SidebarItem;
