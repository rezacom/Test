import React from 'react'

export default function Table() {
    return (
        <div className="table-c">
            <div className="table-c__head flex items-center">
                <div className="table-c__head_left">
                    <span>Ingredients</span>
                </div>
                <div className="table-c__head_right flex-grow flex justify-end">
                    <div className="table-c__head_mode flex items-center justify-between">
                        <span className="table-c__head_mode__text">Expand Mode</span>
                        <div className="table-c__head_mode_btn">
                            <button className="btn-yes">Yes</button>
                            <button className="btn-no">No</button>
                        </div>
                    </div>
                    <button className="table-c__head_new-btn flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#162641" />
                        </svg>
                        <span>New Product</span>
                    </button>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Manufacturer</th>
                        <th>Manufacturer</th>
                        <th>Manufacturer</th>
                        <th>Manufacturer</th>
                        <th>Manufacturer</th>
                        <th>Manufacturer</th>
                        <th>Manufacturer</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>#</div></td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>#</div></td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>#</div></td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                        <td>
                            <div>text</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
