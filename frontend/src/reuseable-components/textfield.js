import React, {Component} from 'react';

function getTextWidth(value = "") {
    return (value.length * 7.66)
}

class Textfield extends Component {
    state = {
        focus: false
    }

    onFocus = (event) => {
        this.setState({focus: true})
    }

    onBlur = (event) => {
        this.setState({focus: false})
    }


    render() {
        const {onChange, error, label, name, type, isHidden, autoFocus, onClick, value} = this.props;
        return (
            <div className="mb2">
                <div
                    className={error ? "mdc-text-field mdc-text-field--outlined w-100 mdc-text-field--invalid" : this.state.focus ? "mdc-text-field mdc-text-field--outlined w-100 mdc-text-field--focused" : "mdc-text-field mdc-text-field--outlined w-100"}
                    data-mdc-auto-init="MDCTextField">
                    <input className="mdc-text-field__input"
                           id="text-field-hero-input"
                           name={name}
                           onChange={onChange}
                           autoFocus={!!autoFocus}
                           type={type}
                           value={value}
                           onFocus={this.onFocus}
                           onBlur={this.onBlur}
                           formNoValidate
                    />
                    {name.includes("password") &&
                    <button
                        id={name}
                        className="mdc-icon-button"
                        style={{marginTop: "4px"}}
                        onClick={onClick}>
                        <i className="material-icons mdc-icon-button__icon">{isHidden ? "visibility" : "visibility_off"}</i>
                    </button>
                    }
                    <div
                        className={this.state.focus || value ? "mdc-notched-outline mdc-notched-outline--upgraded mdc-notched-outline--notched" : "mdc-notched-outline mdc-notched-outline--upgraded"}>
                        <div className="mdc-notched-outline__leading"/>
                        <div className="mdc-notched-outline__notch"
                             style={this.state.focus ? {width: getTextWidth(label) + "px"} : value.length > 0 ? {width: getTextWidth(label) + "px"} : {}}>
                            <label htmlFor="text-field-hero-input"
                                   id={"label"}
                                   className={this.state.focus || value ? "mdc-floating-label mdc-floating-label--float-above" : "mdc-floating-label"}>{label}</label>
                        </div>
                        <div className="mdc-notched-outline__trailing"/>
                    </div>

                </div>
                <div className="mdc-text-field-helper-line">
                    <div className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg"
                         id="my-helper-id" aria-hidden="true">
                        {error}
                    </div>
                </div>
            </div>
        );
    }
}


export default Textfield;
