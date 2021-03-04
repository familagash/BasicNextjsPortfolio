const Footer = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-100 bg-gray-800">
      <div className="container py-6">
        <div className="flex flex-col items-center justify-between mt-4 md:flex-row">
          <div>
            <a href="#" className="text-xl font-bold">
              Logo
            </a>
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <a href="#" className="px-4 text-sm">
                About
              </a>
              <a href="#" className="px-4 text-sm">
                Blog
              </a>
              <a href="#" className="px-4 text-sm">
                News
              </a>
              <a href="#" className="px-4 text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
