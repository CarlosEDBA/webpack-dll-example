import React, { Component } from 'react'
import styled from 'styled-components'


export default class Text extends Component {
	constructor(props) {
		super(props)

		this.state = {
			position: (props.static && 'static !important') || (props.absolute && 'absolute !important') || 'relative !important'
		}
	}

	render() {
		const CustomText = styled.p`
			display: ${this.props.display ? this.props.display : 'block'};
			position: ${this.state.position && this.state.position};
			top: ${this.props.top ? this.props.top : 'auto'};
			left: ${this.props.left ? this.props.left : 'auto'};
			right: ${this.props.right ? this.props.right : 'auto'};
			bottom: ${this.props.bottom ? this.props.bottom : 'auto'};
			padding-top: ${this.props.paddingTop ? this.props.paddingTop : 'initial'};
			padding-left: ${this.props.paddingLeft ? this.props.paddingLeft : 'initial'};
			padding-right: ${this.props.paddingRight ? this.props.paddingRight : 'initial'};
			padding-bottom: ${this.props.paddingBottom ? this.props.paddingBottom : 'initial'};
			width: ${this.props.width ? this.props.width : 'auto'};
			height: ${this.props.height ? this.props.height : 'auto'};
			margin: ${this.props.margin ? this.props.margin : '0px'};
			color: ${this.props.color ? this.props.color : '#000'};
			font-family: ${this.props.fontFamily ? this.props.fontFamily + ', Arial, sans-serif'  : 'Calibri Regular, sans-serif'};
			font-size: ${this.props.fontSize && this.props.fontSize};
			font-weight: ${this.props.fontWeight && this.props.fontWeight};
			text-align: ${this.props.align ? this.props.align : 'left'};
			vertical-align: ${this.props.verticalAlign ? this.props.verticalAlign : 'top' };
		`

		return (
			<CustomText>{this.props.children}</CustomText>
		)
	}
}

