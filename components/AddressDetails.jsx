import React from "react";
import { View, TextInput, Text, StyleSheet,Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import useFormContext from '../hooks/useFormContext';
import tw from 'twrnc';

const AddressDetails = () => {
  const { formData, handleInput, setPage } = useFormContext();

  const AddressSchema = Yup.object().shape({
    streetnumber: Yup.string().required("Street number is required."),
    city: Yup.string().required("City is required."),
    state: Yup.string().required("State is required."),
    zipcode: Yup.string().required("Zip code is required.")
  });

  return (
    <Formik
      initialValues={{
        streetnumber: formData.streetnumber || "",
        city: formData.city || "",
        state: formData.state || "",
        zipcode: formData.zipcode || ""
      }}
      validationSchema={AddressSchema}
      onSubmit={(values) => {
        handleInput('streetnumber', values.streetnumber);
        handleInput('city', values.city);
        handleInput('state', values.state);
        handleInput('zipcode', values.zipcode);
        setPage(2); 
      }}
    >
      {({ handleChange, handleBlur,handleSubmit ,values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Street Number"
            onChangeText={handleChange("streetnumber")}
            onBlur={handleBlur("streetnumber")}
            value={values.streetnumber}
          />
          {touched.streetnumber && errors.streetnumber && <Text style={styles.error}>{errors.streetnumber}</Text>}

          <TextInput
            style={styles.input}
            placeholder="City"
            onChangeText={handleChange("city")}
            onBlur={handleBlur("city")}
            value={values.city}
          />
          {touched.city && errors.city && <Text style={styles.error}>{errors.city}</Text>}

          <TextInput
            style={styles.input}
            placeholder="State"
            onChangeText={handleChange("state")}
            onBlur={handleBlur("state")}
            value={values.state}
          />
          {touched.state && errors.state && <Text style={styles.error}>{errors.state}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Zip Code"
            onChangeText={handleChange("zipcode")}
            onBlur={handleBlur("zipcode")}
            value={values.zipcode}
          />
          {touched.zipcode && errors.zipcode && <Text style={styles.error}>{errors.zipcode}</Text>}
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
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 12,
  },
});

export default AddressDetails;
