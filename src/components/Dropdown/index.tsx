import React, { FC, Fragment, ReactNode } from "react"
import { Menu, Transition } from "@headlessui/react"

import { dropdownItem } from "types/dropdownItem"

import { DropdownItem } from "./DropdownItem"

interface DropdownProps {
  children: ReactNode
  items: dropdownItem[]
}

const Dropdown: FC<DropdownProps> = ({ items, children }) => (
  <Menu as="div" className="relative">
    <div>
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {children}
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute overflow-hidden z-10 right-0 w-56 origin-top-right divide-y divide-primary rounded-lg bg-darkest shadow-lg border border-primary focus:outline-none">
        {items.map(({ label, onClick }) => (
          <DropdownItem key={label} onClick={onClick} label={label} />
        ))}
      </Menu.Items>
    </Transition>
  </Menu>
)

export default Dropdown
