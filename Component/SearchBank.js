import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function SearchBank({ navigation }) {
    return (
        <View style={{ width: '100%', backgroundColor: '#201729', height: '100%' }}>
            <View style={{ width: 359, marginHorizontal: 'auto' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('TransferMoney')}>
                        <Image style={{ width: 25, height: 25 }} source={require('../assets/icons8-delete-24.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginLeft: 90 }}>
                        Chọn ngân hàng
                    </Text>
                </View>
                <View
                    style={{
                        width: 353,
                        height: 56,
                        borderRadius: 10,
                        backgroundColor: '#473A54',
                        flexDirection: 'row',
                        marginHorizontal: 'auto',
                        marginVertical: 20,
                    }}
                >
                    <Image
                        style={{ width: 32, height: 32, marginVertical: 'auto', marginLeft: 15, marginRight: 5 }}
                        source={require('../assets/search.png')}
                    />
                    <TextInput
                        style={{ width: 300, height: 56, color: '#AA96BD', fontSize: 15, fontWeight: 400 }}
                        placeholder="Tìm kiếm"
                    />
                </View>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#555061',
                    }}
                >
                    <Image
                        style={{ width: 50, height: 50, margin: 10, borderRadius: 50 }}
                        source={require('../assets/banner1.jpg')}
                    />
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>MB BANK, MB</Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, color: '#FFFFFF' }}>Ngân hàng quân đội</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SearchBank;
