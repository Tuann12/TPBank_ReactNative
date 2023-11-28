import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function Transaction({ navigation }) {
    return (
        <View style={{ backgroundColor: '#201729' }}>
            <View style={{ width: '100%', marginHorizontal: 'auto' }}>
                <Image
                    style={{ width: 148, height: 38, marginHorizontal: 'auto', marginVertical: 20 }}
                    source={require('../assets/logotpbank.webp')}
                />
            </View>
            <View
                style={{
                    width: 359,
                    backgroundColor: '#291C36',
                    borderRadius: 20,
                    marginHorizontal: 'auto',
                    marginBottom: 20,
                }}
            >
                <Image
                    style={{ width: 80, height: 80, marginHorizontal: 'auto', marginVertical: 20 }}
                    source={require('../assets/icons8-check-32.png')}
                />
                <View
                    style={{
                        marginHorizontal: 'auto',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginBottom: 10 }}>
                        Giao Dịch Thanh Công!
                    </Text>
                    <Text style={{ fontSize: 25, fontWeight: 500, color: '#FFFFFF', marginBottom: 10 }}>
                        1,000,000 VND
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: 400,
                            color: '#75669F',
                            textAlign: 'center',
                            marginBottom: 20,
                        }}
                    >
                        Cảm ơn Bạn đã cùng TPBank chuyển khoản <br /> miễn phí trọn đời 💜
                    </Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#6B329F' }}>
                            <Image
                                style={{ width: 30, height: 30, margin: 'auto' }}
                                source={require('../assets/icontpbank.webp')}
                            />
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFFFFF' }}>NGUYEN THANH TUAN</Text>
                            <Text style={{ fontSize: 15, fontWeight: 500, color: '#75669F', marginTop: 3 }}>
                                123456789
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                        <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#6B329F' }}>
                            <Image
                                style={{ width: 30, height: 30, margin: 'auto' }}
                                source={require('../assets/icontpbank.webp')}
                            />
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFFFFF' }}>NGUYEN THANH TUAN</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, fontWeight: 500, color: '#75669F', marginTop: 3 }}>
                                    123456789 |
                                </Text>
                                <Text style={{ fontSize: 15, fontWeight: 500, color: '#75669F', marginTop: 3 }}>
                                    VIETCOMBANK
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginLeft: 15, marginTop: 20, marginRight: 15 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#75669F' }}>Mã giao dịch</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF' }}>32142121312AB</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#75669F' }}>Nội dung</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF' }}>
                            Nguyen thanh tuan chuyen tien
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#75669F' }}>Thời gian</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF' }}>
                            16:26:11, Ngày 25/11/2023
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#75669F' }}>Cách thức</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF' }}>Chuyển nhanh Napas 247</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 'auto', marginBottom: 15 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('TransferMoney')}
                    style={{ backgroundColor: '#473A54', width: 160, height: 56, marginRight: 15, borderRadius: 5 }}
                >
                    <Text style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF', margin: 'auto' }}>
                        Giao Dịch Khác
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Trang chủ')}
                    style={{ backgroundColor: '#6B329F', width: 185, height: 56, borderRadius: 5 }}
                >
                    <Text style={{ fontSize: 18, fontWeight: 700, color: '#FF9900', margin: 'auto' }}>Trang Chủ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Transaction;
