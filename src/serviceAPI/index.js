import instance     from "../configAxios";
import UserRegister from "./ProviderUser";

const  register =   new UserRegister(instance);

export {
    register
};
