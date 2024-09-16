// app/actions.ts
'use server'

interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  location: string;
}

const users: User[] = [
  { id: '1', name: 'John Doe', phoneNumber: '123-456-7890', email: 'john@example.com', location: 'New York, NY' },
  { id: '2', name: 'Jane Smith', phoneNumber: '234-567-8901', email: 'jane@example.com', location: 'Los Angeles, CA' },
  { id: '3', name: 'Alice Johnson', phoneNumber: '345-678-9012', email: 'alice@example.com', location: 'Chicago, IL' },
  { id: '4', name: 'Bob Williams', phoneNumber: '456-789-0123', email: 'bob@example.com', location: 'Houston, TX' },
  { id: '5', name: 'Charlie Brown', phoneNumber: '567-890-1234', email: 'charlie@example.com', location: 'Phoenix, AZ' },
];

export async function searchUsers(query: string): Promise<User[]> {
  // Simulate a delay to mimic a database query
  await new Promise(resolve => setTimeout(resolve, 500));

  return users.filter(user => user.name.toLowerCase().startsWith(query.toLowerCase()));
}