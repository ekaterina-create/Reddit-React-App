import React, { useState } from 'react'
import FormControls from '../FormControls/FormControls';
import styles from './commentform.less';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { userContext } from '../../context/usercontext';



const validationSchema = Yup.object().shape({
  text: Yup.string()
    .min(3, 'Введите более 3-х символов.')
    .required('Поле обязательно для заполнения'),
});


function CommentForm() {
  const [value, setValue] = useState('');
  const { data } = React.useContext(userContext);

  return (
    <div>
      <Formik
        initialValues={{
          text: ""
        }}
        onSubmit={(values) => {
          setValue(values.text)
          alert('Форма отправлена');

        }}

        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched, handleChange, isValid }) => (
          <Form className={styles.form}>
            <Field name="text" as="textarea" className={styles.textarea} onChange={handleChange}
              placeholder={`${data && data.name},oставьте Ваш комментарий...`}
              aria-invalid={!isValid ? 'true' : undefined}
            />
            <div className={styles.commentcontrols}>
              <FormControls />
              <button type="submit" className={styles.button}>Комментировать</button>
            </div>
            {errors.text && touched.text ? (
              <div className={styles.error}>{errors.text}</div>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );

}



export default CommentForm


