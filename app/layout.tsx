import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceChaser – Automate Late Payment Follow-ups',
  description: 'Automatically sends escalating email sequences to clients with overdue invoices. Save time and get paid faster.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1b750201-a8cd-4047-b1b8-e05a99a51654"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
