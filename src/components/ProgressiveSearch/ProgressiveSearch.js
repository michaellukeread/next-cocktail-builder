import { Fragment } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { SearchIcon } from "@heroicons/react/solid"

import Items from "./Items"

const ProgressiveSearch = ({
  items,
  selected,
  setSelected,
  displayValue,
  afterLeave,
  onChange,
  onClick,
  Component,
}) => (
  <Combobox value={selected} onChange={setSelected}>
    <div className="relative mt-1">
      <div className="relative w-full overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
        <Combobox.Input
          className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          displayValue={displayValue}
          onChange={onChange}
          placeholder="Search for a drink..."
        />
        <button
          onClick={onClick}
          className="bg-indigo-700 absolute inset-y-0 right-0 flex items-center px-2 hover:bg-indigo-600"
        >
          <SearchIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={afterLeave}
      >
        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {Component ? <Component /> : <Items items={items} />}
        </Combobox.Options>
      </Transition>
    </div>
  </Combobox>
)

export default ProgressiveSearch
