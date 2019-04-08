import React, { Component } from 'react'
import styled from 'styled-components'


export default class Link extends Component {
	constructor(props) {
		super(props)

		this.state = {
			position: (props.static && 'static !important') || (props.absolute && 'absolute !important') || 'relative !important'
		}
	}

	render() {
		const CustomLink = styled.a`
			display: ${this.props.display ? this.props.display : 'block'};
			position: ${this.state.position && this.state.position};
			top: ${this.props.top ? this.props.top + '  !important' : 'auto'};
			left: ${this.props.left ? this.props.left + '  !important' : 'auto'};
			right: ${this.props.right ? this.props.right + '  !important' : 'auto'};
			bottom: ${this.props.bottom ? this.props.bottom + '  !important' : 'auto'};
			padding-top: ${this.props.paddingTop ? this.props.paddingTop + '  !important' : 'initial'};
			padding-left: ${this.props.paddingLeft ? this.props.paddingLeft + '  !important' : 'initial'};
			padding-right: ${this.props.paddingRight ? this.props.paddingRight + '  !important' : 'initial'};
			padding-bottom: ${this.props.paddingBottom ? this.props.paddingBottom + '  !important' : 'initial'};
			width: ${this.props.width ? this.props.width + '  !important' : 'auto'};
			height: ${this.props.height ? this.props.height + '  !important' : 'auto'};
			margin: ${this.props.margin ? this.props.margin + '  !important' : '0px'};
			color: ${this.props.color ? this.props.color + '  !important' : '#000'};
			background-color: ${this.props.backgroundColor ? this.props.backgroundColor + '  !important' : '#FFF'};
			background-image: ${this.props.backgroundImage ? "url('" + this.props.backgroundImage + "');" + '  !important' : ''};
			background-repeat: ${this.props.backgroundRepeat ? this.props.backgroundRepeat + '  !important' : 'no-repeat'};
			background-size: ${this.props.backgroundSize ? this.props.backgroundSize + '  !important' : 'contain'};
			font-family: ${this.props.fontFamily ? this.props.fontFamily + ', Arial, sans-serif'  : 'Calibri Regular, sans-serif'};
			font-size: ${this.props.fontSize && this.props.fontSize};
			font-weight: ${this.props.fontWeight && this.props.fontWeight};
			text-decoration: none;
			text-align: ${this.props.align ? this.props.align : 'left'};
			vertical-align: ${this.props.verticalAlign ? this.props.verticalAlign : 'top' };
		`

		const WIDTH = (this.props.width !== undefined) ? this.props.width.split('px')[0] : ''
		const HEIGHT = (this.props.height !== undefined) ? this.props.height.split('px')[0] : ''

		return (
			<CustomLink width={WIDTH} height={HEIGHT} href={this.props.href} target="_blank">{this.props.children}</CustomLink>
		)
	}
}

