import Image from "next/image"

export default function Home() {
  return (
		<main className="flex-col item-center h-[100vh] bg-white pt-24">
			<Image
				src="/projects/isee.jpg"
				width={256}
				height={256}
				alt="Picture of the author"
				className="m-auto"
			/>
			<h1 className="text-2xl text-center p-4">Quer ver minha foto de perfil? Resolva o enigma abaixo...</h1>
			<p className="pt-4 text-center">fazueli=watch</p>
			<p className="text-center">(fazueli)?v=EnTZTRFHmUo</p>
		</main>
  );
}
