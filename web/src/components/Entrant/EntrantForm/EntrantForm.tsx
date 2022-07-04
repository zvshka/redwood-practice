import {
  DatetimeLocalField,
  FieldError,
  Form,
  FormError,
  Label,
  NumberField,
  RadioField,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const EntrantForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.entrant?.id)
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
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Фамилия
        </Label>

        <TextField
          name="lastName"
          defaultValue={props.entrant?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Имя
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.entrant?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="middleName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Отчество
        </Label>

        <TextField
          name="middleName"
          defaultValue={props.entrant?.middleName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="middleName" className="rw-field-error" />

        <Label
          name="organization"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Наименование ОУ
        </Label>

        <TextField
          name="organization"
          defaultValue={props.entrant?.organization}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="organization" className="rw-field-error" />

        <Label
          name="education"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Образование
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="entrant-education-0"
            name="education"
            defaultValue="MIDDLE"
            defaultChecked={props.entrant?.education?.includes('MIDDLE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Среднее</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="entrant-education-1"
            name="education"
            defaultValue="HIGH"
            defaultChecked={props.entrant?.education?.includes('HIGH')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Высшее</div>
        </div>

        <FieldError name="education" className="rw-field-error" />

        <Label
          name="diplomaLastname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Фамилия в дипломе
        </Label>

        <TextField
          name="diplomaLastname"
          defaultValue={props.entrant?.diplomaLastname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="diplomaLastname" className="rw-field-error" />

        <Label
          name="diplomaSerial"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Серия диплома
        </Label>

        <TextField
          name="diplomaSerial"
          defaultValue={props.entrant?.diplomaSerial}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="diplomaSerial" className="rw-field-error" />

        <Label
          name="diplomaNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Номер диплома
        </Label>

        <TextField
          name="diplomaNumber"
          defaultValue={props.entrant?.diplomaNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="diplomaNumber" className="rw-field-error" />

        <Label
          name="snils"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          СНИЛС
        </Label>

        <TextField
          name="snils"
          defaultValue={props.entrant?.snils}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="snils" className="rw-field-error" />

        <Label
          name="birthday"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          День рождения
        </Label>

        <DatetimeLocalField
          name="birthday"
          defaultValue={formatDatetime(props.entrant?.birthday)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="birthday" className="rw-field-error" />

        <Label
          name="citezenship"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Гражданство
        </Label>

        <TextField
          name="citezenship"
          defaultValue={props.entrant?.citezenship}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="citezenship" className="rw-field-error" />

        <Label
          name="courseId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          ID Курса
        </Label>

        <NumberField
          name="courseId"
          defaultValue={props.entrant?.courseId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="courseId" className="rw-field-error" />

        <Label
          name="regionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          ID Региона
        </Label>

        <NumberField
          name="regionId"
          defaultValue={props.entrant?.regionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="regionId" className="rw-field-error" />

        <Label
          name="positionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          ID Должности
        </Label>

        <NumberField
          name="positionId"
          defaultValue={props.entrant?.positionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="positionId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Сохранить
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EntrantForm
