 class FormComponent extends React.Component {

  constructor( props ){
    super(props);
  }

  render(){
    onSubmit = this.props.onSubmit;
    return (
      <div className="list-block inset">
        <ul>
          {
            React.Children.map( this.props.children, ( child )=> <div><hr/><li> {child} </li></div>)
          }
        </ul>
        <p><a className="button button-round button-fill button-big" onClick={ onSubmit }>Save Patient</a></p>
      </div>
    )
  }
}
  
this.Form = FormComponent;

