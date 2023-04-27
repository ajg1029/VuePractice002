console.log('permission.js')

import router from "@/router";

console.log(router)

// router.beforeEach(guard => {
//     console.log(guard)
// })

router.beforeEach((to, from, next) => {
    // console.log(to.path)
    // console.log(from.path)
    // let testToken = localStorage.getItem('storeTestToken')

    // console.log(testToken)
    // if (!testToken) {
    //     // console.log('asdf')
    //     // localStorage.setItem('storeTestToken', 'deon')
    //     return next('/about')
    // }
    return next()
})