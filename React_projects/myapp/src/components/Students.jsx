import React from 'react';
import stud from './students.json';

function StudentInfo() {
    return (
        <div>
            <h3 className='comp1h3'>Student Information</h3>
            <table border='2' width='50%' height='200px' align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Class</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stud.map((element) => (
                            <tr key={element.ID}>
                                <td>{element.ID}</td>
                                <td>{element.Name}</td>
                                <td>{element.Gender}</td>
                                <td>{element.Class}</td>
                                <td>{element.Email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default StudentInfo;