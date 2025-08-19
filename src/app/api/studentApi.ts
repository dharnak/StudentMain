'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Student {
  firstname: string
  lastname: string
  id: string
  class: string
  busnumber: string
  fees: string
  address: string
  gender?: string
  department?: string
}
export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    postStudent: builder.mutation<Student,Partial<Student>>({
      query: (studentData) => ({
        url: 'postData',
        method: 'POST',
        body: studentData,
      }),
    }),
  }),
})

export const { usePostStudentMutation } = studentApi
