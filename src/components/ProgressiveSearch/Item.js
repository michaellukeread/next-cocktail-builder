import { Fragment } from "react"
import { Combobox } from "@headlessui/react"

import Image from "next/image"

import { classNames, findIngredients } from "utils"

import NextLink from "./NextLink"

const Item = ({ item }) => {
  const ingredients = findIngredients(item).join(", ")

  return (
    <Combobox.Option as={Fragment} key={item.idDrink} value={item}>
      {({ active }) => (
        <NextLink
          as={Fragment}
          href={`/cocktails?name=${item.strDrink}`}
          className={classNames(
            active && "bg-blue-100",
            "relative cursor-pointer select-none p-4 text-gray-90 flex gap-4"
          )}
        >
          <Image
            src={item.strDrinkThumb}
            alt=""
            width="64"
            height="64"
            className="rounded-lg"
          />
          <div>
            <h4 className="text-xl font-semibold truncate">{item.strDrink}</h4>
            {ingredients && <p>{ingredients}</p>}
          </div>
        </NextLink>
      )}
    </Combobox.Option>
  )
}

export default Item
