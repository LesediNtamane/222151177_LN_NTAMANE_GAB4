import React from "react";
import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import useFormContext from '../hooks/useFormContext';
import { router } from "expo-router";

const PaymentDetails = () => {
  const { formData, handleInput, setPage } = useFormContext();

  // defininig paymentschema and validating inputs with Yup

  const PaymentSchema = Yup.object().shape({
    cardnumber: Yup.string()
      .matches(/^\d+$/, 'Card number must be digits only.')
      .min(13, "Card number must be at least 13 digits.")
      .max(19, "Card number cannot exceed 19 digits.")
      .required("Card number is required."),
    expiration: Yup.string()
      .matches(/^\d{2}\/\d{2}$/, 'Expiration date must be in MM/YY format.')
      .required("Expiration date is required."),
    cvv: Yup.string()
      .matches(/^\d+$/, 'CVV must be digits only.')
      .min(3, "CVV must be at least 3 digits.")
      .max(4, "CVV cannot exceed 4 digits.")
      .required("CVV is required.")
  });

  return (
    <Formik
      initialValues={formData}
      validationSchema={PaymentSchema}
      onSubmit={(values) => {
        handleInput('cardnumber', values.cardnumber);
        handleInput('expiration', values.expiration);
        handleInput('cvv', values.cvv);
        router.push('/(tabs)/home');

      }}
    >
      {({ handleChange, handleBlur, handleSubmit,  values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            onChangeText={handleChange("cardnumber")}
            onBlur={handleBlur("cardnumber")}
            value={values.cardnumber}
            keyboardType="numeric"
          />
          {touched.cardnumber && errors.cardnumber && <Text style={styles.error}>{errors.cardnumber}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Expiration Date (MM/YY)"
            onChangeText={handleChange("expiration")}
            onBlur={handleBlur("expiration")}
            value={values.expiration}
          />
          {touched.expiration && errors.expiration && <Text style={styles.error}>{errors.expiration}</Text>}

          <TextInput
            style={styles.input}
            placeholder="CVV"
            onChangeText={handleChange("cvv")}
            onBlur={handleBlur("cvv")}
            value={values.cvv}
            keyboardType="numeric"
            secureTextEntry
          />
          {touched.cvv && errors.cvv && <Text style={styles.error}>{errors.cvv}</Text>}

          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'semibold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 12,
  },
});

export default PaymentDetails;
