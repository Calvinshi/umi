import React, { Component } from "react";
import { Card, Row, Col, Skeleton, Icon } from "antd";
import { connect } from "dva";
import { TagSelect } from "ant-design-pro";

@connect(
    state => ({
        courses: state.goods.courses,
        tags: state.goods.tags,
        loading: state.loading
    }),
    {
        getList:() => ({
            type: "goods/getList"
        })
    }
)
class Goods extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayCourses: new Array(8).fill({})
        };

    }
    componentDidMount() {
        this.props.getList()
    }
    
    tagSelectChange(tags, courses = this.props.courses){
        const displayCourses = tags.floatMap(tag => courses[tag]);
        this.setState({displayCourses})
    }
    render(){
        if (this.props.loading.models.goods) {
            return <div>Loading</div>

        }
        return (
            <div>
                <TagSelect onChange={this.tagSelectChange}>
                    {this.props.tags.map(tag => {
                        return (
                        <TagSelect.Option key={tag} value={tag}>
                            {tag}
                        </TagSelect.Option>
                        );
                    })}
                </TagSelect>
            </div>
        )
    }
}

export default Goods;