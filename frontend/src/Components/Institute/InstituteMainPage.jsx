import React from 'react'
import "./Institute.css"
import { useGetInstituteQuery } from '../../api/InstituteApi'
import penIcon from "../../assets/pen-icon.svg"


function InstituteMainPage() {
    const { data, isLoading, error } = useGetInstituteQuery()
    const thead = [
        "Name",
        "Email",
        "Phone",
        "City",
        "Status",
        "Actions"
    ]


    return (
        <>
            <table className='institute-table'>
                <thead>
                    {thead.map((head, index) => (
                        <th key={index}>{head}</th>
                    ))}
                </thead>
                <tbody>
                    {data?.data?.map((institute) => (
                        <tr key={institute._id}>
                            <td>{institute.instituteName}</td>
                            <td>{institute.email}</td>
                            <td>{institute.phone}</td>
                            <td>{institute.city}</td>
                            <td>{institute.status}</td>
                            <td>
                                <img
                                    src={penIcon}
                                    className='icon-style'
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default InstituteMainPage