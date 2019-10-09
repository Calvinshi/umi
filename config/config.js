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
            routes:[
                {path:"/",component:"./goods/index"},

            ]
        }
    ]
}