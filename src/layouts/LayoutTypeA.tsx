import HeaderTypeA from "@/components/organisms/headerTypeA/HeaderTypeA";

interface Props {
  children: React.ReactNode;
}

export default function LayoutTypeA(props: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <HeaderTypeA />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 md:px-40">
        {props.children}
      </main>
    </div>
  );
}
