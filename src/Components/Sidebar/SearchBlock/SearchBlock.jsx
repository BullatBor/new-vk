import React from 'react'
import { Field, Form, Formik } from 'formik'
import s from "./SearchBlock.module.css"
import { InputForm } from '../../common/FormControl/FormControl'

export const SearchBlock = () => {
  return (
    <div className={s.searchBlock}>
        <Formik>
            {() => (
                <Form className={s.form}>
                    <button>Menu</button>
                    <Field component={InputForm}  />
                </Form>
            )}
        </Formik>
    </div>
  )
}
