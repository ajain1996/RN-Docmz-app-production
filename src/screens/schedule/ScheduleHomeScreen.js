import React, { useState } from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import { Colors } from '../../utils/Colors';
import SelectScheduleCalendar from './SelectScheduleCalendar';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SelectScheduleScreen from './SelectScheduleScreen';

export default function ScheduleHomeScreen({ navigation }) {

    const [tabValue, setTabValue] = useState("TeleConsule");

    return (
        <View style={{ alignItems: 'center', backgroundColor: '#fff', height: '100%' }}>
            <View style={{ width: '100%', paddingHorizontal: 20 }}>
                <HeaderComponent text="Dr. Co Ekaterine" showIcon={true} />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                <TouchableOpacity style={{
                    width: 150, height: 38, borderWidth: 1, borderColor: Colors.BLUE2,
                    backgroundColor: tabValue === "TeleConsule" ? Colors.BLUE2 : Colors.WHITE,
                    justifyContent: 'center', alignItems: 'center',
                    borderTopLeftRadius: 50, borderBottomLeftRadius: 50,
                }} onPress={() => { setTabValue("TeleConsule") }}>
                    <Text style={{ color: '#000' }}>TeleConsule</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: 150, height: 38, borderWidth: 1, borderColor: Colors.BLUE2,
                    backgroundColor: tabValue === "InPerson" ? Colors.BLUE2 : Colors.WHITE,
                    justifyContent: 'center', alignItems: 'center',
                    borderTopRightRadius: 50, borderBottomRightRadius: 50,
                }} onPress={() => { setTabValue("InPerson") }}>
                    <Text style={{ color: '#000' }}>In Person</Text>
                </TouchableOpacity>
            </View>

            {tabValue === "TeleConsule"
                ? <SelectScheduleScreen />
                : <SelectScheduleCalendar />}

        </View>
    )
}


{/*  */ }
