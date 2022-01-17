import { Button } from "@dont-panic/ui";

export default function Web() {
  return (
    <div className="min-h-screen">
      <div className="bg-black h-screen flex items-center justify-center flex-col">
        <h1 className="text-[10rem] font-mono text-yellow-300 font-bold leading-none">DON'T <br /> PANIC!</h1>
        <Button />
      </div>
    </div>
  );
}