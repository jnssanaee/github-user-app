import React from 'react';

function Container(renderRes) {
    const resObject = renderRes.renderRes;
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="areaJson">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">User</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Bio</th>
                                    <th scope="col">Github</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{resObject.login}</td>
                                    <td>{resObject.location}</td>
                                    <td>{resObject.bio}</td>
                                    <td>{resObject.url}</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container