import Link from "next/link"

import { PuzzleIcon } from "@heroicons/react/solid"

const Navbar = () => (
  <nav className="bg-blue-700 py-4">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <div className="flex items-center gap-4">
        <PuzzleIcon className="text-white w-8 h-8" />
        <Link href="/">
          <a
            className="hover:underline only:self-center text-white text-xl font-semibold whitespace-nowrap"
            aria-current="page"
          >
            Next Cocktail Builder
          </a>
        </Link>
      </div>

      <ul className="flex flex-row space-x-8">
        {/* <li>
          <Link href="/">
            <a className="text-white hover:underline">Home</a>
          </Link>
        </li> */}
      </ul>
    </div>
  </nav>
)

export default Navbar
