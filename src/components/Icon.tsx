import {
  Factory, FlaskConical, Handshake, Microscope, ShieldCheck, Sprout, Tractor, Truck, type LucideProps,
} from "lucide-react";

const MAP = { Factory, FlaskConical, Handshake, Microscope, ShieldCheck, Sprout, Tractor, Truck };

export default function Icon({ name, ...p }: { name: string } & LucideProps) {
  const C = MAP[name as keyof typeof MAP] ?? Sprout;
  return <C {...p} />;
}
