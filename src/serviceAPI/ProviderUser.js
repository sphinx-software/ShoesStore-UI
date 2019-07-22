class ProviderUser {
    constructor(axiosConfig) {
        this.axiosConfig = axiosConfig;
    }

    registUser(infoUser) {
        return this.axiosConfig.post('/users', {
            // ...infoUser
            user: infoUser.userName
        })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getUsers(infoUser) {
        return this.axiosConfig.get('/users')
            .then((response) =>{
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export default ProviderUser;