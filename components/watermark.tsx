import Link from "next/link"

export function Watermark() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <p className="text-white/60 text-sm font-light">
        created by{" "}
        <Link
          href="https://instagram.com/ready_ui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-300 hover:text-orange-200 transition-colors duration-200 underline decoration-orange-300/50 hover:decoration-orange-200 underline-offset-2"
        >
          ready_ui
        </Link>
      </p>
    </div>
  )
}
