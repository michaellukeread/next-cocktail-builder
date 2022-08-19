import { string, node, bool } from "prop-types"
import { classNames } from "utils"

const FormField = ({
  contentMin,
  label,
  id,
  hint,
  cornerHint,
  error,
  children,
}) => (
  <div className={classNames(contentMin ? "w-min" : "w-full")}>
    <div className="flex justify-between">
      <label
        htmlFor={id}
        className="text-sm leading-5 font-normal text-gray-700 mb-0"
      >
        {label}
      </label>
      {cornerHint && (
        <span className="text-sm text-gray-500" id="email-optional">
          {cornerHint}
        </span>
      )}
    </div>
    <div className="mt-1">{children}</div>
    {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
  </div>
)

FormField.propTypes = {
  label: string,
  id: string,
  hint: string,
  error: string,
  cornerHint: string,
  children: node.isRequired,
  /** A true | false value to make content hug */
  contentMin: bool,
}
FormField.defaultProps = {
  label: undefined,
  id: undefined,
  hint: undefined,
  contentMin: false,
}

export { FormField }
