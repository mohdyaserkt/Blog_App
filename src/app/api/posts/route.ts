import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    handleGet(req, res);
  } else if (req.method === 'POST') {
    handlePost(req, res);
  } else if (req.method === 'PUT') {
    handlePut(req, res);
  } else if (req.method === 'DELETE') {
    handleDelete(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

function handleGet(req: NextApiRequest, res: NextApiResponse) {
  // Handle GET request logic here
  res.status(200).json({ message: 'GET request handled successfully' });
}

function handlePost(req: NextApiRequest, res: NextApiResponse) {
  // Handle POST request logic here
  res.status(200).json({ message: 'POST request handled successfully' });
}

function handlePut(req: NextApiRequest, res: NextApiResponse) {
  // Handle PUT request logic here
  res.status(200).json({ message: 'PUT request handled successfully' });
}

function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  // Handle DELETE request logic here
  res.status(200).json({ message: 'DELETE request handled successfully' });
}
