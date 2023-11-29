import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useData } from './DataContext';

function Home({ navigation }) {
    const { dataAccount } = useData();

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#201729', width: '100%' }}>
                <View style={{ width: 362, margin: 'auto' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: '#6B329F' }}>
                                <Image
                                    style={{ width: 35, height: 35, margin: 'auto' }}
                                    source={require('../assets/icontpbank.webp')}
                                />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFFFFF' }}>Xin chào</Text>
                                <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFFFFF' }}>
                                    NGUYEN THANH TUAN
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 'auto' }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 32, height: 32, marginRight: 20 }}
                                    source={require('../assets/search.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 32, height: 32 }}
                                    source={require('../assets/notification.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{
                            width: 362,
                            height: 167,
                            borderRadius: 20,
                            backgroundColor: '#2E283E',
                            marginTop: 50,
                            marginBottom: 30,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                marginTop: 10,
                                marginLeft: 20,
                                marginRight: 10,
                            }}
                        >
                            {dataAccount.map((item) => (
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFFFFF' }}>
                                        {item.number}
                                    </Text>
                                    <Text style={{ fontSize: 25, fontWeight: 600, color: '#FFFFFF' }}>
                                        {item.money} VND
                                    </Text>
                                </View>
                            ))}
                            <TouchableOpacity style={{ marginTop: 25, marginRight: 60 }}>
                                <Image style={{ width: 32, height: 32 }} source={require('../assets/closedeye.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: '#574D72',
                                    borderRadius: 50,
                                }}
                            >
                                <Image
                                    style={{ width: 25, height: 25, margin: 'auto' }}
                                    source={require('../assets/ellipsis.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                marginHorizontal: 32,
                                marginBottom: 10,
                                marginTop: 20,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => navigation.navigate('TransferMoney')}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 50,
                                    backgroundColor: '#574D72',
                                    marginLeft: 19,
                                }}
                            >
                                <Image
                                    style={{ width: 25, height: 25, margin: 'auto' }}
                                    source={require('../assets/arrow.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 50,
                                    backgroundColor: '#574D72',
                                    marginLeft: 19,
                                }}
                            >
                                <Image
                                    style={{ width: 25, height: 25, margin: 'auto' }}
                                    source={require('../assets/time.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#574D72' }}
                            >
                                <Image
                                    style={{ width: 25, height: 25, margin: 'auto' }}
                                    source={require('../assets/qr-white.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginHorizontal: 32,
                            }}
                        >
                            <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB' }}>Chuyển tiền</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB' }}>Tra cứu GD</Text>
                            <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB' }}>My QR</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 600, color: '#FFFFFF', marginBottom: 10 }}>
                            TÍNH NĂNG ƯU THÍCH
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 30,
                            }}
                        >
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 50, height: 50, marginLeft: 15 }}
                                    source={require('../assets/chat-room.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB', textAlign: 'center' }}>
                                    ChatPay
                                    <br />
                                    (Chuyển tiền)
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{ width: 50, height: 50 }} source={require('../assets/bill.png')} />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB', textAlign: 'center' }}>
                                    Hóa đơn
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{ width: 50, height: 50 }} source={require('../assets/phone.png')} />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB', textAlign: 'center' }}>
                                    Nạp ĐT
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 50, height: 50, marginLeft: 10 }}
                                    source={require('../assets/magnetic-card.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB', textAlign: 'center' }}>
                                    Quản lý thẻ
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 40,
                            }}
                        >
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 50, height: 50, marginLeft: 10 }}
                                    source={require('../assets/wallet-.png')}
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
                                    Ví điện tử
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 50, height: 50, marginLeft: 10 }}
                                    source={require('../assets/stack-of-money.png')}
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
                                    Khoản vay
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 50, height: 50, marginLeft: 10 }}
                                    source={require('../assets/piggy-bank.png')}
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
                                    Tiết kiệm
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 50, height: 50, marginLeft: 10 }}
                                    source={require('../assets/applepay.png')}
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
                                    Apple pay
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 'auto', marginBottom: 30 }}>
                            <Image
                                style={{ width: 20, height: 20, marginRight: 10 }}
                                source={require('../assets/arrowdown.png')}
                            />
                            <Text style={{ fontSize: 15, fontWeight: 600, color: '#FF9900' }}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{ width: 362, height: 167 }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 362, height: 167, borderRadius: 14 }}
                                    source={require('../assets/banner1.jpg')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: 100,
                                justifyContent: 'space-between',
                                marginHorizontal: 'auto',
                                marginTop: 15,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor: '#555061',
                                    borderRadius: 50,
                                }}
                            ></TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor: '#555061',
                                    borderRadius: 50,
                                }}
                            ></TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor: '#555061',
                                    borderRadius: 50,
                                }}
                            ></TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor: '#555061',
                                    borderRadius: 50,
                                }}
                            ></TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor: '#555061',
                                    borderRadius: 50,
                                }}
                            ></TouchableOpacity>
                        </View>
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 600,
                            margin: 'auto',
                            color: '#FFFFFF',
                            marginTop: 40,
                            marginBottom: 70,
                        }}
                    >
                        Chúc bạn một ngày đầy hứng khởi! 💜{' '}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Home;
