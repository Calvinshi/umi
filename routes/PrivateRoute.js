import Redirect from 'umi/redirect'
import {connect} from 'dva'

export default connect(state => ({isLogin: !!state.user.token}))(props =>{
    if (!props.isLogin) {
        console.log(props)

        return (
            <Redirect
            to = {{
                pathname: "/login",
                state:{from: props.localtion.pathname }
            }}
            />
        );
    }
    return (
        <div>
            <div>Privateroute (routes/Privateroute.js)</div>
            {Props.children}
        </div>
    )
});