import React, { FC } from "react"
import { Menu } from "@headlessui/react"

import { classNames } from "utils"
import { dropdownItem } from "types/dropdownItem"

export const DropdownItem: FC<dropdownItem> = ({ label, onClick }) => (
  <Menu.Item>
    {({ active }) => (
      <div
        onClick={onClick}
        className={classNames(
          active && "bg-tertiary text-darkest",
          "cursor-pointer px-4 py-2 font-medium"
        )}
      >
        {label}
      </div>
    )}
  </Menu.Item>
)
