/// <reference types="@sveltejs/kit" />

/* eslint-disable @typescript-eslint/no-explicit-any */

interface ImportMetaEnv {
  VITE_GOOGLE_CLIENT_ID: string
}

type AuthenticationResult = {
  statusCode: number
  status: string
  user: User
  sessionId: string
}

type Credentials = {
  email: string
  password: string
}

type MessageAddressee = {
  email: string
  name?: string
}

type Message = {
  sender?: MessageAddressee[]
  to: MessageAddressee[]
  subject: string
  htmlContent?: string
  textContent?: string
  tags?: string[]
  contact?: Person
}

type User = {
  id?: number
  role?: 'student' | 'teacher' | 'admin'
  password?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

type UserSession = {
  id: string,
  user: User
}

interface Window {
  google?: any
}