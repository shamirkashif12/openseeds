import Link from "next/link";
import { Sprout } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center px-4 pt-24 text-center">
      <div>
        <Sprout className="floaty mx-auto text-leaf" size={72} />
        <h1 className="mt-4 text-6xl font-extrabold text-gradient">404</h1>
        <p className="mt-2 text-xl">Yeh safha nahi mila — shayad abhi ug raha hai!</p>
        <Link href="/" className="btn-primary mt-8">Home par Jayein</Link>
      </div>
    </section>
  );
}
