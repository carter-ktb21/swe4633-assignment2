import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from "react-router-dom";

export const DataTable = () => {
    const [data, setData] = useState([]);
    const [average, setAverage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'StudentGrades'));
        const fetchedData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          field1: parseFloat(doc.data().idNumber),
          field2: parseFloat(doc.data().grade),
        }));
        setData(fetchedData.sort((a, b) => a.field1 - b.field1));

        const totalField2 = fetchedData.reduce((acc, item) => acc + item.field2, 0);
        const avgField2 = totalField2 / fetchedData.length;
        setAverage(avgField2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
        <div className="button-container">
            <Link to="/" className="button">Back</Link>
        </div>
      <h1>Firebase Data:</h1>
      <table>
        <thead>
          <tr>
            <th>ID Number</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.field1}</td>
              <td>{item.field2}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container">
        <h2>Average: {average}</h2>
      </div>
    </div>
  );
}