import React,{Component} from 'react';
import InputMask from 'react-input-mask';

class InputField extends Component {

    state={
        value:''
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }
    
    onAddColor(){
        let len = this.state.value.length;
        if(len === 3 || len === 4 || len === 6){
            this.props.onAddColor("#"+this.state.value);
            this.setState({value:''});
        }
    }

    render() {
        return (
            <div className="inputField">
                <InputMask  value={this.state.value} onChange={this.onChange}  mask="******" maskChar="" placeholder="HEX значение" />
                <button onClick={this.onAddColor.bind(this)}>Добавить</button>
            </div>
        );
    }
}

export default InputField;