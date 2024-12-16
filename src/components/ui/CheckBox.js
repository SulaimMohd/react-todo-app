// import React, {Component} from 'react';

// class CheckBox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             checked: this.props.checked
//         };
//     }

//     handleChange(e) {
//         const {checked} = e.target;

//         this.setState({checked});
//         this.props.onChange(checked);
//     }

//     render() {
//         return (<input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>);
//     }
// }

// export default CheckBox;
import React, { Component } from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked, // Tracks the checkbox state
            showDialog: false, // Tracks if the confirmation dialog is visible
            tempChecked: this.props.checked, // Temporary state for handling confirmation
            flag: false,
        };
    }

    // Handle checkbox state change
    handleChange(e) {
        const { checked } = e.target;

        // Open confirmation dialog before committing the change
        console.log('this is also', )
        if(!this.state.flag){this.setState({ tempChecked: checked, showDialog:true });}
        else(this.setState({tempChecked: checked, showDialog:false, flag:false}))
        
    }
   
    openModal(){
         this.setState({showDialog:!this.state.showDialog})
        
    }
    // Confirm the change
    handleConfirm = () => {
        const { tempChecked } = this.state;
        this.setState({
            checked: tempChecked, // Commit the new checkbox state
            showDialog: false,
            flag:true // Close the dialog
        });

        // Notify parent of the change
        this.props.onChange(tempChecked);
    };

    // Cancel the change
    handleCancel = () => {
        this.setState({
            tempChecked: this.state.checked, // Revert to the original state
            showDialog: false,
            flag:true});
    };

    renderModal(shoulRender){
        console.log(shoulRender)
        if(!shoulRender) return null
        return (
            <div className="confirmation-dialog-overlay">
                <div className="confirmation-dialog">
                    <p>Are you sure you want to mark this task as {this.state.checked ? 'Incomplete' : 'Completed'}?</p>
                    <div className="button-group">
                        <button onClick={() =>this.handleConfirm()} className="confirm-btn">Confirm</button>
                        <button onClick={() =>this.handleCancel()} className="cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { checked, showDialog } = this.state;

        return (
            <div onClick={()=> this.openModal('open')}>
                {/* Render the checkbox */}
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={this.handleChange.bind(this)}
                />

                {/* Render the confirmation dialog */}
                {showDialog && this.renderModal(showDialog)}
            </div>
        );
    }
}

export default CheckBox;

