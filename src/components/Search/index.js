import { useCallback, useState } from "react"
import { useRouter } from "next/router"

import PureSearch from "./Search"

const Search = () => {
  const [value, setValue] = useState("")
  const router = useRouter()

  const onClick = useCallback(
    () => router.push(`/cocktails?name=${value}`),
    [value, router]
  )
  const onChange = useCallback((e) => setValue(e.target.value), [setValue])

  return <PureSearch onClick={onClick} onChange={onChange} value={value} />
}
export default Search
