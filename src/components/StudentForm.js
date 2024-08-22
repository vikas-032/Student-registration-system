
// src/components/StudentForm.js
import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    gender: '',
    course: '',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    setStudent({ name: '', age: '', gender: '', course: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="number"
        name="age"
        value={student.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <select name="gender" value={student.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input
        type="text"
        name="course"
        value={student.course}
        onChange={handleChange}
        placeholder="Course"
        required
      />
      <button type="submit">Register Student</button>
    </form>
  );
};

export default StudentForm;
