import React, { Component } from 'react'
import styles from "./styleBill.module.css"
import clsx from 'clsx'
import { connect } from 'react-redux'
export class BillList extends Component {
    render() {
        const count = this.props.billList.length;
        console.log("bill", this.props.billList)
        return (
            <div className='container  w-100'>
                <h3 className='text-white mb-5'>Danh Sách Bạn Chọn Ghế</h3>
                <ul className='text-white'>
                    <li className={clsx(styles.smallBox, styles.greenBox)}>Ghế đã chọn</li>

                    <li className={clsx(styles.smallBox, styles.redBox)}>Ghế đã đặt</li>

                    <li className={clsx(styles.smallBox, styles.emptyBox)}>Ghế trống</li>
                </ul>
                <table className={clsx(styles.table, "text-white", styles.bgBill)}>
                    <thead>
                        <tr>
                            <th >Số Lượng Ghế</th>
                            <th >Số Ghế</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                            <td style={{ width: "25%" }}>{count}</td>
                            <td style={{ width: "75%" }}>{
                                this.props.billList?.map((item) => {
                                    return (
                                        <span>{item.seats}, </span>
                                    )
                                })
                            }
                            </td>
                        </tr>


                    </tbody>
                </table>

                <div className='d-flex justify-content-between mt-2'>
                    <span className='text-white'>Tổng Tiền : {count*5} $</span>
                    <button className='bnt btn-info'>Thanh Toán</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        //prop name:state
        billList: state.bill.billList
    }
}
export default connect(mapStateToProps)(BillList)