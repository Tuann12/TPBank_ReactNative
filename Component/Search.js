import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

function Search() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#201729', width: '100%' }}>
                <View style={{ height: 85, borderBottomColor: '#555061', borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 25, fontWeight: 600, margin: 'auto', color: '#FFFFFF' }}>Tra cứu</Text>
                </View>
                <View style={{ width: 360, marginHorizontal: 'auto' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginTop: 15, marginRight: 20 }}>
                            <TouchableOpacity
                                style={{
                                    width: 170,
                                    height: 100,
                                    backgroundColor: '#291C36',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 15,
                                }}
                            >
                                <Image
                                    style={{ width: 40, height: 40, marginBottom: 10 }}
                                    source={require('../assets/bank.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB' }}>Tài khoản</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 170,
                                    height: 100,
                                    backgroundColor: '#291C36',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 15,
                                }}
                            >
                                <Image
                                    style={{ width: 40, height: 40, marginBottom: 10 }}
                                    source={require('../assets/stack-of-money.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB' }}>Khoản vay</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 170,
                                    height: 100,
                                    backgroundColor: '#291C36',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 15,
                                }}
                            >
                                <Image
                                    style={{ width: 40, height: 40, marginBottom: 10 }}
                                    source={require('../assets/calendar.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB' }}>
                                    Lệnh chuyển tiền
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <TouchableOpacity
                                style={{
                                    width: 170,
                                    height: 100,
                                    backgroundColor: '#291C36',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 15,
                                }}
                            >
                                <Image
                                    style={{ width: 40, height: 40, marginBottom: 10 }}
                                    source={require('../assets/piggy-bank.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB' }}>Tiết kiệm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 170,
                                    height: 100,
                                    backgroundColor: '#291C36',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 15,
                                }}
                            >
                                <Image
                                    style={{ width: 40, height: 40, marginBottom: 10 }}
                                    source={require('../assets/card.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB' }}>Thẻ tín dụng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 170,
                                    height: 100,
                                    backgroundColor: '#291C36',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 15,
                                }}
                            >
                                <Image
                                    style={{ width: 40, height: 40, marginBottom: 10 }}
                                    source={require('../assets/folder.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#FEFBFB' }}>
                                    Thông tin tổng hợp
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: 360, height: 153, backgroundColor: '#291C36', marginBottom: 100 }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 600,
                                color: '#FFFFFF',
                                textAlign: 'center',
                                marginTop: 10,
                            }}
                        >
                            Tổng Quan Tài Chính
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 500,
                                color: '#B2B2B2',
                                textAlign: 'center',
                                marginTop: 10,
                            }}
                        >
                            Theo dõi tài chính cá nhân của Bạn thường <br /> xuyên để kiểm soát chi tiêu hợp lý nhé!
                        </Text>
                        <TouchableOpacity
                            style={{
                                width: 180,
                                height: 40,
                                borderRadius: 20,
                                backgroundColor: '#6B329F',
                                marginHorizontal: 'auto',
                                marginTop: 10,
                            }}
                        >
                            <Text style={{ fontSize: 15, fontWeight: 600, color: '#FFFFFF', margin: 'auto' }}>
                                Trải Nghiệm Ngay
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Search;
