import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
      <Link href="/" className="flex items-center justify-center w-40 h-10 overflow-hidden">
          <Image
            src="/assets/images/logo1.svg"
            alt="Algoevent logo"
            width={300}
            height={400}
          />
        </Link>

        <p>2024 AlgoEvent. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer