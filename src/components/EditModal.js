import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native'
import { THEME } from '../theme'
import {AppButton} from './ui/AppButton'
export const EditModal = ({visible, onCancel,value, onSave}) => {
    const [title, setTitle] =useState(value)

    const saveHandler = () =>{
        if (title.trim().length < 3) {
            Alert.alert('Error!', `Minimal size name 3, now is ${title.trim().length} symbol`)
        } else {
            onSave(title)
        }
    }

const canelhandler = () => {
    setTitle(value)
    onCancel()
}

    return (
        <Modal visible={visible}
         animationType='slide'
         transparent={false}> 
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                value={title}
                onChangeText={setTitle} 
                placeholder="Enter name of task"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={64}
                />
                <View style={styles.buttons}>
                <AppButton  onPress={canelhandler} color={THEME.DANGER_COLOR}>
                    Cancel
                </AppButton>
                <AppButton  onPress={saveHandler}>
                    Save
                </AppButton>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})