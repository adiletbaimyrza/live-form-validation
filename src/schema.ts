import * as yup from 'yup'

const schema = yup.object().shape({
  fname: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .required('First name is required'),
  lname: yup
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .required('Last name is required'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  tel: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number must only contain digits')
    .min(9, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must not exceed 15 digits')
    .required('Phone number is required'),
  url: yup.string().url('URL must be a valid URL').required('URL is required'),
  title: yup
    .string()
    .oneOf(
      ['Mrs', 'Mr', 'Miss', 'Dr'],
      'Title must be one of ["Mrs", "Mr", "Ms", "Dr"]',
    )
    .required('Title is required'),
  occupation: yup
    .string()
    .oneOf(['Student', 'Developer', 'Other'])
    .required('Occupation is required'),
  bdate: yup.date().required('Birth date is required'),
  remember: yup.boolean().required('Remember me is required'),
})

export { schema }
