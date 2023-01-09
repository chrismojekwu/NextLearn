// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


const mocks = [
  {
      id: 0,
      name: "Test 1",
      joinDate: "01/01/2023",
      status: "active",
      assignments: [
          {
              location: "Location 1",
              date: "02/03/2023"
          },
          {
              location: "Location 2",
              date: "02/04/2023"
          },
          {
              location: "Location 3",
              date: "02/04/2023"
          },
          {
              location: "Location 4",
              date: "02/04/2023"
          }
      ]
  },
  {
      id: 0,
      name: "Test 2",
      joinDate: "01/01/2023",
      status: "active",
      assignments: [
          {
              location: "Location 1",
              date: "02/03/2023"
          }
      ]
  },
  {
      id: 0,
      name: "Test 3",
      joinDate: "01/01/2023",
      status: "active",
      assignments: [
          {
              location: "Location 1",
              date: "02/03/2023"
          },
          {
              location: "Location 2",
              date: "02/04/2023"
          },
          {
              location: "Location 3",
              date: "02/04/2023"
          }
      ]
  },
  {
      id: 0,
      name: "Test 4",
      joinDate: "01/01/2023",
      status: "active",
      assignments: [
          {
              location: "Location 1",
              date: "02/04/2023"
          },
          {
              location: "Location 2",
              date: "03/04/2023"
          }
      ]
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<T>
) {
  res.status(200).json({ mocks })
}