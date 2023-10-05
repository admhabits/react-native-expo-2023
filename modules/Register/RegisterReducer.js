export const RegisterReducers = (state, action) => {
    switch (action.type) {
        case 'nama':
            return { ...state, nama: action.payload };

        case 'email':
            return { ...state, email: action.payload };

        case 'kategori':
            return { ...state, kategori: action.payload };

        case 'username':
            return { ...state, username: action.payload };

        case 'dokumen':
            return { ...state, dokumen: action.payload };

        case 'surat':
            return { ...state, surat: action.payload };

        case 'password':
            return { ...state, password: action.payload };
        default:
            return state;
    }

}