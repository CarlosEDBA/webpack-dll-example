import React, { Component } from 'react'
import styled from 'styled-components'


export default class Image extends Component {
	constructor(props) {
		super(props)

		this.state = {
			position: (props.static && 'static !important') || (props.absolute && 'absolute !important') || 'relative !important'
		}
	}

	render() {
		const CustomImage = styled.img`
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
		`

		const WIDTH = (this.props.width !== undefined) ? this.props.width.split('px')[0] : ''
		const HEIGHT = (this.props.height !== undefined) ? this.props.height.split('px')[0] : ''

		return (
			<CustomImage width={WIDTH} height={HEIGHT} src={this.props.src} alt={this.props.alt}>{this.props.children}</CustomImage>
		)
	}
}

