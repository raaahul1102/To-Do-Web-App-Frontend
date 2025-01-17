const API_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export async function getAllTodos() {
  const response = await fetch(`${API_URL}/todos`);
  return response.json();
}

export async function createTodo(data) {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function updateTodo(id, data) {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function deleteTodo(id) {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: 'DELETE'
  });
  return response.json();
}

export async function deleteAllTodos() {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'DELETE'
  });
  return response.json();
}
