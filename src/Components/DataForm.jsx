import { useState } from "react";
import { Navigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, addDoc } from 'firebase/firestore';

export const DataForm = (props) => {

    const [submitted, setSubmitted] = useState(false);
    const [idNumber, setIdNumber] = useState('');
    const [grade, setGrade] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(idNumber, grade)
        try {
            const docRef = await addDoc(collection(db, "StudentGrades"), {
                idNumber: idNumber,
                grade: grade
            });
            setSubmitted(true);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
       <div>
            <form onSubmit={handleSubmit}>
            <label>
                ID Number
                <input 
                type="text"
                name="ID Number"
                value={idNumber} 
                onChange={(e) => setIdNumber(e.target.value)} />
            </label>
            <br />
            <label>
                Grade
                <input
                type="text"
                name="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
            </form>

            {submitted && (
                <Navigate replace to="/DataTable" />
            )}
        </div>
    )
}