import React, { Component } from 'react'
import styled from 'styled-components'

import '../assets/scss/reset.scss'
import '../assets/scss/email.scss'


export default class Email extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const BodyTable = styled.table`
			padding: 0;
			width: 100% !important;
			height: 100% !important;
			margin: 0;
			background-color: #FFF;
		`

		const BodyCell = styled.td`
			display: table-cell;
			text-align: center;
			vertical-align: top;
			padding: 0;
			width: 100% !important;
			height: 100% !important;
			margin: 0;
		`

		const EmailBody = styled.table`
			text-align: ${this.props.align ? this.props.align : 'left'};
			vertical-align: ${this.props.verticalAlign ? this.props.verticalAlign : 'top' };
			background-color: ${this.props.backgroundColor ? this.props.backgroundColor : '#FFF' };
			border: none;
			border-radius: 4px;
			border-collapse: separate;
		`

		const WIDTH = (this.props.width !== undefined) ? this.props.width.split('px')[0] : ''
		const HEIGHT = (this.props.height !== undefined) ? this.props.height.split('px')[0] : ''

		
		return (
			<BodyTable border="0" cellPadding="0" cellSpacing="0" height="100%" width="100%">
				<tbody>
					<tr>
						<BodyCell>
							<EmailBody width={WIDTH} height={HEIGHT} innerRef={((table) => this.table = table)} border="0" cellPadding="0" cellSpacing="0">
								<tbody>
									<tr>
										<td>
											<center style={{
												minWidth: `${WIDTH} !important`,
												width: '100% !important',
												wordBreak: 'keep-all',
												hyphens: 'none', }}>
												{this.props.children}
											</center>
										</td>
									</tr>
								</tbody>
							</EmailBody>
						</BodyCell>
					</tr>
				</tbody>
			</BodyTable>
		)
	}
}

