var FormComponent = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func
  },

  defaultProps(){
    return {
      onSubmit: function(){},
      children: [] 
    }
  },

  getInitialState(){ return {} },

  render(){
    onSubmit = this.props.onSubmit;
    children = React.Children.map( this.props.children, function( child ){
      return <div><hr/><li> {child} </li></div>
    });

    return (
      <div className="list-block inset">
        <ul>
          { children }
        </ul>
        <p><a key='submitbutton' className="button button-round button-fill button-big" onClick={ onSubmit }>Save Patient</a></p>
      </div>
    )
  }
});
  
this.Form = FormComponent;

