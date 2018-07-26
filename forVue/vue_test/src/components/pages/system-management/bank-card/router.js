

export const 
    bankCardrouters = [

        {
            path: '/bankCard/bankCard',
            name: 'lock',
            component: resolve => require(['pages/system-management/bank-card/bankCard'], resolve),
        },
        {
            path: '/bankCard/thirdPartyPayment',
            name: 'lock',
            component: resolve => require(['pages/system-management/bank-card/thirdPartyPayment'], resolve),
        }
    ]

