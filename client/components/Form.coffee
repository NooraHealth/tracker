###
# Input Class
###
this.Form = React.createClass
  render: ()->
    <div class="list-block inset">
      <ul>
        {this.state.formFields.map
        <hr/>
        <li></li>
      </ul>
      <p><a class="button button-round button-fill button-big">Save Patient</a></p>
    </div>
  
Form.NumberInput = React.createClass
  render: ()->
      <div className="item-content">
        <div className="item-media"><i className={this.props.icon}></i></div>
        <div className="item-inner">
          <div className="item-input">
            <input type="number" id={this.props.id} name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>

Form.Radio = React.createClass
  render: ()->
    <label className="label-radio item-content">
      <input type="radio" id={this.props.id} name={this.props.name} value={this.props.value} />
      <div className="item-media">
        <i className="icon icon-form-radio"></i>
      </div>
      <div className="item-inner">
        <div className="item-title">{this.props.title}</div>
      </div>
    </label>


Form.Checkbox = React.createClass
  render: ()->
      <label className="label-checkbox item-content">
        <input type="checkbox" id={this.props.id} name={this.props.name} value={this.props.value} />
        <div className="item-media">
          <i className="icon icon-form-checkbox"></i>
        </div>
        <div className="item-inner">
          <div className="item-title">{this.props.title}</div>
        </div>
      </label>
    
