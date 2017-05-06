import React from "react";
import { Link } from "react-router";
var Radium = require('radium');


class DashboardHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			refundPolicy: this.props.data.refundPolicy,
			refundPolicyCondition: this.props.data.refundPolicyCondition,
			refundPolicyInstruction: this.props.data.refundPolicyInstruction,
		};

    	this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	handleOptionChange = (index) => {
		this.setState({
			refundPolicy: index
		});	
    }
	render() {
		
		var style = {
			top: {
				logo:{
					backgroundImage: 'url('+ this.props.data.logo +')',
					WebKitBackgroundSize: 'cover',
					MozBackgroundSize: 'cover',
					OBackgroundSize: 'cover',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
					marginLeft: 'auto',
					marginRight: 'auto',
					backgroundColor: '#fff',
					width: '50px',
					height: '50px',
					marginTop: '30px',
				},
				name:{

				}
			},
			nameHolder:{
				base:{
					width: '100%',
					textAlign: 'center',
					backgroundColor: '#E3E3E3'
				},
				title:{
					fontWeight: '300',
					textAlign: 'left',
					fontSize: '24px',
					paddingTop: '15px',
					paddingBottom: '15px',
				}
			},
			subTitleHolder:{
				base: {
					width: '100%',
					textAlign: 'center',
					fontSize: '24px',
					fontWeight: '800',
					paddingTop: '15px',
					paddingBottom: '15px',
					marginTop: '30px',
					marginBottom: '30px'
				}
			},
			button: {
				halfButton: {
					container: {
						width: '100%',
						display: 'flex',
						justifyContent: 'center'
					},
					base: {
						width: '100%',
						maxWidth: '500px',
						height: '70px',
						color: '#fff',
						fontWeight: '700',
						fontSize: '24px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						':hover': {
							opacity: '0.7'
						}
					},
					inventoryIcon: {
						content: 'url(../../images/icons/dashboard/inventory.png)',
						height: '50px',
						marginRight: '10px'
					},
					greenBackground:{
						backgroundColor: '#55C289'
					},
					link: {
						margin: 'auto',
						maxWidth: '500px',
						width: '80%',
						textDecoration: 'none'
					}
					
				},
			},
			outerContainer:{
			   textAlign: 'center',
			   marginTop: '20px',
			},
			container:{
				width: '70%',
				maxWidth: '400px',

				verticalAlign: 'top',
				textAlign: 'center',
				margin:'auto'
			},
			subTitle:{
				fontSize: '18px',
				color: '#777',
				marginBottom: '15px'
			},
			option: {
				container: {
						width: '90%',
						maxWidth: '500px',
						justifyContent: 'center',
						marginLeft: 'auto',
						marginRight: 'auto',
						display: 'flex',
						},
						optionName:{
							fontWeight: '500',
							fontSize: '18px',
							color: '#555'
						},
						optionExplain:{
							fontWeight: '700',
							fontSize: '9px',
							color: '#555'
						},
						base: {
							cursor: 'pointer',
							backgroundColor: '#ffffff',
							width: '120px',
							justifyContent: 'center',
							alignItems: 'center',
							display: 'flex',
							padding: '5px',
							transition: 'background-color 0.3s ease-out'
						},
						selected: {
							backgroundColor: '#D8D8D8',
							width: '120px',
							justifyContent: 'center',
							alignItems: 'center',
							display: 'flex',
							padding: '5px',
							transition: 'background-color 0.3s ease-out'
						}
					},
				 textarea: {
				 	width: '100%',
					maxWidth: '380px',
				 	border: 'none',
				 	fontSize: '14px',
				 	height: '120px',
				 	padding: '10px',
				 	outline: 'none',
				 	resize: 'none'

				 },
				 p: {
				 	textAlign: 'center',
				 	fontSize: '18px',
				 	paddingTop: '10px',
				 	paddingBottom: '0px',
				 	category: {
				 		fontSize: '14px',
				 		color: '#6B6B6B'
				 	}
				 }
			
		};

			var textareaHolder = [];
			if(this.state.refundPolicy == 0){
				textareaHolder.push(
						<div key="textareaHolder" style={{ marginTop: '15px' }}>
									<h3 style={ style.subTitle }>Specify refund condition</h3>
									<textarea value={this.state.refundPolicyCondition} key="area1" onChange={this.onRefundConditionChange} style={[ style.textarea, { marginBottom: '15px' } ]} />
									<h3 style={ style.subTitle }>Enter refund instruction</h3>
									<textarea value={this.state.refundPolicyInstruction} onChange={this.onRefundInstruction} style={ style.textarea } />
						</div>

				);
			}
			return (
				<div style={{ width: '100%'}}>
					<div key="title"style={[ style.nameHolder.base, style.nameHolder.title ]}>
						Let's Start
					</div>
					<div style={ style.top.logo }>
					</div>
					<p style={ style.p }>{this.props.data.name}</p>
					<p key="category" style={[ style.p, style.p.category ]}>{this.props.data.category}</p>
					<div style={ style.subTitleHolder.base }>
					1. Add a New Product to Inventory
					</div>
					
					<div style={style.button.halfButton.container}>					
						<Link style={style.button.halfButton.link} to={`/dashboard/${this.props.data.symbol}/product/add/type`}>
						<div key="inventory" style={[style.button.halfButton.base, style.button.halfButton.greenBackground]}>
							<img style={style.button.halfButton.inventoryIcon}/>
							Add a new Product
						</div>
						</Link>
					</div>
					
					<div style={ style.subTitleHolder.base }>
					2. Setup Refund Policy
					</div>
					<div style={ style.outerContainer }>
						<div style={ style.container }>
							<h3 style={ style.subTitle }>Do you offer refund service?</h3>
							<div style={ style.option.container }>
								<div 
							         key="0"
							         onClick={ () => this.handleOptionChange(0)} 
							         style={this.state.refundPolicy == 0 ? style.option.selected : style.option.base}>
							         <div>
							         <p style={style.option.optionName}>Yes</p>
							         <p style={style.option.optionExplain}>Highly Recommanded</p>
							         </div>
							    </div>
							    <div 
							         key="1"
							         onClick={ () => this.handleOptionChange(1)} 
							         style={this.state.refundPolicy == 1 ? style.option.selected : style.option.base}>
							         <div>
							         <p style={style.option.optionName}>No</p>
							         </div>
							    </div>
						    </div>
						    {textareaHolder}
						</div>
					</div>
					<div style={ style.subTitleHolder.base }>
						Owner's Responsibilities
					</div>
					<div>
						<p style={ style.p }>1. Blah blah</p>
						<p style={ style.p }>1. Blah blah blah</p>
						<p style={ style.p }>1. Blah blah yes yes</p>
					</div>
				</div>
			);

		
		
	}
}

module.exports = Radium(DashboardHome);