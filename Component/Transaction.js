import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useData } from './DataContext';

function Transaction({ navigation, route }) {
    const { dataAccount } = useData();

    const { dataBankLogo, dataBankShortName, accountNumber, amountOfMoney, contentTransfer, accountName, randomCode } =
        route.params;

    const getCurrentDateTime = () => {
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toLocaleString();
        return formattedDateTime;
    };
    const currentTime = getCurrentDateTime();

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
                        {amountOfMoney} VND
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
                        {dataAccount.map((item) => (
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFFFFF' }}>
                                    NGUYEN THANH TUAN
                                </Text>
                                <Text style={{ fontSize: 15, fontWeight: 500, color: '#75669F', marginTop: 3 }}>
                                    {item.number}
                                </Text>
                            </View>
                        ))}
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                        <View>
                            <Image
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#FFFFFF',
                                    width: 50,
                                    height: 50,
                                    margin: 'auto',
                                    borderRadius: 50,
                                    resizeMode: 'contain',
                                    backgroundColor: '#FFFFFF',
                                }}
                                source={dataBankLogo}
                            />
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFFFFF' }}>{accountName}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, fontWeight: 500, color: '#75669F', marginTop: 3 }}>
                                    {accountNumber} |
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: 500,
                                        color: '#75669F',
                                        marginTop: 3,
                                        marginLeft: 3,
                                    }}
                                >
                                    {dataBankShortName}
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
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF' }}>{randomCode}</Text>
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
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF' }}>{contentTransfer}</Text>
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
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF' }}>{currentTime}</Text>
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
                    onPress={() => navigation.navigate('Trang chủ')}
                    style={{ backgroundColor: '#6B329F', width: 359, height: 56, borderRadius: 5 }}
                >
                    <Text style={{ fontSize: 18, fontWeight: 700, color: '#FF9900', margin: 'auto' }}>Trang Chủ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Transaction;
