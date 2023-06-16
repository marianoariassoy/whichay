const MenuMobile = () => {
  const OpenMenu = () => {
    document.querySelector("#nav-menu").classList.toggle("active");
    const navMobile = document.querySelector(".nav-mobile");
    navMobile?.classList.toggle("hidden");
  };

  return (
    <div id="nav-menu" onClick={OpenMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuMobile;
