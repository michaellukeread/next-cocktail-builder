import { string, func, node, oneOf } from 'prop-types'
import { FormField } from '../FormField'
import { classNames } from 'utils'

const FormInput = ({
  id,
  name,
  label,
  hint,
  cornerHint,
  error,
  onChange,
  value,
  lhs,
  rhs,
  type,
  ...rest
}) => (
  <FormField id={id} label={label} hint={hint} error={error} cornerHint={cornerHint}>
    <div className="mt-1 relative">
      {lhs && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
          {lhs}
        </div>
      )}
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        className={classNames(
          'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md',
          lhs && 'pl-6'
        )}
        {...rest}
      />
      {rhs && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
          {rhs}
        </div>
      )}
    </div>
  </FormField>
)

FormInput.propTypes = {
  /** an optional (but recommended) unique id */
  id: string,

  /** the field name */
  name: string.isRequired,

  /** the primary label */
  label: string,

  /** the provided value */
  value: string,

  /** leading add on content */
  lhs: node,

  /** trailing add on content  */
  rhs: node,

  /** error message to be displayed if error exists */
  error: string,

  /** a hint to be displayed next to the label */
  cornerHint: string,

  /** type of input field */
  type: oneOf(['text', 'textarea', 'number']),

  /** a secondary label with hint text */
  hint: string,

  /** this is a controlled component so you need to handle the change action yourself */
  onChange: func.isRequired
}

FormInput.defaultProps = {
  id: undefined,
  label: undefined,
  hint: undefined,
  type: 'text'
}

export { FormInput }
export default FormInput
