export default {
    plugins: [
        [
          "umi-plugin-react",
          {
            antd: true,
            dva: true
          }
        ]
      ],


    routes:[
        {path:"/login", component:"./login"},
        {
            path:"/",
            component:"../layouts",
            routes:[//prop.children
                {path:"/",component:"./goods/index"},
                {
                    path:"/about",
                    component:"./about",
                    Routes:["./routes/PrivateRoute.js"]
                },
                {
                    path:"/users",
                    component:"./users"},
                {
                    component: "./404"
                }
            ]
        },
        {
            component: "./404"
        }
    ]
}