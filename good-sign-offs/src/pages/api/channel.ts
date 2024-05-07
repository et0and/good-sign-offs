import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const channelUrl = 'https://api.are.na/v2/channels/good-sign-offs/contents';
  const response = await fetch(channelUrl);
  const data = await response.json();

  res.status(200).json(data);
}