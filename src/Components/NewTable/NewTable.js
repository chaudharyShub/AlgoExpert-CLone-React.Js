import React from 'react';
import './NewTable.css';
import { tableContent } from '../../Details';
import algoLogo from '../../images/algoLogo.png';

function NewTable() {

    const green = {
        backgroundColor: '#ebf7ee'
    }
    const red = {
        backgroundColor: '#ffe5e5'
    }

    return (
        <div className='tableMain'>
            <h1>A Better Way to Prep for Coding Interviews.</h1>
            <div className='tableContent'>
                <div className='table'>
                    <p></p>
                    <p>Cracking the Coding Interview</p>
                    <p>LeetCode</p>
                    <p></p>

                    <p className='algoLogoImage'
                        style={{
                            color: 'white',
                            backgroundColor: '#626ee3',
                            borderRadius: '0 4px 0 0',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            height: '2em',
                            width: '20%'
                            // inline CSS to overRight ".table p" CSS
                        }}
                    ><img src={algoLogo} />AlgoExpert
                    </p>
                </div>
                {
                    tableContent.map((element, index) => (
                        <div key={index} className='table'>

                            <p>{element.first}</p>

                            <p className='symbol' style={element.second ? green : red}
                            >{element.second
                                ? <p>&#10004;</p>
                                : <p>&#10006;</p>}
                            </p>

                            <p className='symbol' style={element.third ? green : red}
                            >{element.third
                                ? <p>&#10004;</p>
                                : <p>&#10006;</p>}
                            </p>

                            <p className='symbol' style={(element.fourth ? green : red)}
                            >{element.fourth
                                ? <p>&#10004;</p>
                                : <p>&#10006;</p>}
                            </p>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default NewTable;
