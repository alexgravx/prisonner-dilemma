import Image from 'next/image'

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <article key={"test"}>
        <h1>Prisonner Dilemma</h1>
        <div className="relative p-3 rounded-lg  bg-gray-200 text-black mt-8">
          <Image
            src="/prisonner.jpg"
            width={1000}
            height={3000}
            alt="Prisonner Dilemma illustration"
          />
        </div>
      </article>
    </div>
  )
}
