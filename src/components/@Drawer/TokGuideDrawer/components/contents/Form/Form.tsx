import { useExampleForm } from '@/hooks/useExampleForm'

import { FormContainer } from './components/FormContainer'
import { FormView } from './components/FormView'

const Form = () => {
  const formData = useExampleForm()

  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = formData

  const onSubmit = handleSubmit(
    (data, onError) => {
      console.log('onError', onError)
      console.log(data)
    },
    (error) => {
      console.log(error)
    },
  )

  return (
    <FormContainer
      isDisable={!isDirty || !isValid}
      onConfirm={onSubmit}
      content={<FormView formData={formData} />}
    />
  )
}

export default Form
