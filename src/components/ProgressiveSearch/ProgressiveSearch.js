import { Fragment } from "react"
import { Combobox, Transition } from "@headlessui/react"

import Items from "./Items"

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
          className="border-2 border-white bg-transparent 0 w-full px-4 py-3 rounded-xl ring-none outline-none text-white placeholder:text-white text-bold font-lato font-bold text-lg"
          displayValue={displayValue}
          onChange={onChange}
          placeholder="Find a cocktail..."
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
