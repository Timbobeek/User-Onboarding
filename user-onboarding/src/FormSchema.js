import * as yup from 'yup';

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .required('First name is required!')
    .min(5, 'First name has to be five characters!'),
  email: yup
    .string()
    .email('Gotta be a valid email address!')
    .required('YOU FORGOT TO ENTER AN EMAIL ADDRESS!!'),
  password: yup
    .string()
    .required('YOU FORGOT TO ENTER A PASSWORD!!'),
  termsAgreement: yup.boolean()
})

export default formSchema;