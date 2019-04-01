import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

class DateTimeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
        };
    }
    showDateTimePicker = () => {
            this.setState({isDateTimePickerVisible:true})
    }
    hideDateTimePicker = () => {
            this.setState({isDateTimePickerVisible:false})
    }
    handleDatePicked = (date) => {
            console.log('Date is picked:', date);
            this.hideDateTimePicker();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={this.showDateTimePicker}>
                    <Text>Show Date Time </Text>
                </TouchableOpacity>

                <DateTimePicker isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker} />

            </View>
        );
    }
}

export default DateTimeComponent;
