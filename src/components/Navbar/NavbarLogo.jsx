const NavbarLogo = () => {
  return (
    <div>
      {/* Full name visible on md and larger screens */}
      <h1 className="text-white text-2xl hidden md:block">
        Sreya Roy
      </h1>

      {/* Short initials visible on small screens */}
      <h1 className="text-white font-special font-extrabold text-4xl block md:hidden">
        SR
      </h1>
    </div>
  );
};

export default NavbarLogo;
