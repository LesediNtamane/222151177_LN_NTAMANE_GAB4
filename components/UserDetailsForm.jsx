import React from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useFormContext from '../hooks/useFormContext';
import tw from 'twrnc';

// defininig validationschema and validating inputs with Yup

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string().email('Invalid email address.').required('Email is required.'),
  cellnumber: Yup.string()
    .length(10, 'Invalid cell number.')
    .required('Cell number is required.')
});

const UserDetailsForm = () => {
  const { formData, handleInput, setPage } = useFormContext();

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleInput('name', values.name);
        handleInput('email', values.email);
        handleInput('cellnumber', values.cellnumber);
        setPage(1); 
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Cell Number"
            keyboardType="numeric" 
            onChangeText={handleChange('cellnumber')}
            onBlur={handleBlur('cellnumber')}
            value={values.cellnumber}
          />
          {touched.cellnumber && errors.cellnumber && <Text style={styles.error}>{errors.cellnumber}</Text>}

          <Pressable
            style={tw`w-full bg-emerald-500 rounded h-8 items-center justify-center`}
            onPress={handleSubmit}
          >
            <Text style={tw`text-center text-base font-medium text-white`}>Next</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 12,
  },
});

export default UserDetailsForm;
