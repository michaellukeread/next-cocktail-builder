import PureNavbar from "./Navbar"
import { useNavbar } from "./hooks"

const Navbar = () => <PureNavbar {...useNavbar()} />

export default Navbar
