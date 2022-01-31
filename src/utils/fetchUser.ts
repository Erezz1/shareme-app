// Obtencion de la informacion del usuario en el localStorage
export const fetchUser = () => {
    const userInfo = localStorage.getItem('userGoogle') !== undefined ? JSON.parse( localStorage.getItem('userGoogle') as string ) : localStorage.clear();
    return userInfo;
}
