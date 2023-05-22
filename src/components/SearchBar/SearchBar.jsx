import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Button, Input } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{ query: ' ' }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.query.trim());
          resetForm();
        }}
      >
        <Form>
          <Field
            as={Input}
            autoComplete="off"
            placeholder="Search movie..."
            name="query"
            autoFocus
          />
          <Button type="submit">Search</Button>
        </Form>
      </Formik>
    </>
  );
};
