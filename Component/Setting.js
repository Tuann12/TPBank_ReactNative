import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function Setting({ navigation }) {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#201729', width: '100%' }}>
                <View style={{ height: 85, borderBottomColor: '#555061', borderBottomWidth: 1, flexDirection: 'row' }}>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: 600,
                            color: '#FFFFFF',
                            marginVertical: 'auto',
                            marginLeft: 140,
                        }}
                    >
                        Cài đặt
                    </Text>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 32, height: 32, marginVertical: 'auto', marginLeft: 120 }}
                            source={require('../assets/notification.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 'auto' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginVertical: 20,
                            marginBottom: 25,
                            marginLeft: 20,
                        }}
                    >
                        <View
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 50,
                                backgroundColor: '#6B329F',
                                marginRight: 10,
                            }}
                        >
                            <Image
                                style={{ width: 35, height: 35, margin: 'auto' }}
                                source={require('../assets/icontpbank.webp')}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 600, color: '#FFFFFF', marginBottom: 5 }}>
                                Nguyen Thanh Tuan
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#0B4017',
                                    width: 177,
                                    height: 25,
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Image
                                    style={{ width: 15, height: 15, marginLeft: 10 }}
                                    source={require('../assets/verified.png')}
                                />
                                <Text style={{ fontSize: 12, fontWeight: 600, color: '#17B41D', marginRight: 10 }}>
                                    Đã hoàn thiện thông tin
                                </Text>
                            </View>
                        </View>
                        <Image
                            style={{ width: 24, height: 24, marginVertical: 'auto', marginLeft: 80 }}
                            source={require('../assets/arrowright.png')}
                        />
                    </View>

                    <View
                        style={{
                            backgroundColor: '#291C36',
                            width: 391,
                            height: 287,
                            borderTopWidth: 1,
                            borderColor: '#555061',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 30,
                                marginTop: 25,
                            }}
                        >
                            <TouchableOpacity style={{ marginLeft: 5 }}>
                                <Image
                                    style={{ width: 50, height: 50, marginLeft: 15, marginBottom: 5, marginLeft: 40 }}
                                    source={require('../assets/e-token.png')}
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
                                    Lấy mã Smart OTP <br /> từ eToken+
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 5 }}>
                                <Image
                                    style={{ width: 50, height: 50, marginLeft: 15, marginBottom: 5, marginLeft: 25 }}
                                    source={require('../assets/khoa.png')}
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
                                    Đổi mật khẩu <br /> tài khoản
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 25 }}>
                                <Image
                                    style={{ width: 50, height: 50, marginBottom: 5, marginLeft: 30 }}
                                    source={require('../assets/icons8-approve-30.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB', marginLeft: 5 }}>
                                    Đổi phương thức <br /> xác thực
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 30,
                            }}
                        >
                            <TouchableOpacity style={{ marginLeft: 5, marginLeft: 35 }}>
                                <Image
                                    style={{ width: 50, height: 50, marginLeft: 15, marginBottom: 5 }}
                                    source={require('../assets/help.png')}
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
                                    Trung tâm <br /> trợ giúp
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 5 }}>
                                <Image
                                    style={{ width: 50, height: 50, marginLeft: 15, marginBottom: 5 }}
                                    source={require('../assets/commercial.png')}
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
                                    Giới thiệu <br /> bạn bè
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 25, marginRight: 15 }}>
                                <Image
                                    style={{ width: 50, height: 50, marginBottom: 5 }}
                                    source={require('../assets/phonelink.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB', marginLeft: 5 }}>
                                    Thay đổi <br /> giao diện
                                </Text>
                            </TouchableOpacity>
                        </View>
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
                        onPress={() => navigation.navigate('Login')}
                        style={{
                            width: '100%',
                            height: 50,
                            backgroundColor: '#291C36',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            style={{ width: 30, height: 30, marginRight: 10 }}
                            source={require('../assets/icons8-logout-30.png')}
                        />
                        <Text style={{ fontSize: 15, fontWeight: 400, color: '#FF0000' }}>Đăng xuất</Text>
                    </TouchableOpacity>

                    <View
                        style={{
                            width: 350,
                            height: 160,
                            backgroundColor: '#291C36',
                            borderRadius: 10,
                            marginHorizontal: 'auto',
                            marginTop: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: 400,
                                color: '#FFFFFF',
                                marginHorizontal: 'auto',
                                marginTop: 10,
                            }}
                        >
                            Mức độ hài lòng về App TPBank?
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 270,
                                marginHorizontal: 'auto',
                                marginTop: 20,
                            }}
                        >
                            <TouchableOpacity
                                style={{ width: 40, height: 42, borderRadius: 50, backgroundColor: '#A9A6A6' }}
                            >
                                <Image
                                    style={{ width: 30, height: 30, margin: 'auto' }}
                                    source={require('../assets/stargrey.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ width: 40, height: 42, borderRadius: 50, backgroundColor: '#A9A6A6' }}
                            >
                                <Image
                                    style={{ width: 30, height: 30, margin: 'auto' }}
                                    source={require('../assets/stargrey.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ width: 40, height: 42, borderRadius: 50, backgroundColor: '#A9A6A6' }}
                            >
                                <Image
                                    style={{ width: 30, height: 30, margin: 'auto' }}
                                    source={require('../assets/stargrey.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ width: 40, height: 42, borderRadius: 50, backgroundColor: '#A9A6A6' }}
                            >
                                <Image
                                    style={{ width: 30, height: 30, margin: 'auto' }}
                                    source={require('../assets/stargrey.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ width: 40, height: 42, borderRadius: 50, backgroundColor: '#A9A6A6' }}
                            >
                                <Image
                                    style={{ width: 30, height: 30, margin: 'auto' }}
                                    source={require('../assets/stargrey.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <hr style={{ width: 343, color: '#555061', marginTop: 20 }}></hr>
                        <TouchableOpacity
                            style={{
                                marginHorizontal: 'auto',
                                marginTop: 8,
                            }}
                        >
                            <Text style={{ fontSize: 15, fontWeight: 600, color: '#FF9900' }}>Lịch sử đánh giá</Text>
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: 400,
                            color: '#A8A3A3',
                            marginHorizontal: 'auto',
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                    >
                        Phiên bản: 10.11.48
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Setting;
