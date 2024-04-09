import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    posts: [
      { id: 1, title: 'First post' },
      { id: 2, title: 'Second post' },
      { id: 3, title: 'Third post' },
    ],
  });
}
