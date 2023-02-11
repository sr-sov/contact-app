import React from "react";

//Class Component example

class AddContact extends React.Component{
    render(){
        return(
            <div className="ui main">
                <h2> Add Contact </h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name"/>
                    </div>
                    <div className="field">
                        <label>email</label>
                        <input type="text" name="email" placeholder="email"/>
                    </div>
                </form>
            </div>
        );
        
    }

}

export default AddContact;