import TabsNavItem from "./TabsNavItem";

const TabsNav = () => {
  return (
    <nav role="tablist">
      <ul className="nav nav-tabs justify-content-center mt-4" id="perfilTabs">
        <TabsNavItem title={"Viajes Planeados"} />
        <TabsNavItem title={"Viajes Realizados"} />
        <TabsNavItem title={"Wishlist"} />
        <TabsNavItem title={"Favoritos"} />
      </ul>
    </nav>
  );
};

export default TabsNav;
