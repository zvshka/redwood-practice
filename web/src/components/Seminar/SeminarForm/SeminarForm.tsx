import {
  DatetimeLocalField,
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const SeminarForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.seminar?.id)
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
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Название
        </Label>

        <TextField
          name="title"
          defaultValue={props.seminar?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Дата
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.seminar?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="responsible"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Отвественные
        </Label>

        <TextField
          name="responsible"
          defaultValue={props.seminar?.responsible}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="responsible" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Сохранить
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SeminarForm
