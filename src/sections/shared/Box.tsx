import React from "react"

interface ISharedBox {
    element:any
}
const SharedBox: React.FC<ISharedBox> = ({ element }) => {

    return(
                    <div
                        style={{
                        position: 'relative',
                        backgroundColor: 'white',
                        padding: '20px',
                        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                        display: 'flex',           // Use flexbox
                        justifyContent: 'center',  // Center horizontally
                        alignItems: 'center',      // Center vertically
                        flexDirection: 'column',   // Align items in a column
                        width: '200px', // Adjust as needed
                        height: '150px' // Adjust as needed
                        }}
                    >
                    
                    {element}   
                        {/* Top-left half border */}
                        <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '50%',
                            height: '50%', // Adjust to cover half the box
                            borderTop: '4px solid black', // Adjust border size and color
                            borderLeft: '4px solid black', // Adjust border size and color
                            borderRight: '4px solid transparent', // Make right border transparent
                            borderBottom: '4px solid transparent', // Make bottom border transparent
                            boxSizing: 'border-box',
                        }}
                        ></div>

                       
                        {/* Bottom-right half border */}
                        <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: '50%',
                            height: '50%', // Adjust to cover half the box
                            borderBottom: '4px solid black', // Adjust border size and color
                            borderRight: '4px solid black', // Adjust border size and color
                            borderLeft: '4px solid transparent', // Make left border transparent
                            borderTop: '4px solid transparent', // Make top border transparent
                            boxSizing: 'border-box',
                        }}
                        ></div>
                    </div>
    )
}
export default SharedBox;