import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/src/templates/DefaultLayout';

import { getMiddleware } from '@/src/utils/middleware'

const Profile = (props: any) => {
    const { auth } = props;
    return (
        <>
            <Layout user={auth?.user} isAuth={auth?.isAuth} showLayout={true}>
                profile
                
            </Layout>

        </>
    )
}

Profile.propTypes = {

}

export async function getServerSideProps(context: any) {
    let data = {
        token: null,
        isAuth: false,
        user: {}
    }

    // let data
    if (context.req.headers.cookie) {
        await getMiddleware(context.req.headers.cookie).then((res) => {
            data = res
        })
    }
    return {
        props: { auth: data }
    }
}


export default Profile
