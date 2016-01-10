class Input extends BaseComponent {

  render(){
    console.log(this.props);
    var { title, icon, valueLink, ...inputProps } = this.props;
    console.log(valueLink);
    console.log("Reredning input");
    return (
      <div className="item-content">
        <div className="item-media"><i className={ icon }></i></div>
        <div className="item-inner">
          <div className="item-input">
            <input { ...inputProps } valueLink={ valueLink } />
          </div>
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  value: React.PropTypes.string,
  icon: React.PropTypes.string,
  valueLink: React.PropTypes.func
}

this.Form.Input = Input;
