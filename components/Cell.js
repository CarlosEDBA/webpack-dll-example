import React, { Component } from 'react'
import styled from 'styled-components'


export default class Cell extends Component {
	constructor(props) {
		super(props)

		this.state = {
			position: (props.static && 'static !important') || (props.absolute && 'absolute !important') || 'relative !important'
		}

		this.table = null
	}

	componentDidMount() {
		if (this.props.align) this.table.setAttribute('align', this.props.align)
		if (this.props.verticalAlign) this.table.setAttribute('valign', this.props.verticalAlign)
	}

	render() {
		const StyledCell = styled.td`
			display: table-cell;
			padding-top: ${this.props.paddingTop ? this.props.paddingTop + '  !important' : 'initial'};
			padding-left: ${this.props.paddingLeft ? this.props.paddingLeft + '  !important' : 'initial'};
			padding-right: ${this.props.paddingRight ? this.props.paddingRight + '  !important' : 'initial'};
			padding-bottom: ${this.props.paddingBottom ? this.props.paddingBottom + '  !important' : 'initial'};
			background-color: ${this.props.backgroundColor ? this.props.backgroundColor + '  !important' : ''};
			background-image: ${this.props.backgroundImage ? "url('" + this.props.backgroundImage + "');" + '  !important' : ''};
			background-repeat: ${this.props.backgroundRepeat ? this.props.backgroundRepeat + '  !important' : 'no-repeat'};
			background-size: ${this.props.backgroundSize ? this.props.backgroundSize + '  !important' : 'contain'};
			text-align: ${this.props.align ? this.props.align : 'left'};
			vertical-align: ${this.props.verticalAlign ? this.props.verticalAlign : 'top' };
		`

		const FlexibleContainer = styled.table`
			display: ${this.props.inline ? 'inline-block' : 'table'};
			position: ${this.state.position && this.state.position};
			width: ${this.props.width ? this.props.width + '  !important' : 'auto'};
			height: ${this.props.height ? this.props.height + '  !important' : 'auto'};
			background-color: ${this.props.backgroundColor ? this.props.backgroundColor + '  !important' : ''};
			background-image: ${this.props.backgroundImage ? "url('" + this.props.backgroundImage + "');" + '  !important' : ''};
			background-repeat: ${this.props.backgroundRepeat ? this.props.backgroundRepeat + '  !important' : 'no-repeat'};
			background-size: ${this.props.backgroundSize ? this.props.backgroundSize + '  !important' : 'contain'};
			text-align: ${this.props.align ? this.props.align : 'left'};
			vertical-align: ${this.props.verticalAlign ? this.props.verticalAlign : 'top' };
		`

		const FlexibleContainerCell = styled.td`
			display: table-cell;
			width: ${this.props.width ? this.props.width + '  !important' : 'auto'};
			height: ${this.props.height ? this.props.height + '  !important' : 'auto'};
			text-align: ${this.props.align ? this.props.align : 'left'};
			vertical-align: ${this.props.verticalAlign ? this.props.verticalAlign : 'top' };
			background-color: ${this.props.backgroundColor ? this.props.backgroundColor + '  !important' : ''};
			background-image: ${this.props.backgroundImage ? "url('" + this.props.backgroundImage + "');" + '  !important' : ''};
			background-repeat: ${this.props.backgroundRepeat ? this.props.backgroundRepeat + '  !important' : 'no-repeat'};
			background-size: ${this.props.backgroundSize ? this.props.backgroundSize + '  !important' : 'contain'};
		`

		const WIDTH = (this.props.width !== undefined) ? this.props.width.split('px')[0] : ''
		const HEIGHT = (this.props.height !== undefined) ? this.props.height.split('px')[0] : ''

		return (
			<StyledCell width={WIDTH}>
				<FlexibleContainer width={WIDTH} height={HEIGHT} innerRef={((table) => this.table = table)} border="0" cellPadding="0" cellSpacing="0">
					<tbody>
						<tr>
							<FlexibleContainerCell width={WIDTH} height={HEIGHT}>
								{this.props.children}
							</FlexibleContainerCell>
						</tr>
					</tbody>
				</FlexibleContainer>
			</StyledCell>
		)
	}
}

