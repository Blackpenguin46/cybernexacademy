export default function FundamentalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-6 py-12">
      {children}
    </div>
  )
}

