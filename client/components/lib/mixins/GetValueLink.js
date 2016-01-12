var GetValueLinkMixin = {

  _getValueLink( props ) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    }
  },
};

this.GetValueLink = GetValueLinkMixin;
