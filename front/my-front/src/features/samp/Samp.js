import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudentsAsync, selectStudents, delStudentsAsync } from './sampSlice';
import { toast } from 'react-toastify';

export function Samp() {
    const students = useSelector(selectStudents);
    const [searchTerm, setSearchTerm] = useState('');
    const [deletingId, setDeletingId] = useState(null);
    const filteredStudents = students.filter(student => {
        return student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.subject.toLowerCase().includes(searchTerm.toLowerCase())
    });
    const handleDelete = id => {
        setDeletingId(id);
        dispatch(delStudentsAsync(id));
        dispatch(delStudentsAsync(id));
        toast.success('Student Deleted Successfully!');
      };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStudentsAsync())
    }, [students.length])


    return (
        <div>
            <br/><input style={{width:170,height:30}} placeholder="Search by name or subject" onChange={(e) =>
                 setSearchTerm(e.target.value)} />
                 <br/><h1>{filteredStudents.length}</h1>
            {filteredStudents.map((stu, i) =>
                <div key={i}><br /><button disabled={stu.id === deletingId} onClick={() => handleDelete(stu.id)}>Delete</button>
                    {" "}Email: {stu.email}<br />
                    {" "} Name: {stu.name}<br />
                    {" "} Grade: {stu.grade} in  {stu.subject}</div>
            )}
        </div>
    );
}
