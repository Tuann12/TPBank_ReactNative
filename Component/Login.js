import { TouchableOpacity, View, Text, TextInput, Image, StyleSheet } from 'react-native';

function Login({ navigation }) {
    return (
        <View style={{ backgroundColor: '#F7E9FF' }}>
            <View style={{ width: 330, margin: 'auto' }}>
                <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image style={{ width: 148, height: 38 }} source={require('../assets/logotpbank.webp')} />
                    <TouchableOpacity
                        style={{
                            width: 70,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: '#E8DCF2',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 15, fontWeight: 700, color: '#00000' }}>VL</Text>
                        <Image
                            style={{ width: 30, height: 30, marginLeft: 9 }}
                            source={require('../assets/vietnam.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 500,
                        margin: 'auto',
                        marginTop: 30,
                        color: '#00000',
                    }}
                >
                    TP Bank xin chào Bạn!
                </Text>
                <View style={{ marginTop: 50 }}>
                    <View
                        style={{
                            width: 330,
                            height: 50,
                            backgroundColor: '#434767EB',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 5,
                        }}
                    >
                        <Image
                            style={{ width: 32, height: 32, marginLeft: 10 }}
                            source={require('../assets/user.png')}
                        />
                        <TextInput
                            placeholder="Tên đăng nhập"
                            style={{
                                width: 250,
                                height: 50,
                                fontSize: 15,
                                fontWeight: 400,
                                color: '#F0EEEE',
                                marginLeft: 10,
                            }}
                        />
                        <Image
                            style={{ width: 32, height: 32, marginRight: 10 }}
                            source={require('../assets/information.png')}
                        />
                    </View>
                    <View
                        style={{
                            width: 330,
                            height: 50,
                            backgroundColor: '#434767EB',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 5,
                            marginTop: 15,
                        }}
                    >
                        <Image
                            style={{ width: 32, height: 32, marginLeft: 10, tintColor: 'white' }}
                            source={require('../assets/khoa.png')}
                        />
                        <TextInput
                            placeholder="Mật khẩu"
                            style={{
                                width: 250,
                                height: 50,
                                fontSize: 15,
                                fontWeight: 400,
                                color: '#F0EEEE',
                                marginLeft: 10,
                            }}
                        />
                        <Image
                            style={{ width: 32, height: 32, marginRight: 10 }}
                            source={require('../assets/eye.png')}
                        />
                    </View>
                </View>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: '#FF9900',
                        margin: 'auto',
                        marginTop: 30,
                        marginBottom: 30,
                    }}
                >
                    Không đăng nhập được?
                </Text>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyTabs')}
                        style={{
                            width: 330,
                            height: 50,
                            borderRadius: 30,
                            backgroundColor: '#4722B0',
                            marginBottom: 15,
                        }}
                    >
                        <Text style={{ color: '#FF9900', margin: 'auto', fontSize: 15, fontWeight: 600 }}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 330, height: 50, borderRadius: 30, backgroundColor: '#CEAEE8' }}>
                        <Text style={{ color: '#000000', margin: 'auto', fontSize: 15, fontWeight: 600 }}>
                            Mở tài khoản online
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, marginBottom: 25 }}
                >
                    <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 20, backgroundColor: '#E8DCF2' }}>
                        <Image
                            style={{ width: 40, height: 40, margin: 'auto' }}
                            source={require('../assets/icons8-security-configuration-30.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 20, backgroundColor: '#E8DCF2' }}>
                        <Image
                            style={{ width: 40, height: 40, margin: 'auto' }}
                            source={require('../assets/location.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 20, backgroundColor: '#E8DCF2' }}>
                        <Image style={{ width: 40, height: 40, margin: 'auto' }} source={require('../assets/qr.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 20, backgroundColor: '#E8DCF2' }}>
                        <Image
                            style={{ width: 40, height: 40, margin: 'auto' }}
                            source={require('../assets/support.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                    <Text style={{ fontSize: 14, fontWeight: 400, color: '#000000' }}>Smart OTP</Text>
                    <Text style={{ fontSize: 14, fontWeight: 400, color: '#000000' }}>Điểm GD</Text>
                    <Text style={{ fontSize: 14, fontWeight: 400, color: '#000000' }}>QR Pay</Text>
                    <Text style={{ fontSize: 14, fontWeight: 400, color: '#000000' }}>Trợ giúp</Text>
                </View>
            </View>
        </View>
    );
}

export default Login;
