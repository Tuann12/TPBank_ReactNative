import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const formatMoney = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const DataProvider = ({ children }) => {
    const [dataAccount, setDataAccount] = useState([
        {
            number: 1297129410,
            money: 5000000,
        },
    ]);

    const [account, setAccount] = useState([
        {
            username: 'tuann12',
            password: 12345,
        },
    ]);

    const updateAccount = (newData) => {
        setAccount(newData);
    };

    const updateDataAccount = (newData) => {
        setDataAccount(newData);
    };

    return (
        <DataContext.Provider value={{ dataAccount, updateDataAccount, account, updateAccount, formatMoney }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
