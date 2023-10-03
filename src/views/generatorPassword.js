import { View, Text, StyleSheet, CheckBox, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";


const GeneratorPassword = () => {
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeLowerCase, setIncludeLowerCase] = useState(false);
    const [includeUpperCase, setIncludeUpperCase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const generatePassword = () => {
        // Define character sets based on selected options
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let availableChars = '';

        if (includeLowerCase) {
            availableChars += lowerCaseChars;
        }
        if (includeUpperCase) {
            availableChars += upperCaseChars;
        }
        if (includeNumbers) {
            availableChars += numberChars;
        }
        if (includeSpecialSymbols) {
            availableChars += specialChars;
        }

        if (availableChars.length === 0) {
            setGeneratedPassword('Please select at least one option.');
            return;
        }

        let newPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            newPassword += availableChars[randomIndex];
        }

        setGeneratedPassword(newPassword);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>PASSWORD GENERATOR</Text>
            <Text style={{
                width: 339, backgroundColor: '#151537', height: 55, color: '#fff',
                fontSize: 20,
                fontWeight: 700,
                textAlign: 'center'
            }}>{generatedPassword}</Text>
            <View
                style={{
                    flexDirection: "row",
                    width: 339,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 40,
                    marginBottom: 30
                }}
            >
                <Text style={styles.text1}>Password length</Text>
                <TextInput style={{
                    width: 118, height: 33, backgroundColor: '#fff',textAlign: 'center',fontSize: 20
                }} keyboardType="numeric"
                    value={passwordLength.toString()}
                    onChangeText={(text) => setPasswordLength(parseInt(text) || 0)} />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    width: 339,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.text1}>Include lower case letters</Text>
                <CheckBox
                    value={includeLowerCase}
                    onValueChange={setIncludeLowerCase}
                    style={styles.checkbox}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    width: 339,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.text1}>Include upcase letters</Text>
                <CheckBox
                    value={includeUpperCase}
                    onValueChange={setIncludeUpperCase}
                    style={styles.checkbox}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    width: 339,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.text1}>Include number</Text>
                <CheckBox
                    value={includeNumbers}
                    onValueChange={setIncludeNumbers}
                    style={styles.checkbox}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    width: 339,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.text1}>Include special symbol</Text>
                <CheckBox
                    value={includeSpecialSymbols}
                    onValueChange={setIncludeSpecialSymbols}
                    style={styles.checkbox}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={generatePassword}
            >
                GENERATE PASSWORD
            </TouchableOpacity>
            <Text style={{ color: 'white' }}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#23235B",
        alignItems: "center",
        borderWidth: 8,
        bordercolor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
    },
    text: {
        fontSize: 25,
        fontWeight: 700,
        color: '#fff',
        width: 181,
        marginVertical: 40

    },
    text1: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        marginVertical: 10

    },
    checkbox: {
        alignSelf: 'center',
        fontSize: 40
    },
    button: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 700,
        width: 330,
        textAlign: "center",
        backgroundColor: "#3B3B98",
        padding: 10,
        marginBottom: 20,
        marginTop: 50,
        height: 55,
        borderRadius: 2
    }

});

export default GeneratorPassword;
