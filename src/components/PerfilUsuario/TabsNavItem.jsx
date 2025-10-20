const TabsNavItem = ({ title }) => {
  return (
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="planeados-tab"
        data-bs-toggle="tab"
        type="button"
        role="tab"
      >
        {title}
      </button>
    </li>
  );
};

export default TabsNavItem;
