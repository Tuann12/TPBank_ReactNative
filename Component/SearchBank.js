import { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';

function SearchBank({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [bank, setBank] = useState([]);

    useEffect(() => {
        fetch('https://api.vietqr.io/v2/banks')
            .then((response) => response.json())
            .then((json) => setBank(json.data));
    }, []);

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filteredData = bank.filter((item) => item.shortName.toLowerCase().includes(text.toLowerCase()));
        setBank(filteredData.slice(0, 10));
    };

    return (
        <View style={{ width: '100%', backgroundColor: '#201729' }}>
            <View style={{ width: 359, marginHorizontal: 'auto', backgroundColor: '#201729' }}>
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
                        style={{
                            width: 32,
                            height: 32,
                            marginVertical: 'auto',
                            marginLeft: 15,
                            marginRight: 5,
                        }}
                        source={require('../assets/search.png')}
                    />
                    <TextInput
                        value={searchQuery}
                        onChangeText={handleSearch}
                        style={{ width: 300, height: 56, color: '#AA96BD', fontSize: 15, fontWeight: 400 }}
                        placeholder="Tìm kiếm"
                    />
                </View>
                <View>
                    <FlatList
                        data={bank}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('TransferMoney', {
                                            logo: item.logo,
                                            code: item.code,
                                            shortName: item.shortName,
                                        })
                                    }
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderBottomWidth: 1,
                                        borderColor: '#555061',
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            margin: 10,
                                            borderRadius: 50,
                                            resizeMode: 'contain',
                                        }}
                                        source={item.logo}
                                    />
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>
                                            {item.code}, {item.shortName}
                                        </Text>
                                        <Text style={{ fontSize: 14, fontWeight: 500, color: '#FFFFFF' }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

export default SearchBank;
