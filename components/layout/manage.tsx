import React, { useState } from 'react'
import { NextPage } from 'next'

interface NewsFeedItemProps {
    user: string
  }

const manage: NextPage<NewsFeedItemProps> = (props) => {
    console.log(props);

    return (
        <>

            <main>{props.children}</main>

        </>
    )
}

export default manage

// import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import { NextPage } from 'next'

// const drawerWidth = 240;


// const manage = ({ children, isAuth, user }) => {

//     const [state, setState] = useState({
//         top: false,
//         left: false,
//         bottom: false,
//         right: false,
//     });

//     const toggleDrawer = (anchor: string, open: boolean) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }

//         setState({ ...state, [anchor]: open });
//     };


//     const drawer = (
//         <div >
//           asfasf
//         </div >
//     );

//     return (
//         <>
//             <AppBar position="fixed">
//                 <Toolbar className="toolbar-app-bar">
//                     <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
//                         <IconButton onClick={toggleDrawer('left', true)} edge="start" className="" color="inherit" aria-label="menu">
//                             {/* <MenuIcon /> */}
//                         </IconButton>
//                     </Box>
//                     <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
//                         <Typography variant="h6" noWrap>
//                             {/* <Link to="/" style="text-uppercase">Storytelling</Link> */}
//                         </Typography>
//                     </Box>
//                     {/* {isAuth && !logout ?
//                         <div className="box-header">
//                             <ButtonPopper type="language" user={user}></ButtonPopper>
//                             <ButtonPopper type="avatar" user={user}></ButtonPopper>
//                         </div> :
//                         <div className="box-header">
//                             <Link to="/auth/login" style="">Login</Link>&nbsp; / &nbsp;<Link to="/auth/register" style="">Register</Link>
//                         </div>
//                     } */}

//                 </Toolbar>
//             </AppBar>

//             <Drawer
//                 anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}
//                 sx={{
//                     display: { xs: 'block', sm: 'none' },
//                     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                 }}

//             >
//                 {/* {drawer} */}
//             </Drawer>

//             <Drawer
//                 anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}
//                 variant={"permanent"}
//                 sx={{
//                     display: { xs: 'none', sm: 'block' },
//                     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                 }}

//             >
//                 <Toolbar />
//                 {drawer}
//             </Drawer>

//         </>
//     )
// }



// export default manage