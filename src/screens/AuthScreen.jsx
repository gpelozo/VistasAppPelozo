import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

import { COLORS } from '../constants/colors' 
import { useDispatch } from 'react-redux'
import { signup } from '../store/actions/auth.action'
import Input from '../components/Input'

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"

const formReducer = (state, action) => {
    console.log(action)
    if(action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        }
        let updatedFormisValid = true
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormisValid && updatedValidities[key]
        }
    }
}

const AuthScreen = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    useEffect(() => {
        if (error) {
            Alert.alert("Ha ocurrido un error", error, [{ text: "OK" }])
        }
    }, [error])

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: "",
            password: "",
        },
        inputValidites: {
            email: false,
            password: false,
        },
        formIsValid: false,
    })

    const handleSignUp = () => {
        if (formState.formIsValid) {
            dispatch(signup(formState.inputValues.email, formState.inputValues.password))
        } else {
            Alert.alert("Formulario invalido", "Infresa email y password valido", [
                {text: "OK"},
            ])
        }
    }
    
    const onInputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            console.log(inputIdentifier, inputValue, inputValidity)
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier,
            })
        },
        [dispatchFormState]
    )


  return (
    <KeyboardAvoidingView behavior="height" style={styles.screen}>
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <Input id='email' label="Email" keyboardType="email-address" required email autoCapitalize="none" errorText="Por favor ingresa un email valido" onInputChange={onInputChangeHandler} initialValue="" />
            <Input id="password" label="password" keyboardType="default" required password secureTextEntry autoCapitalize="none" errorText="Por favor ingresa una contrasena valida" onInputChange={onInputChangeHandler} initialValue="" />
            <Button title="Registrarme" onPress={handleSignUp}/>
            {/*<View style={styles.prompt}>
                <Text style={styles.promptMessage}>Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => console.log("Ingresar")} style={styles.button}>
                    <Text style={styles.promptButton}>Ingresar</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    </KeyboardAvoidingView>
    
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: "center",
    },
    container: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white"
    },
    prompt: {
        alignItems: "center",
    },
    promptMessage: {
        fontSize: 16,
        color: "#333",
    },
    promptButton: {
        fontSize: 16,
    },
    button: {
        backgroundColor: COLORS.primary,
        marginVertical: 20,
    },
})