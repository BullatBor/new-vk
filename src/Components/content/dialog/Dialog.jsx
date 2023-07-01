import React from 'react'
import s from "./Dialog.module.css"
import { Field, Form, Formik } from 'formik'
import { InputForm, MessageForm } from '../../common/FormControl/FormControl'

export const Dialog = (props) => {
  return (
    <div className={s.dialog} >
      <div className={s.MessageInput}>
        <MessageInput />
      </div>
    </div>
  )
}


const MessageInput = (props) => {
  return (
    <Formik>
      {() => (
        <Form className={s.form}>
          <Field component={MessageForm} />
          <button type='submit'>send</button>
        </Form>
      )}
    </Formik>
  )
}
