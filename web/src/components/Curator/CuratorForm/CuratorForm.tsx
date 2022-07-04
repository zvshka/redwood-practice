import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const CuratorForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.curator?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="fio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          ФИО
        </Label>

        <TextField
          name="fio"
          defaultValue={props.curator?.fio}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fio" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Сохранить
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CuratorForm
