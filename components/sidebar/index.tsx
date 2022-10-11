import SidebarItem from "components/sidebar-item";
import { SidebarBlock, SidebarItemsWrap, ItemGroup } from "./styles";
import SidebarItems from "./data";
import User from "components/user";

function Sidebar({ darkMode }) {
  return (
    <SidebarBlock>
      <SidebarItemsWrap darkMode={darkMode}>
        <ItemGroup>
          {SidebarItems.map((data, index) => {
            return <SidebarItem data={data} key={index} />;
          })}
        </ItemGroup>
        <ItemGroup>
          <User darkMode={darkMode} />
        </ItemGroup>
      </SidebarItemsWrap>
    </SidebarBlock>
  );
}

export default Sidebar;
