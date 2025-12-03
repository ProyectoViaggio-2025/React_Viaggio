const TabsNav = ({ setSelectedTab, selectedTab }) => {
  return (
    <nav role="tablist">
      <ul className="nav nav-tabs justify-content-center mt-4" id="perfilTabs">
        <TabsNavItem
          title={"Viaje en curso"}
          id={"enCurso-tab"}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <TabsNavItem
          title={"Viajes planeados"}
          id={"planeados-tab"}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <TabsNavItem
          title={"Viajes realizados"}
          id={"realizados-tab"}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
      </ul>
    </nav>
  );
};

const TabsNavItem = ({ title, id, selectedTab, setSelectedTab }) => {
  return (
    <li className="nav-item" role="presentation">
      <button
        onClick={() => setSelectedTab(id)}
        className={`nav-link PerfilUsuarioNavLink ${selectedTab === id ? "active" : ""}`}
        id={id}
        data-bs-toggle="tab"
        type="button"
        role="tab"
      >
        {title}
      </button>
    </li>
  );
};

export default TabsNav;
