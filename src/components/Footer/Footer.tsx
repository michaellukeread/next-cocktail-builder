//TODO: Make links operational when pages are created
const Footer = () => (
  <footer className="bg-darkest md:flex md:items-center md:justify-between">
    <div className="p-8 container h-full flex flex-wrap justify-between items-center mx-auto">
      <span className="text-sm text-white sm:text-center">
        © 2022 Next Cocktail Builder . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
