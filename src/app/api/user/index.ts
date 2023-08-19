import { type NextApiRequest, type NextApiResponse } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: '500kb'
    }
  }
}
