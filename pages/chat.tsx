import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/components/layout/DefaultLayout';

import { getMiddleware } from '@/src/middleware'

const Chat = (props: any) => {
    const { auth } = props;
    return (
        <>
            <Layout user={auth?.user} isAuth={auth?.isAuth} showLayout={true}>
                Chat
            </Layout>

        </>
    )
}

Chat.propTypes = {

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


export default Chat
