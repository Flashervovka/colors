import React,{Component} from 'react';
import InputMask from 'react-input-mask';

class InputField extends Component {

    onAddColor(){
        let len = this.inputRef.value.length;
        if(len === 3 || len === 4 || len === 6)this.props.onAddColor("#"+this.inputRef.value);
    }

    render() {
        return (
            <div className="inputField">
                <InputMask inputRef={(input)=>{this.inputRef = input}}  mask="******" maskChar="" placeholder="HEX значение" />
                <button onClick={this.onAddColor.bind(this)}>Добавить</button>
            </div>
        );
    }
}

export default InputField;