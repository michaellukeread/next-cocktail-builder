import { Combobox } from "@headlessui/react"

import { classNames } from "utils"

const Item = ({ item }) => (
  <Combobox.Option
    key={item.idDrink}
    className={({ active }) =>
      classNames(
        active && "bg-green-50",
        "relative cursor-pointer select-none p-2 text-gray-90"
      )
    }
    value={item}
  >
    <span className="block truncate">{item.strDrink}</span>
  </Combobox.Option>
)

export default Item
