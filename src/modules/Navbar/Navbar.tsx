import React, { FC } from "react"

import { PuzzleIcon } from "@heroicons/react/solid"

import { Button, Dropdown } from "components"
import { dropdownItem } from "types/dropdownItem"

import { NavbarLink } from "./NavbarLink"

interface NavbarProps {
  user?: {
    name: string
    email: string
    image: string
  }
  login: () => void
  items: dropdownItem[]
}

const Navbar: FC<NavbarProps> = ({ user, login, items }) => (
  <nav className="bg-darkest h-20">
    <div className="px-8 container h-full flex flex-wrap justify-between items-center mx-auto">
      <div className="flex items-center gap-8 h-full">
        <NavbarLink to="/">
          <PuzzleIcon className="text-white w-8 h-8" />
        </NavbarLink>

        {user && <NavbarLink to="/cocktails/saved">Saved Cocktails</NavbarLink>}
        <NavbarLink to="/cocktails/popular">Popular Cocktails</NavbarLink>
        <NavbarLink to="/cocktails/latest">Latest Cocktails</NavbarLink>
      </div>

      <ul className="flex flex-row space-x-8">
        {user ? (
          <li className="inline-flex items-center gap-4">
            <Dropdown items={items}>
              <img
                className="w-10 h-10 rounded-full"
                src={user?.image}
                alt="Rounded avatar"
              />
            </Dropdown>
          </li>
        ) : (
          <li className="inline-flex items-center gap-4">
            <Button variant="primary" onClick={login}>
              Login
            </Button>
          </li>
        )}
      </ul>
    </div>
  </nav>
)

export default Navbar
