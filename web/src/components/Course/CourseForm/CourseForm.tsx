import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const CourseForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.course?.id)
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
          Title
        </Label>
        
          <TextField
            name="title"
            defaultValue={props.course?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="category"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category
        </Label>
        
          <TextField
            name="category"
            defaultValue={props.course?.category}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="category" className="rw-field-error" />

        <Label
          name="hours"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hours
        </Label>
        
          <NumberField
            name="hours"
            defaultValue={props.course?.hours}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="hours" className="rw-field-error" />

        <Label
          name="finalWork"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Final work
        </Label>
        
          <TextField
            name="finalWork"
            defaultValue={props.course?.finalWork}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="finalWork" className="rw-field-error" />

        <Label
          name="beginsAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Begins at
        </Label>
        
          <DatetimeLocalField
            name="beginsAt"
            defaultValue={formatDatetime(props.course?.beginsAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="beginsAt" className="rw-field-error" />

        <Label
          name="endsAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ends at
        </Label>
        
          <DatetimeLocalField
            name="endsAt"
            defaultValue={formatDatetime(props.course?.endsAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="endsAt" className="rw-field-error" />

        <Label
          name="periods"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Periods
        </Label>
        
          <TextField
            name="periods"
            defaultValue={props.course?.periods}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="periods" className="rw-field-error" />

        <Label
          name="curatorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Curator id
        </Label>
        
          <NumberField
            name="curatorId"
            defaultValue={props.course?.curatorId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="curatorId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CourseForm
