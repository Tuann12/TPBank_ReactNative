import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function TransferMoney({ navigation, route }) {
    const dataBank = route.params;

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#201729', width: '100%' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: 85,
                        borderBottomWidth: 1,
                        borderColor: '#555061',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity onPress={() => navigation.navigate('Trang chủ')}>
                        <Image
                            style={{ width: 36, height: 36, marginLeft: 15 }}
                            source={require('../assets/icons8-arrowleft-30.png')}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: 600,
                            color: '#FFFFFF',
                            marginLeft: 80,
                        }}
                    >
                        Chuyển tiền
                    </Text>
                </View>
                <View style={{ width: 359, marginHorizontal: 'auto' }}>
                    <View
                        style={{
                            width: 359,
                            height: 120,
                            backgroundColor: '#291C36',
                            borderRadius: 10,
                            marginHorizontal: 'auto',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 20,
                        }}
                    >
                        <View
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 50,
                                backgroundColor: '#6B329F',

                                marginLeft: 15,
                            }}
                        >
                            <Image
                                style={{ width: 35, height: 35, margin: 'auto' }}
                                source={require('../assets/icontpbank.webp')}
                            />
                        </View>
                        <View style={{ marginRight: 75 }}>
                            <Text style={{ fontSize: 15, fontWeight: 500, color: '#75669F' }}>Nguồn tiền</Text>
                            <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFFFFF' }}>01234567899</Text>
                            <Text style={{ fontSize: 20, fontWeight: 500, color: '#FFFFFF' }}>5,000,000 VND</Text>
                        </View>
                        <Image
                            style={{ width: 24, height: 24, marginVertical: 'auto', marginRight: 15 }}
                            source={require('../assets/arrowright.png')}
                        />
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: 600, color: '#FFFFFF', marginVertical: 20 }}>
                        CHUYỂN TIỀN ĐẾN
                    </Text>

                    <View>
                        {dataBank === undefined ? (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('SearchBank')}
                                style={{
                                    width: 359,
                                    height: 57,
                                    borderWidth: 1,
                                    borderColor: '#555061',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 20,
                                }}
                            >
                                <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: 500, color: '#FFFFFF' }}>
                                    Chọn ngân hàng
                                </Text>
                                <Image
                                    style={{ marginRight: 15, width: 20, height: 20 }}
                                    source={require('../assets/arrowdown.png')}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('SearchBank')}
                                style={{
                                    width: 359,
                                    height: 57,
                                    borderWidth: 1,
                                    borderColor: '#555061',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 20,
                                }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{
                                            width: 40,
                                            height: 40,
                                            margin: 10,
                                            borderRadius: 50,
                                            resizeMode: 'contain',
                                        }}
                                        source={dataBank.logo}
                                    />
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 700,
                                                color: '#FFFFFF',
                                                marginVertical: 'auto',
                                            }}
                                        >
                                            {dataBank.code}, {dataBank.shortName}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}

                        <TextInput
                            placeholder="Số tài khoản"
                            style={{
                                width: 359,
                                height: 57,
                                borderWidth: 1,
                                borderColor: '#555061',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 20,
                                fontSize: 16,
                                fontWeight: 500,
                                color: '#FFFFFF',
                                paddingLeft: 15,
                            }}
                        />
                        <TextInput
                            placeholder="Số tiền"
                            style={{
                                width: 359,
                                height: 57,
                                borderWidth: 1,
                                borderColor: '#555061',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 20,
                                fontSize: 16,
                                fontWeight: 500,
                                color: '#FFFFFF',
                                paddingLeft: 15,
                            }}
                        />

                        <TextInput
                            placeholder="Nôi dung chuyển tiền"
                            style={{
                                width: 359,
                                height: 57,
                                borderWidth: 1,
                                borderColor: '#555061',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 20,
                                fontSize: 16,
                                fontWeight: 500,
                                color: '#FFFFFF',
                                paddingLeft: 15,
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Transaction')}
                            style={{
                                width: 359,
                                height: 56,
                                borderRadius: 10,
                                backgroundColor: '#473A54',
                                marginBottom: 20,
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 500, color: '#16151A', margin: 'auto' }}>
                                Tiếp tục{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default TransferMoney;
