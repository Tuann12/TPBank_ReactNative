import { useState, useEffect } from 'react';
import { useData } from './DataContext';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

function TransferMoney({ navigation, route }) {
    const dataBank = route.params;
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [amountOfMoney, setAmountOfMoney] = useState('');
    const [contentTransfer, setContentTransfer] = useState('Nguyen Thanh Tuan chuyen tien');
    const { dataAccount, updateDataAccount } = useData();
    const [randomCode, setRandomCode] = useState('');

    const handleTransferMoney = () => {
        const currentMoney = dataAccount[0].money;
        const transferAmount = parseInt(amountOfMoney, 10);

        if (currentMoney >= transferAmount) {
            const newMoney = currentMoney - transferAmount;
            const updatedDataAccount = { ...dataAccount[0], money: newMoney };
            updateDataAccount([updatedDataAccount]);

            return newMoney;
        } else {
            console.error('Không đủ số dư');
            return currentMoney;
        }
    };

    const generateRandomCode = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }
        return code;
    };

    useEffect(() => {
        handleGenerateCode();
    }, []);

    const handleGenerateCode = () => {
        const newRandomCode = generateRandomCode(12);
        setRandomCode(newRandomCode);
    };

    const handleAccountNumber = (text) => {
        if (/^\d+$/.test(text) || text === '') {
            setAccountNumber(text);
        }
    };

    const handleAccountName = (text) => {
        if (/^[a-zA-Z\s]+$/.test(text) || text === '') {
            const uppercaseText = text.toUpperCase();
            setAccountName(uppercaseText);
        }
    };

    const handleAmountOfMoney = (text) => {
        if (/^\d+$/.test(text) || text === '') {
            setAmountOfMoney(text);
        }
    };

    return (
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
                        height: 80,
                        backgroundColor: '#291C36',
                        borderRadius: 10,
                        marginHorizontal: 'auto',
                        flexDirection: 'row',
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
                    {dataAccount.map((item) => (
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontSize: 15, fontWeight: 500, color: '#FFFFFF' }}>{item.number}</Text>
                            <Text style={{ fontSize: 20, fontWeight: 500, color: '#FFFFFF' }}>{item.money} VND</Text>
                        </View>
                    ))}
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
                                        borderWidth: 1,
                                        borderColor: '#FFFFFF',
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
                        onChangeText={handleAccountNumber}
                        value={accountNumber}
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
                        onChangeText={handleAccountName}
                        value={accountName}
                        placeholder="Tên tài khoản"
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
                        onChangeText={handleAmountOfMoney}
                        value={amountOfMoney}
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
                        onChangeText={(text) => setContentTransfer(text)}
                        value={contentTransfer}
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
                    {dataBank !== undefined &&
                    accountNumber.length > 0 &&
                    amountOfMoney <= dataAccount[0].money &&
                    amountOfMoney.length > 0 &&
                    contentTransfer.length > 0 ? (
                        <TouchableOpacity
                            onPress={() => {
                                handleGenerateCode();
                                handleTransferMoney();
                                navigation.navigate('Transaction', {
                                    dataBankLogo: dataBank !== undefined ? dataBank.logo : null,
                                    dataBankShortName: dataBank !== undefined ? dataBank.shortName : null,
                                    accountNumber,
                                    accountName,
                                    amountOfMoney,
                                    contentTransfer,
                                    randomCode,
                                });
                            }}
                            style={{
                                width: 359,
                                height: 56,
                                borderRadius: 10,
                                backgroundColor: '#FF9900',
                                marginBottom: 20,
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF', margin: 'auto' }}>
                                Tiếp tục
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            disabled
                            style={{
                                width: 359,
                                height: 56,
                                borderRadius: 10,
                                backgroundColor: '#473A54',
                                marginBottom: 20,
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF', margin: 'auto' }}>
                                Tiếp tục
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
}

export default TransferMoney;
