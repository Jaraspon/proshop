var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener('resize', function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
});


// if (isMobile.any()) {
//     console.log('vh mobile', vh); //po -> 8.1, le -> 3.7
//     let resize = true;

//     window.addEventListener("orientationchange", function (event) {




//         console.log('or mobile', vh, event.target.screen.orientation.angle);
//         // window.addEventListener('resize', function () {
//         //     vh = window.innerHeight * 0.01;
//         //     document.documentElement.style.setProperty("--vh", `${vh}px`);

//         // });
//         if (event.target.screen.orientation.angle == 0) {
//             window.addEventListener('resize', function () {
//                 if (resize) {
//                     console.log("test", resize);
//                     vh = window.innerHeight * 0.01;
//                     document.documentElement.style.setProperty("--vh", `${vh}px`);
//                     resize = false;
//                 }
//             });
//         }

//         // if (event.target.screen.orientation.angle == 90) {
//         //     document.documentElement.style.setProperty("--vh", `${vh}px`);

//         //     po = window.innerHeight * 0.01;
//         //     console.log("le", le);
//         //     vh = le
//         //     document.documentElement.style.setProperty("--vh", `${vh}px`);

//         // }



//         // if (event.target.screen.orientation.angle == 0) {
//         //     le = window.innerHeight * 0.01;
//         //     console.log("po", window.innerHeight);
//         //     vh = po
//         //     document.documentElement.style.setProperty("--vh", `${vh}px`);

//         // }

//         // document.documentElement.style.setProperty("--vh", `${vh}px`);





//     });

// } else {
//     window.addEventListener('resize', function () {
//         let vh = window.innerHeight * 0.01;
//         document.documentElement.style.setProperty("--vh", `${vh}px`);
//     });
// }