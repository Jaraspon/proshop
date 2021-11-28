import axios from '@axios'
import Cookies from 'js-cookie'
// import getConfig from 'next/config'
// const env = getConfig().publicRuntimeConfig;


export const pathLoginStore = (login: boolean) => async (dispatch: any, subscribe: any) => {
    console.log('login');

    var data = login
    console.log(data);

    dispatch({ type: 'PATH_LOGIN', payload: data })
    return subscribe({ type: 'PATH_LOGIN', payload: data })
}

export const loginStore = (isLogin: boolean) => async (dispatch: any, subscribe: any) => {
    console.log('login');

    var data = isLogin
    console.log(data);

    dispatch({ type: 'LOGIN', payload: data })
    return subscribe({ type: 'LOGIN', payload: data })
}

export const logoutStore = () => async (dispatch: any, subscribe: any) => {
    console.log('logout');

    var data = false
    console.log(data);
    Cookies.remove('pethouse_auth')
    dispatch({ type: 'LOGOUT', payload: data })
    return subscribe({ type: 'LOGOUT', payload: data })
}


export const loadCategory = () => async (dispatch: any, subscribe: any) => {
    const items = [
       {
          title: 'อาหารเสริมและผลิตภัณฑ์สุขภาพ',
          image: 'https://cf.shopee.co.th/file/ddc87b4f4f19072eea1818f8962b7ed8_tn',
          to: 'อาหารเสริมและผลิตภัณฑ์สุขภาพ'
       }, {
          title: 'นาฬิกาและแว่นตา',
          image: 'https://cf.shopee.co.th/file/a859e702e260173d2700cdd77130a5f5_tn',
          to: 'นาฬิกาและแว่นตา'
       },
       {
          title: 'รองเท้าผู้ชาย',
          image: 'https://cf.shopee.co.th/file/67efa2ec30bb8ee1a28b2a20105b4cc6_tn',
          to: 'รองเท้าผู้ชาย'
       }, {
          title: 'คอมพิวเตอร์และแล็ปท็อป',
          image: 'https://cf.shopee.co.th/file/26f82d41b5b1ba23bcf80c2e22c7755f_tn',
          to: 'คอมพิวเตอร์และแล็ปท็อป'
       },
       {
          title: 'รองเท้าผู้หญิง',
          image: 'https://cf.shopee.co.th/file/f3c98b0848f0fb2eaa08ba7da5ae7d7b_tn',
          to: 'รองเท้าผู้หญิง'
       },
       {
          title: 'เครื่องใช้ในบ้าน',
          image: 'https://cf.shopee.co.th/file/59cc0b3efca84d9371db2974be89c560_tn',
          to: 'เครื่องใช้ในบ้าน'
       },
       {
          title: 'เกมและฮ๊อบบี้',
          image: 'https://cf.shopee.co.th/file/1081b4c9cf8b67996381430b91b2cb0a_tn',
          to: 'เกมและฮ๊อบบี้'
       },
       {
          title: 'ของเล่น สินค้าแม่และเด็ก',
          image: 'https://cf.shopee.co.th/file/66ca76a8c799ba9a63bd7c00e6b5b3ad_tn',
          to: 'ของเล่น สินค้าแม่และเด็ก'
       },
       {
          title: 'กระเป๋า',
          image: 'https://cf.shopee.co.th/file/02d8833a261004d90492fc556a44043b_tn',
          to: 'กระเป๋า'
       },
       {
          title: 'เครื่องใช้ไฟฟ้าภายในบ้าน',
          image: 'https://cf.shopee.co.th/file/c687179d223e5fbbea56c2fa66d3d7a3_tn',
          to: 'เครื่องใช้ไฟฟ้าภายในบ้าน'
       },
       {
          title: 'สัตว์เลี้ยง',
          image: 'https://cf.shopee.co.th/file/3e535ae67b4d970c916eacc6e226fd5b_tn',
          to: 'สัตว์เลี้ยง'
       },
       {
          title: 'อาหารและเครื่องดื่ม',
          image: 'https://cf.shopee.co.th/file/c1a6aa4de75441e660cfc7210f4be7da_tn',
          to: 'อาหารและเครื่องดื่ม'
       },
       {
          title: 'เครื่องเขียน หนังสือ และดนตรี',
          image: 'https://cf.shopee.co.th/file/a27e5d14fa032e9284b59b12037877e1_tn',
          to: 'เครื่องเขียน หนังสือ และดนตรี'
       },
       {
          title: 'อื่นๆ',
          image: 'https://cf.shopee.co.th/file/359c085cd839ef83879918556f0b9a66_tn',
          to: 'อื่นๆ'
       }
    ];
    dispatch({ type: 'CATEGORY_PRODUCTS', payload: items })
    return subscribe({ type: 'CATEGORY_PRODUCTS', payload: items })
 }