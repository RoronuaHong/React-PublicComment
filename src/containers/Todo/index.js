import React from "react";
import { render } from "react-dom";

import "../../scss/index";

import Input from "../../components/Input";
import List from "../../components/List";

class Todo extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            todos: []
        }

        this.submitFn = this.submitFn.bind(this);
        this.deleteFn = this.deleteFn.bind(this);
    }

    //提交
    submitFn(value) {

        //数据的长度设置为id
        const id = this.state.todos.length;

        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        });
    }

    //根据id进行删除
    deleteFn(id) {
        const data = this.state.todos;

        this.setState({
            todos: data.filter(item => {
                if(id !== item.id) {
                    return item;
                }
            })
        });
    }

    render() {
        return (
            <div>
                <p>asdasd</p>
                <Input submitFn={ this.submitFn }/>
                <List todos={ this.state.todos } deleteFn={ this.deleteFn } />
            </div>
        );
    }
}

export default Todo;