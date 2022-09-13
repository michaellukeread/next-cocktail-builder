import Link from "next/link"

import { PuzzleIcon } from "@heroicons/react/solid"

const Navbar = ({ user, logout }) => (
  <nav className="bg-black h-16">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <div className="flex items-center gap-4">
        <PuzzleIcon className="text-white w-8 h-8" />
        <Link href="/">
          <a
            className="hover:underline only:self-center text-white text-xl font-semibold whitespace-nowrap"
            aria-current="page"
          >
            Next Cocktail Builder {user?.name}
          </a>
        </Link>
      </div>

      <ul className="flex flex-row space-x-8">
        {user && (
          <li className="inline-flex items-center gap-4">
            <Link href={`/cocktails/saved`}>
              <a className="text-white">Saved Cocktails</a>
            </Link>
            <p className="text-white">Logged in as: {user.name}</p>
            <img
              className="w-10 h-10 rounded-full"
              src={user?.image}
              alt="Rounded avatar"
            />
            <button className="text-white" onClick={logout}>
              Log out
            </button>
          </li>
        )}
      </ul>
    </div>
  </nav>
)

export default Navbar
