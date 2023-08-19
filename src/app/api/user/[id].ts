import { type NextApiRequest, type NextApiResponse } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  res.status(200).json({ id, message: 'Hello from Next.js!' })
}

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: '500kb'
    }
  }
}
