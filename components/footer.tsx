export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950">
      <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-6">
        <div className="text-center">
          <p className="text-white/30 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Devinda Wijesinghe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
