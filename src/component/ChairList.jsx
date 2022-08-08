import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from "./style.module.css"
import clsx from 'clsx'
export class ChairList extends Component {
    handleChair=(chair)=>{
        try {
            const action = {
                seats:chair
            };
            this.props.dispatch({
                type: "UPDATE_BILL_LIST",
                payload: action,
            });
            
        } catch (error) {
    
        }
    }
    render() {
        return (
            <div style={{width:"100%"}}>
                <h3 className='text-white mb-5'>Lựa Chọn Ghế Phim</h3>
                <table>
                    <tbody>
                        <tr className='text-white'>
                            <td />
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                        </tr>
                    </tbody>
                    {this.props.chairList.map((item) => {
                        if (item.hang !== "") {
                            return (
                                <tbody className={clsx(styles.chair)}>
                                    <tr>
                                        <td>{item.hang}</td>
                                        {
                                            item.danhSachGhe.map((itemChair) => {    
                                                return (
                                                    <td>
                                                        <input type="checkbox" 
                                                        onClick={()=>{this.handleChair(itemChair.soGhe)}}
                                                        className={clsx(styles.seats)} defaultValue={itemChair.soGhe}  />
                                                    </td>
                                                )

                                            })
                                        }
                                    </tr>
                                </tbody>

                            )
                        }
                        return "";
                    })
                    }
                </table>
                
            </div>

        )
    }

}
const mapStateToProps = (state) => {
    return {
        //prop name:state
        chairList: state.chair.chairList,
    }
}

export default connect(mapStateToProps)(ChairList)