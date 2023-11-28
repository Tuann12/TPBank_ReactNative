import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

function Transfer({ navigation }) {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#201729', width: '100%' }}>
                <View style={{ height: 85, borderBottomColor: '#555061', borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 25, fontWeight: 600, margin: 'auto', color: '#FFFFFF' }}>
                        Chuyển khoản
                    </Text>
                </View>
                <View style={{ height: 242, backgroundColor: '#291C36', marginBottom: 10 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 30,
                            marginTop: 20,
                        }}
                    >
                        <TouchableOpacity>
                            <Image
                                style={{ width: 50, height: 50, marginLeft: 15, marginBottom: 5 }}
                                source={require('../assets/icontpbank.webp')}
                            />
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: '#FEFBFB',
                                    textAlign: 'center',
                                    marginLeft: 15,
                                }}
                            >
                                Trong <br /> TPBank
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('TransferMoney')}>
                            <Image
                                style={{ width: 50, height: 50, marginLeft: 8, marginBottom: 5 }}
                                source={require('../assets/bank.png')}
                            />
                            <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB', textAlign: 'center' }}>
                                Liên Ngân <br /> Hàng
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 50, height: 50, marginLeft: 15, marginBottom: 5 }}
                                source={require('../assets/card.png')}
                            />
                            <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB', textAlign: 'center' }}>
                                Qua Thẻ ATM
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 10 }}>
                            <Image
                                style={{ width: 50, height: 50, marginLeft: 10, marginBottom: 5 }}
                                source={require('../assets/magnetic-card.png')}
                            />
                            <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB', textAlign: 'center' }}>
                                CT Theo <br /> Danh Sách
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginBottom: 30,
                        }}
                    >
                        <TouchableOpacity style={{ marginLeft: 5 }}>
                            <Image
                                style={{ width: 50, height: 50, marginLeft: 15, marginBottom: 5 }}
                                source={require('../assets/earth.png')}
                            />
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: '#FEFBFB',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                Chuyển Tiền <br /> Du Học
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 25 }}>
                            <Image
                                style={{ width: 50, height: 50, marginBottom: 5 }}
                                source={require('../assets/stock.png')}
                            />
                            <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB', marginLeft: 5 }}>
                                Chứng <br /> khoán
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: '#FFFFFF',
                        marginBottom: 20,
                        marginTop: 30,
                        marginLeft: 20,
                    }}
                >
                    XEM DANH SÁCH
                </Text>
                <View style={{ backgroundColor: '#291C36', marginBottom: 100 }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderColor: '#555061',
                            height: 60,
                        }}
                    >
                        <Image
                            style={{ width: 35, height: 35, marginLeft: 20 }}
                            source={require('../assets/book.png')}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 500, color: '#FEFBFB', marginRight: 70 }}>
                            Mẫu chuyển tiền đã lưu
                        </Text>
                        <Image
                            style={{ width: 24, height: 24, marginRight: 20 }}
                            source={require('../assets/arrowright.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderColor: '#555061',
                            height: 60,
                        }}
                    >
                        <Image
                            style={{ width: 35, height: 35, marginLeft: 20 }}
                            source={require('../assets/calendar.png')}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 500, color: '#FEFBFB', marginRight: 50 }}>
                            Lệnh chuyển tiền theo lịch
                        </Text>
                        <Image
                            style={{ width: 24, height: 24, marginRight: 20 }}
                            source={require('../assets/arrowright.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 60,
                        }}
                    >
                        <Image
                            style={{ width: 35, height: 35, marginLeft: 20 }}
                            source={require('../assets/contact.png')}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 500, color: '#FEFBFB', marginRight: 170 }}>
                            Danh bạ
                        </Text>
                        <Image
                            style={{ width: 24, height: 24, marginRight: 20 }}
                            source={require('../assets/arrowright.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default Transfer;
