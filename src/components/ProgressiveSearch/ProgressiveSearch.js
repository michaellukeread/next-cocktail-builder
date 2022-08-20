import { Fragment } from "react"
import { Combobox, Transition } from "@headlessui/react"

import Items from "./Items"

// TODO:
// - Clicking on a search item takes you to that page

const ProgressiveSearch = ({
  items,
  selected,
  setSelected,
  displayValue,
  afterLeave,
  onChange,
  Component,
}) => (
  <Combobox value={selected} onChange={setSelected}>
    <div className="relative w-full">
      <div className="flex items-center">
        <Combobox.Input
          className="bg-gray-50 w-full p-4 ring-blue-800 rounded-lg border-none outline-none focus:ring-2"
          displayValue={displayValue}
          onChange={onChange}
          placeholder="Search for a cocktail..."
        />
      </div>

      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={afterLeave}
      >
        <Combobox.Options className="absolute z-10 mt-1 max-h-96 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {Component ? <Component /> : <Items items={items} />}
        </Combobox.Options>
      </Transition>
    </div>
  </Combobox>
)

export default ProgressiveSearch
