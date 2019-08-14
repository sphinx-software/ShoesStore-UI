class ProviderUser {
    constructor(axiosConfig) {
        this.axiosConfig = axiosConfig;
    };

    registerUser(infoUser) {
        return this.axiosConfig.post('/users', {
            user: infoUser.userName
        })
            .then(res => res.data)
            .catch(err => console.log(err))
    };

    getUsers(infoUser) {
        return this.axiosConfig.get('/users')
            .then(res => res.data)
            .catch(err => console.log(err))
    };
}

export default ProviderUser;
