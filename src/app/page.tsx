import { Button } from "@/shared/ui/button";
import { Block } from "@/shared/ui/block";

export default function Home() {
  return (
    <main>
      <h1>Vbrato</h1>

      <Block className="m-4 h-64 w-96">
        <Button variant="default">Sign In</Button>
      </Block>

      <Block className="m-4 h-64 w-96">
        <Button variant="outline">Sign Out</Button>
      </Block>

      <p>Environment: {process.env.NEXT_PUBLIC_API_URL}</p>
    </main>
  );
}
