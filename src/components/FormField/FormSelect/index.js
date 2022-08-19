import { string, func, arrayOf, shape, bool } from 'prop-types'
import { FormField } from '../FormField'
import { classNames } from 'utils'

const optionShape = {
  key: string.isRequired,
  name: string.isRequired,
  value: string.isRequired
}

const FormSelect = ({
  id,
  name,
  label,
  hint,
  onChange,
  value,
  options,
  error,
  cornerHint,
  contentMin,
  ...rest
}) => (
  <FormField
    id={id}
    label={label}
    hint={hint}
    error={error}
    cornerHint={cornerHint}
    contentMin={contentMin}>
    <select
      id={id}
      name={name}
      onChange={onChange}
      value={value}
      type="select"
      className={classNames(
        contentMin ? 'w-min' : 'w-full',
        'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md'
      )}
      {...rest}>
      {options.map(({ key, name, value }) => (
        <option key={key || value} value={value}>
          {name}
        </option>
      ))}
    </select>
  </FormField>
)

FormSelect.propTypes = {
  /** an optional (but recommended) unique id */
  id: string,

  /** the field name */
  name: string.isRequired,

  /** the primary label */
  label: string,

  /** the provided value */
  value: string,

  /** a secondary label with hint text */
  hint: string,

  /** this is a controlled component so you need to handle the change action yourself */
  onChange: func.isRequired,

  /** error message to be displayed if error exists */
  error: string,

  /** a hint to be displayed next to the label */
  cornerHint: string,

  /** A true | false value to make content hug */
  contentMin: bool,

  /** a list of options */
  options: arrayOf(shape(optionShape)).isRequired
}

FormSelect.defaultProps = {
  id: undefined,
  label: undefined,
  hint: undefined,
  contentMin: false
}

export { FormSelect }
export default FormSelect
