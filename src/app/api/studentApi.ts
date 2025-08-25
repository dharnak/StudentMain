'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//
console.log("API URL:", process.env.NEXT_PUBLIC_API_URL)

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
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    postStudent: builder.mutation<Student,Partial<Student>>({
      query: (studentData) => ({
        url: '/postData',
        method: 'POST',
        body: studentData,
      }),
    }),
  }),
})

export const { usePostStudentMutation } = studentApi
