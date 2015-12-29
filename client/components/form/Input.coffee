###
# Input Class
###
Form.Input = React.createClass
  render: ()->
    return <input {...props}>

Form.NumberInput = React.createClass
  render: ()->
      <div className="item-content">
        <div className="item-media"><i className={this.props.icon}></i></div>
        <div className="item-inner">
          <div className="item-input">
            <input type="number" id={this.props.id} name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} icon={this.props.icon}/>
          </div>
        </div>
      </div>

Form.Radio = React.createClass
  render: ()->
    <label className="label-radio item-content">
      <input type="radio" id={this.props.id} name={this.props.name} value={this.props.value}>
      <div className="item-media">
        <i className="icon icon-form-radio"></i>
      </div>
      <div className="item-inner">
        <div className="item-title">{this.props.title}</div>
      </div>
    </label>


Form.Checkbox = React.createClass
  render: ()->
      <label class="label-checkbox item-content">
        <input type="checkbox" id={this.props.id} name={this.props.name} value={this.props.value}>
        <div class="item-media">
          <i class="icon icon-form-checkbox"></i>
        </div>
        <div class="item-inner">
          <div class="item-title">{this.props.title}</div>
        </div>
      </label>
    
