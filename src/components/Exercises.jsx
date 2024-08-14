import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExercise, deleteExercise } from '../features/exerciseSlice';
import { Button, Form, ListGroup } from 'react-bootstrap';


const Exercises = () => {
    const dispatch = useDispatch();
    const exercises = useSelector((state) => state.exercises);
  
    const handleAddExercise = (e) => {
      e.preventDefault();
      const type = e.target.elements.type.value;
      const duration = e.target.elements.duration.value;
      const calories = e.target.elements.calories.value;
  
      dispatch(addExercise({ type, duration: parseInt(duration), calories: parseInt(calories) }));
      e.target.reset();
    };
  
    return (
      <div>
        <h2>Exercises Log</h2>
        <Form onSubmit={handleAddExercise}>
          <Form.Group controlId="formExerciseType">
            <Form.Label>Exercise Type</Form.Label>
            <Form.Control type="text" name="type" required />
          </Form.Group>
          <Form.Group controlId="formExerciseDuration">
            <Form.Label>Duration (minutes)</Form.Label>
            <Form.Control type="number" name="duration" required />
          </Form.Group>
          <Form.Group controlId="formExerciseCalories">
            <Form.Label>Calories Burned</Form.Label>
            <Form.Control type="number" name="calories" required />
          </Form.Group>
          <Button variant="primary" type="submit">Add Exercise</Button>
        </Form>
        <ListGroup>
          {exercises.map((exercise, index) => (
            <ListGroup.Item key={index}>
              <div>Type: {exercise.type}</div>
              <div>Duration: {exercise.duration} minutes</div>
              <div>Calories: {exercise.calories}</div>
              <Button
                variant="danger"
                onClick={() => dispatch(deleteExercise(index))}
                className="mt-2"
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  };
  
  export default Exercises;