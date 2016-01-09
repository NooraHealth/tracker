class Input extends BaseComponent {

  constructor( props ){
    super(props);
    this.state = {
      value: ""
    }
    this._bind('handleChange');
  }

  handleChange( event ){
    return this.setState({ value: event.target.value.substr(0, 10) });
  }

  render(){
    var { title, icon, ...inputProps } = this.props;
    var value = this.state.value;
    return (
      <div className="item-content">
        <div className="item-media"><i className={ icon }></i></div>
        <div className="item-inner">
          <div className="item-input">
            <input { ...inputProps } value={ value } onChange={ this.handleChange } />
          </div>
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  value: React.PropTypes.string,
  icon: React.PropTypes.string,
}

this.Form.Input = Input;
